import React from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import {myAxios} from "../../utils/AxiosSetup";
import {useNavigate} from "react-router";

export default function DeleteDialog(props) {
    const ID = props.currentID;
    const deleteType = props.type;

    const handleSubmit = (e) => {
        e.preventDefault();
        switch (deleteType) {
            case 'User':
                myAxios.delete('/user/delete-user', {params: {ID}}).then(response => {
                    if (response) {
                        if (response.statusText === 'OK') {
                            props.onHide();
                            window.location.reload();
                        }
                    }
                });
                break;
            case 'Category':
                myAxios.delete('/category/delete-category', {params: {ID}}).then(response => {
                    if (response) {
                        if (response.statusText === 'OK') {
                            props.onHide();
                            window.location.reload();
                        }
                    }
                });
                break;
            case 'Livestream':
                myAxios.delete('/rooms/delete-room', {params: {ID}}).then(response => {
                    if (response) {
                        if (response.statusText === 'OK') {
                            props.onHide();
                            window.location.reload();
                        }
                    }
                });
                break
            default:
                props.onHide();

        }
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
                    <span>Delete {props.type} ?</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{backgroundColor: '#18181b', paddingBottom: '40px'}}>
                <Form onSubmit={handleSubmit}>
                    <Button className="mt-3 w-100 " variant="danger" type="submit">
                        <b>Delete</b>
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}
