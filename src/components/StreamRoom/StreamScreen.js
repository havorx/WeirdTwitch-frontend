import { Card, Button } from 'react-bootstrap';
import { Radio as RadioIcon, Mic, PhoneOff } from 'react-feather';
import {
  SUB_PRIMARY_COLOR,
  SECONDARY_COLOR,
  PRIMARY_TEXT,
} from '../../utils/Const';
import { X as XIcon } from 'react-feather';
import image from '../../assets/image.webp';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { myAxios } from '../../utils/AxiosSetup';
import { useNavigate } from 'react-router';
import { SocketContext, TopicContext } from '../../pages/StreamRoom/StreamRoom';

export default function StreamScreen({ roomName, isStreamer, member }) {
  const beigeColor = '#484747fa';
  const [userContext] = useContext(UserContext);
  const socket = useContext(SocketContext);
  const [topic, setTopic] = useContext(TopicContext);

  const navigate = useNavigate();
  console.log(221, topic);

  function handleLeave() {
    myAxios
      .patch('/rooms/leave-room', {
        userID: userContext.userID,
        username: userContext.username,
        isStreamer,
        roomName,
      })
      .then((response) => {
        if (response) {
          if (response.statusText === 'OK') {
            if (isStreamer) {
              socket.emit('end-room', {
                username: userContext.username,
                roomName,
              });
            } else
              socket.emit('leave-room', {
                username: userContext.username,
                roomName,
              });
          }
        }
      });
    navigate('/');
  }

  return (
    <Card
      className="comment-side d-flex justify-content-between"
      style={{ backgroundColor: `${SUB_PRIMARY_COLOR}` }}
    >
      <Card.Header
        style={{ backgroundColor: `${SUB_PRIMARY_COLOR}`, border: 'none' }}
      >
        <div className="d-flex justify-content-between ">
          <div className="d-flex align-items-center">
            <h2 style={{ color: SECONDARY_COLOR }} className="d-inline me-4">
              {roomName}
            </h2>
            <RadioIcon style={{ color: '#00ff31' }} />
            <span className="ms-2 me-4">On Air</span>
            <span>{member} listening</span>
          </div>
        </div>
      </Card.Header>
      <Card.Body
        className="background-image h-100 d-flex justify-content-center align-items-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div style={{ width: '300px' }}>
          {topic && (
            <Card style={{ backgroundColor: `${beigeColor}` }}>
              <Card.Header>
                <div className="d-flex justify-content-between">
                  <h5 className="mb-0">Topic: {topic.topicName}</h5>
                  {isStreamer && (
                    <Button
                      variant="outline-none"
                      className="p-0"
                      style={{ color: `${PRIMARY_TEXT}` }}
                      onClick={() => {
                        setTopic(null);
                      }}
                    >
                      <XIcon size={20} />
                    </Button>
                  )}
                </div>
              </Card.Header>
              <Card.Body>
                <p className="mb-0">{topic.topicDesc}</p>
              </Card.Body>
            </Card>
          )}
        </div>
      </Card.Body>
      <Card.Footer
        className="d-flex justify-content-center align-items-center"
        style={{ backgroundColor: '#232323', border: 'none' }}
      >
        {isStreamer && (
          <Button className="audio-btn" variant="outline-none">
            <Mic />
          </Button>
        )}
        <Button
          onClick={handleLeave}
          className="audio-btn red-btn"
          variant="outline-none"
        >
          <PhoneOff />
        </Button>
      </Card.Footer>
    </Card>
  );
}
