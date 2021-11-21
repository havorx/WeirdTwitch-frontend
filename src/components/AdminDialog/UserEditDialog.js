import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { PRIMARY_TEXT, SUB_PRIMARY_COLOR } from '../../utils/Const';
export default function UserEditDialog(props) {

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
                    <span>Edit User</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: '#18181b', paddingBottom: '40px' }}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter user name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter user email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicSelect">
                        <Form.Label>Status</Form.Label>
                        <Form.Select aria-label="Floating label select example" style={{ backgroundColor: SUB_PRIMARY_COLOR, color: PRIMARY_TEXT }}>
                            <option value="active">Active</option>
                            <option value="disable">Disable</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Fullname</Form.Label>
                        <Form.Control type="text" placeholder="Enter user fullname" />
                    </Form.Group>
                    <Button className="mt-3 w-100 buttonFilledSecondary" variant="outline-none" type="submit">
                        <b> Submit</b>
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}
