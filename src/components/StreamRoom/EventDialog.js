import React, {useEffect, useState} from 'react'
import {Modal, Form, Button} from 'react-bootstrap'
// import {socket} from "../../services/socketIO";

export default function EventDialog(props) {

    const [topicName, setTopicName] = useState("")
    const [topicDesc, setTopicDesc] = useState("")
    const roomName = props.roomName
    console.log(roomName);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (topicName.trim() !== '' && topicDesc.trim() !== '') {
            const {onHide} = props;
            const {setTopic} = props;
            props.socket.emit('set-topic', ({topicName, topicDesc, roomName}));
            setTopic({topicName, topicDesc})
            setTopicName("")
            setTopicDesc("")
            onHide();
        }
    }
    useEffect(() => {
        const {setTopic} = props;
        props.socket.on('update-topic', ({topicName, topicDesc}) => {
            setTopic({topicName, topicDesc})
        });
    }, []);
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header style={{backgroundColor: '#18181b', justifyContent: 'center'}} closeButton
                          closeVariant="white">
                <Modal.Title id="contained-modal-title-vcenter ">
                    <span>Create Topic</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{backgroundColor: '#18181b', paddingBottom: '40px'}}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Topic Name</Form.Label>
                        <Form.Control
                            type="text"
                            autocomplete="off"
                            placeholder="Enter category name"
                            onChange={event => {
                                setTopicName(event.target.value)
                            }}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            autocomplete="off"
                            style={{minHeight: '150px'}}
                            placeholder="Enter description"
                            onChange={(e) => {
                                setTopicDesc(e.target.value)
                            }}
                            required
                        />
                    </Form.Group>
                    <Button className="mt-3 w-100 buttonFilledSecondary" variant="outline-none" type="submit">
                        <b>Create</b>
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}
