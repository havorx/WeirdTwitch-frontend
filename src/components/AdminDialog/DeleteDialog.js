import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
export default function DeleteDialog(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
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
                    <span>Delete {props.type} ?</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: '#18181b', paddingBottom: '40px' }}>
                <Form onSubmit={handleSubmit}>
                    <Button className="mt-3 w-100 " variant="danger" type="submit">
                        <b>Delete</b>
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}
