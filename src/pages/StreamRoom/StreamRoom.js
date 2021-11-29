import React, {useContext, useEffect} from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import StreamScreen from '../../components/StreamRoom/StreamScreen';
import StreamChat from '../../components/StreamRoom/StreamChat';
import {useParams} from 'react-router';
import {useLocation} from 'react-router';
import './StreamRoom.css';
import {socket} from '../../services/socketIO.js';
import {UserContext} from '../../context/userContext.tsx';

export default function StreamRoom() {
  const {roomName} = useParams();
  const {state} = useLocation();
  const [userContext] = useContext(UserContext);
  const isStreamer = state?.isStreamer;

  useEffect(() => {
    if (isStreamer !== true) {
      socket.emit('join-room',
          {roomName: roomName, username: userContext.username});
    } else {
      socket.emit('create-room',
          {roomName: roomName, username: userContext.username});
    }
  }, []);

  return (
      <article>
        <Container>
          <Row>
            <Col xs={9}>
              <StreamScreen roomName={roomName} isStreamer={isStreamer}/>
            </Col>
            <Col className="room-border p-0" xs={3}>
              <aside>
                <StreamChat roomName={roomName} isStreamer={isStreamer}/>
              </aside>
            </Col>
          </Row>
        </Container>
      </article>
  );
}
