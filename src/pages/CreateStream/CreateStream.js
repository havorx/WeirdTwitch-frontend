import React, { useState } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
export default function CreateStream() {
    const navigate = useNavigate();
    const [roomName, setRoomName] = useState("");

    const handleCreate = (e) => {
        e.preventDefault();
        if (true) {
            navigate(`/stream/room/${roomName}`);
        }
    }

    return (
        <article>
            <Container className="mt-5">
                <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
                    <h4 className="mb-3">Create Room</h4>
                    <Form style={{ width: '500px' }} onSubmit={handleCreate}>
                        <Row className="mb-5">
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Room's name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Room's name"
                                    onInput={(e) => { setRoomName(e.target.value) }}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Category</Form.Label>
                                <Form.Select required >
                                    <option>Large select</option>
                                    <option>Large select</option>
                                    <option>Large select</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row className="mb-5 px-2">
                            <Form.Control
                                required
                                as="textarea"
                                placeholder="Description"
                                style={{ minHeight: '100px' }}
                            />
                        </Row>

                        <Row className="mb-3 d-flex flex-row">
                            <Form.Group className="d-flex justify-content-end" as={Col} md="6" controlId="validationCustom01">
                                <Button style={{ width: '100px' }} className="me-2 buttonOutlined" >Cancel</Button>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Button style={{ width: '100px' }} className="me-2 buttonFilledSecondary" variant="outline-none"
                                    type="submit"
                                >
                                    Create
                                </Button>
                            </Form.Group>
                        </Row>
                    </Form>
                </div>
            </Container>
        </article>
    )
}
