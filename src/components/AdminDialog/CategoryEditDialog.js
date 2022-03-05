import React, {useState} from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import {myAxios} from "../../utils/AxiosSetup";
export default function CategoryEditDialog(props) {
    const [categoryName, setCategoryName] = useState('');
    const categoryID = props.currentID;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (categoryName.trim() !== '') {
            myAxios.patch('/category/edit-category', {categoryName, categoryID}).then(response => {
                if (response) {
                    if (response.statusText === 'OK') {
                        props.onHide();
                        window.location.reload();
                    }
                }
            });
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
                    <span>Edit Category</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{backgroundColor: '#18181b', paddingBottom: '40px'}}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Category Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter category name"
                                      autocomplete="off"
                                      onChange={event => setCategoryName(event.target.value)}/>
                    </Form.Group>
                    <Button className="mt-3 w-100 buttonFilledSecondary" variant="outline-none" type="submit">
                        <b> Submit</b>
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}
