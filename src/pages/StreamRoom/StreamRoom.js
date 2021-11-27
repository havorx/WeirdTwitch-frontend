import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import StreamScreen from '../../components/StreamRoom/StreamScreen';
import StreamChat from '../../components/StreamRoom/StreamChat';
import { useParams } from 'react-router';
import { useLocation } from 'react-router';
import './StreamRoom.css';

export default function StreamRoom() {
  const { roomName } = useParams();
  const { state } = useLocation();
  const isStreamer = state?.isStreamer;

  return (
    <article>
      <Container>
        <Row>
          <Col xs={9}>
            <StreamScreen roomName={roomName} isStreamer={isStreamer} />
          </Col>
          <Col className="room-border p-0" xs={3}>
            <aside>
              <StreamChat isStreamer={isStreamer} />
            </aside>
          </Col>
        </Row>
      </Container>
    </article>
  );
}
