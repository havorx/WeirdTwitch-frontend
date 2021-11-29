import React from 'react'
import { Modal, Button, Row, Col } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
export default function CreditDialog(props) {

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
                    <span>Add Credits</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: '#18181b', paddingBottom: '40px' }}>
                <Row className="mb-3">
                    <Col>
                        <Button className="w-100 buttonFilledSecondary" variant="outline-none" >
                            <b>50</b>
                        </Button>
                    </Col>
                    <Col>
                        <Button className="w-100 buttonFilledSecondary" variant="outline-none" >
                            <b>100</b>
                        </Button>
                    </Col>
                    <Col>
                        <Button className="w-100 buttonFilledSecondary" variant="outline-none" >
                            <b>500</b>
                        </Button>
                    </Col>
                </Row>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Label>Credit</Form.Label>
                        <Form.Control min="0" type="number" placeholder="Enter number of credits" />
                    </Form.Group>
                    <Button className="mt-3 w-100 buttonFilledSecondary" variant="outline-none" type="submit">
                        <b> Submit</b>
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}
