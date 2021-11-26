import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import StreamScreen from '../../components/StreamRoom/StreamScreen'
import StreamComment from '../../components/StreamRoom/StreamComment'
import './StreamRoom.css'
export default function StreamRoom() {
    return (
        <article>
            <Container>
                <Row>
                    <Col xs={9}>
                        <StreamScreen />
                    </Col>
                    <Col className="room-border p-0" xs={3}>
                        <aside >
                            <StreamComment />
                        </aside>
                    </Col>
                </Row>
            </Container>
        </article>
    )
}
