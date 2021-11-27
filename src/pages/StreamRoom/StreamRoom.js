import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import StreamScreen from '../../components/StreamRoom/StreamScreen'
import StreamComment from '../../components/StreamRoom/StreamComment'
import { useParams } from 'react-router'
import './StreamRoom.css'
export default function StreamRoom() {
    const { roomName } = useParams();
    const isStreamer = true;

    return (
        <article>
            <Container>
                <Row>
                    <Col xs={9}>
                        <StreamScreen roomName={roomName} isStreamer={isStreamer} />
                    </Col>
                    <Col className="room-border p-0" xs={3}>
                        <aside >
                            <StreamComment isStreamer={isStreamer} />
                        </aside>
                    </Col>
                </Row>
            </Container>
        </article>
    )
}
