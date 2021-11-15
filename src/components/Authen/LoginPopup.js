import { Modal, Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'

export default function LoginPopup(props) {
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header style={{ backgroundColor: '#18181b', justifyContent: 'center' }} closeButton closeVariant="white">
                <Modal.Title id="contained-modal-title-vcenter ">
                    <span>Login to Nguyen</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: '#18181b', paddingBottom: '40px' }}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className="inputLogin" type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className="inputLogin" type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className="mt-3 w-100 buttonFilledSecondary" variant="outline-none" type="submit">
                        <b> Submit</b>
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}
