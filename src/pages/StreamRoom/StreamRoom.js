import { useContext, useEffect, useRef, useState } from 'react';
import { useParams, useLocation } from 'react-router';
import { Container, Col, Row } from 'react-bootstrap';
import StreamScreen from '../../components/StreamRoom/StreamScreen';
import StreamChat from '../../components/StreamRoom/StreamChat';
import './StreamRoom.css';
import { UserContext } from '../../context/userContext.tsx';
import { myAxios } from '../../utils/AxiosSetup';
import io from 'socket.io-client';

export default function StreamRoom() {
  const socket = io(
    process.env.REACT_APP_BACKEND_BASE_URL || 'http://localhost:1280',
  );
  const { roomName } = useParams();
  const { state } = useLocation();
  const [userContext] = useContext(UserContext);
  const [topic, setTopic] = useState(null);
  const [audience, setAudience] = useState([]);
  const isStreamer = state?.isStreamer;
  const audioRef = useRef(null);

  useEffect(() => {
    if (!isStreamer) {
      socket.on('board-cast-audio', (arrayBuffer) => {
        const blob = new Blob([arrayBuffer], {
          type: 'audio/ogg; codecs=opus',
        });
        audioRef.current.src = window.URL.createObjectURL(blob);
        audioRef.current.play();
      });
    }
  }, []);

  useEffect(() => {
    if (isStreamer) {
      setInterval(() => {
        navigator.mediaDevices
          .getUserMedia({ audio: true })
          .then(function (mediaStream) {
            let mediaRecorder = new MediaRecorder(mediaStream);
            mediaRecorder.onstart = function (e) {
              this.chunks = [];
            };
            mediaRecorder.ondataavailable = function (e) {
              this.chunks.push(e.data);
            };
            mediaRecorder.onstop = function (e) {
              const blob = new Blob(this.chunks, {
                type: 'audio/ogg; codecs=opus',
              });
              socket.emit('send-audio', { blob, roomName });
            };

            // Start recording
            mediaRecorder.start();

            // Stop recording after 5 seconds and broadcast it to server
            setTimeout(() => {
              mediaRecorder.stop();
            }, 500);
          });
      }, 500);
    }
  });

  function getRoomDetail() {
    myAxios.get(`/rooms/get-room/${roomName}`).then(async (response) => {
      if (response) {
        if (response.statusText === 'OK') {
          const data = await response.data;
          setAudience(data.members);
        }
      }
    });
  }

  useEffect(() => {
    getRoomDetail();
    socket.emit('join-room', {
      roomName: roomName,
      username: userContext.username,
    });

    socket.on('update-audience', () => {
      getRoomDetail();
    });
  }, []);

  return (
    <article>
      <Container>
        <Row>
          <Col xs={9}>
            <StreamScreen
              member={audience?.length ?? 0}
              setTopic={setTopic}
              topic={topic}
              roomName={roomName}
              isStreamer={isStreamer}
              socket={socket}
            />
          </Col>
          <Col className="room-border p-0" xs={3}>
            <aside>
              <StreamChat
                audience={audience}
                setTopic={setTopic}
                roomName={roomName}
                isStreamer={isStreamer}
                socket={socket}
              />
            </aside>
          </Col>
        </Row>
        {!isStreamer ?? <audio src="" ref={audioRef} />}
      </Container>
    </article>
  );
}
