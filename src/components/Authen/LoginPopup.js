import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import Loading from './Loading';
export default function LoginPopup(props) {

    const [isLoading, setLoading] = useState(false);
    // must change to 0,1,2 later 
    // 0: not loaded
    // 1: successful
    // 2: failed (use XCircle for failed)
    const [loaded, setLoaded] = useState(false);
    let firstTimeout;
    let secondTimeout;
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        //test timeout 
        firstTimeout = setTimeout(() => {
            setLoaded(true)
        }, 1000)

        secondTimeout = setTimeout(() => {
            //hide loading popup
            setLoading(false);
            setLoaded(false);
            //hide login popup
            props.onHide();
        }, 2000)
    }

    useEffect(() => {
        return () => {
            clearTimeout(firstTimeout)
            clearTimeout(secondTimeout)
        }
    })

    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
        >
            {!isLoading ? <>
                <Modal.Header style={{ backgroundColor: '#18181b', justifyContent: 'center' }} closeButton={!isLoading} closeVariant="white">
                    <Modal.Title id="contained-modal-title-vcenter ">
                        <span>Login to Nguyen</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#18181b', paddingBottom: '40px' }}>
                    <Form onSubmit={handleSubmit}>
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
            </> : <Loading loaded={loaded} />}
        </Modal>
    )
}
