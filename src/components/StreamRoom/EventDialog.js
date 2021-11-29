import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
export default function EventDialog(props) {

    const [topicName, setTopicName] = useState("")
    const [topicDesc, setTopicDesc] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        const { onHide } = props;
        const { setTopic } = props;
        setTopic({ topicName, topicDesc })
        setTopicName("")
        setTopicDesc("")
        onHide();
    }

    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
        >
            <Modal.Header style={{ backgroundColor: '#18181b', justifyContent: 'center' }} closeButton closeVariant="white">
                <Modal.Title id="contained-modal-title-vcenter ">
                    <span>Create Topic</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: '#18181b', paddingBottom: '40px' }}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Topic Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter category name"
                            onInput={(e) => { setTopicName(e.target.value) }}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            style={{ minHeight: '150px' }}
                            placeholder="Enter followers"
                            onInput={(e) => { setTopicDesc(e.target.value) }}
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
