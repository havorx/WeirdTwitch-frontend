import React, {useContext, useEffect, useState} from 'react';
import {Container, Form, Row, Col, Button} from 'react-bootstrap';
import {myAxios} from '../../utils/AxiosSetup';
import {useNavigate} from 'react-router';
import {socket} from '../../services/socketIO.js';
import {UserContext} from '../../context/userContext.tsx';

export default function CreateStream() {
    const [categories, setCategories] = useState([]);
    const [userContext] = useContext(UserContext);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [roomName, setRoomName] = useState('');
    const navigate = useNavigate();

    function getCategory() {
        myAxios.get('/category/get-category').then(response => {
            const data = response.data;
            const categoryList = data.map(element => element.categoryName);
            setCategories(categoryList);
        });
    }

    useEffect(() => {
        getCategory();
    }, []);

    const handleCreate = () => {

        myAxios.post('/rooms/create-room', {
            roomName: roomName,
            description: description,
            category: category,
            roomHost: userContext.username,
        }).then(response => {
            if (response) {
                if (response.statusText === 'OK')
                    socket.emit('create-room', roomName);
                navigate(`/stream/room/${roomName}`,
                    {replace: false, state: {isStreamer: true}});
            }
        }).catch(error => {
            if (error.response) {
                console.log(error.response);
            }
        });
    };

    return (
        <article>
            <Container className="mt-5">
                <div
                    className="mt-5 d-flex flex-column justify-content-center align-items-center">
                    <Form style={{width: '500px'}} onSubmit={handleCreate}>
                        <Row className="mb-5">
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Room's name</Form.Label>
                                <Form.Control
                                    autocomplete="off"
                                    required
                                    type="text"
                                    placeholder="Choose a name"
                                    onChange={event => setRoomName(event.target.value)}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Category</Form.Label>
                                <Form.Select
                                    onChange={event => setCategory(event.target.value)}
                                    required>
                                    <option>Select a category</option>
                                    {categories.map(element => (
                                        <option>{element}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Row className="mb-5 px-2">
                                <Form.Control
                                    autocomplete="off"
                                    as="textarea"
                                    placeholder="Enter description"
                                    style={{minHeight: '100px'}}
                                    onChange={event => {
                                        setDescription(event.target.value)
                                    }}
                                />
                            </Row>
                        </Form.Group>
                        <Row className="mb-3 d-flex flex-row">
                            <Form.Group className="d-flex justify-content-end" as={Col}
                                        md="6"
                                        controlId="validationCustom01">
                                <Button style={{width: '100px'}}
                                        className="me-2 buttonOutlined">Cancel</Button>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Button style={{width: '100px'}}
                                        className="me-2 buttonFilledSecondary"
                                        variant="outline-none" type="submit">Create</Button>
                            </Form.Group>
                        </Row>
                    </Form>
                </div>
            </Container>
        </article>
    );
}
