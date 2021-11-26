import React, {useEffect, useState} from 'react'
import {Container, Form, Row, Col, Button} from 'react-bootstrap'
import {myAxios} from "../../utils/AxiosSetup";

export default function CreateStream() {
    const [categories, setCategories] = useState([]);

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

    return (
        <article>
            <Container className="mt-5">
                <h5>Create Room</h5>
                <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
                    <Form style={{width: '500px'}}>
                        <Row className="mb-5">
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Room's name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Choose a name"
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Category</Form.Label>
                                <Form.Select required>
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
                                    as="textarea"
                                    placeholder="Enter description"
                                    style={{minHeight: '100px'}}
                                />
                            </Row>
                        </Form.Group>
                        <Row className="mb-3 d-flex flex-row">
                            <Form.Group className="d-flex justify-content-end" as={Col} md="6"
                                        controlId="validationCustom01">
                                <Button style={{width: '100px'}} className="me-2 buttonOutlined">Cancel</Button>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Button style={{width: '100px'}} className="me-2 buttonFilledSecondary"
                                        variant="outline-none">Create</Button>
                            </Form.Group>
                        </Row>
                    </Form>
                </div>
            </Container>
        </article>
    )
}
