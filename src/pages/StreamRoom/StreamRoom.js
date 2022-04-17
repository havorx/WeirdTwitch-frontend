import { useContext, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router";
import { Container, Col, Row } from "react-bootstrap";
import StreamScreen from "../../components/StreamRoom/StreamScreen";
import StreamChat from "../../components/StreamRoom/StreamChat";
import "./StreamRoom.css";
import { socket } from "../../services/socketIO.js";
import { UserContext } from "../../context/userContext.tsx";
import { myAxios } from "../../utils/AxiosSetup";

export default function StreamRoom() {
  const { roomName } = useParams();
  const { state } = useLocation();
  const [userContext] = useContext(UserContext);
  const [topic, setTopic] = useState(null);
  const [audience, setAudience] = useState([]);
  const isStreamer = state?.isStreamer;

  function getRoomDetail() {
    myAxios.get(`/rooms/get-room/${roomName}`).then(async (response) => {
      if (response) {
        if (response.statusText === "OK") {
          const data = await response.data;
          setAudience(data.members);
        }
      }
    });
  }

  useEffect(() => {
    getRoomDetail();
    socket.emit("join-room", {
      roomName: roomName,
      username: userContext.username,
    });

    socket.on("update-audience", () => {
      getRoomDetail();
    });
  }, []);

  return (
    <article>
      <Container>
        <Row>
          <Col xs={9}>
            <StreamScreen
              member={audience.length}
              setTopic={setTopic}
              topic={topic}
              roomName={roomName}
              isStreamer={isStreamer}
            />
          </Col>
          <Col className="room-border p-0" xs={3}>
            <aside>
              <StreamChat
                audience={audience}
                setTopic={setTopic}
                roomName={roomName}
                isStreamer={isStreamer}
              />
            </aside>
          </Col>
        </Row>
      </Container>
    </article>
  );
}
