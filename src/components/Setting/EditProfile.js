import React from 'react'
import { Form, Button } from 'react-bootstrap'
export default function EditProfile({ setIsEdit, username }) {
    return (
        <>
            <h5>Change username</h5>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email" placeholder={username} />
                </Form.Group>
                <Button className="buttonFilledSecondary me-2" variant="outline-none">Save</Button>
            </Form>
            <hr />
            <h5>Change password</h5>
            <Form className="mb-3">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Old Password</Form.Label>
                    <Form.Control type="password" placeholder="Old Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password" placeholder="New Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
                <Button className="buttonFilledSecondary me-2" variant="outline-none">Save</Button>
            </Form>
            <Button className="buttonFilledPrimary w-100"  variant="outline-none" onClick={() => { setIsEdit(false) }}>Cancel</Button>
        </>
    )
}
