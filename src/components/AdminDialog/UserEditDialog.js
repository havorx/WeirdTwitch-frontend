import React, {useState} from 'react'
import {Modal, Button, FormControl} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import {PRIMARY_TEXT, SUB_PRIMARY_COLOR} from '../../utils/Const';
import {myAxios} from "../../utils/AxiosSetup";

export default function UserEditDialog(props) {
    const [role, setRole] = useState('');
    const [status, setStatus] = useState('');
    const userID = props.currentID;

    const handleSubmit = (e) => {
        e.preventDefault();
        const userRole = role === 'admin' ? 'admin' : null;
        const userStatus = status === 'active';
        myAxios.patch('/user/edit-user', {userRole, userStatus, userID}).then(response => {
            if (response) {
                if (response.statusText === 'OK') {
                    props.onHide();
                }
            }
        });

    }

    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
        >
            <Modal.Header style={{backgroundColor: '#18181b', justifyContent: 'center'}} closeButton
                          closeVariant="white">
                <Modal.Title id="contained-modal-title-vcenter ">
                    <span>Edit User</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{backgroundColor: '#18181b', paddingBottom: '40px'}}>
                <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3" controlId="formBasicSelect">
                        <Form.Label>Status</Form.Label>
                        <Form.Select onChange={event => setStatus(event.target.value)}
                                     aria-label="Floating label select example"
                                     style={{backgroundColor: SUB_PRIMARY_COLOR, color: PRIMARY_TEXT}}>
                            <option>Select</option>
                            <option value="active">Active</option>
                            <option value="disable">Disable</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicSelect">
                        <Form.Label>Role</Form.Label>
                        <Form.Select
                            onChange={event => setRole(event.target.value)}
                            aria-label="Floating label select example"
                            style={{backgroundColor: SUB_PRIMARY_COLOR, color: PRIMARY_TEXT}}>
                            <option>Select</option>
                            <option value="admin">Yes</option>
                            <option value="not admin">No</option>
                        </Form.Select>
                    </Form.Group>
                    <Button className="mt-3 w-100 buttonFilledSecondary" variant="outline-none" type="submit">
                        <b> Submit</b>
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}
