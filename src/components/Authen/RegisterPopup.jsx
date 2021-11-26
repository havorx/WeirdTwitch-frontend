import {useEffect, useState} from 'react';
import {Modal, Button, InputGroup} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import Loading from './Loading';
import {axiosPost} from "../../utils/AxiosSetup";
import {UserContext} from "../../context/userContext";

export default function RegisterPopup(props) {

    const [validated, setValidated] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userContext, setUserContext] = useState(UserContext);

    const [isLoading, setLoading] = useState(false);
    // must change to 0,1,2 later 
    // 0: not loaded
    // 1: successful
    // 2: failed (use XCircle for failed)
    const [loaded, setLoaded] = useState(false);
    let firstTimeout;
    let secondTimeout;

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        console.log(form.checkValidity());
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        setLoading(true);

        axiosPost('/auth/signup', {
            username: username,
            password: password
        }).then(async response => {
            if (!response.ok) {
                if (response.status === 400) {
                } else {
                    setLoaded(true);
                    const data = await response.json();
                    setUserContext(oldValues => {
                        return {...oldValues, token: data.token};
                    });

                    //hide loading popup
                    setLoading(false);
                    setLoaded(false);
                    //hide login popup
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
        >
            {!isLoading ? <>  <Modal.Header style={{backgroundColor: '#18181b', justifyContent: 'center'}} closeButton
                                            closeVariant="white">
                <Modal.Title id="contained-modal-title-vcenter ">
                    <span>Register</span>
                </Modal.Title>
            </Modal.Header>
                <Modal.Body style={{backgroundColor: '#18181b', paddingBottom: '40px'}}>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" controlId="validationCustomUsername">
                            <Form.Label>Username</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control required className="inputLogin" type="text" placeholder="Enter username"
                                              onChange={event => setUsername(event.target.value)}/>
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>

                        <Form.Group md="4" controlId="validationCustomUsername">
                            <Form.Label>Username</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="text"
                                    placeholder="Username"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control className="inputLogin" type="password" placeholder="Password"
                                          onChange={event => setPassword(event.target.value)}/>
                        </Form.Group>

                        <Button className="mt-3 w-100 buttonFilledSecondary" variant="outline-none" type="submit">
                            <b> Submit</b>
                        </Button>
                    </Form>
                </Modal.Body>
            </> : <Loading loaded={loaded}/>}
        </Modal>
    )
}
