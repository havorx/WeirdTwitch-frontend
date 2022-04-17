import {useState} from 'react';
import {Modal, Button, InputGroup} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import Loading from './Loading';
import {myAxios} from '../../utils/AxiosSetup';
import {UserContext} from '../../context/userContext.tsx';

export default function RegisterPopup(props) {

    const [validated, setValidated] = useState(false);
    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [, setUserContext] = useState(UserContext);

    const [isLoading, setLoading] = useState(2);
    // must change to -1,0,1 later
    // 2: not submit
    // 0: loading
    // 1: successful
    // -1: failed (use XCircle for failed)

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        console.log(validated);
        setValidated(true);
        /*event.preventDefault();
        setLoading(0);

        myAxios.post('/auth/signup', {
            username: username,
            password: password,
        }).then(async response => {
            if (response.statusText !== 'OK') {
                if (response.status === 400) {
                    setError('Invalid username or password');
                }
                setLoading(-1) // failed
            } else {
                const data = await response.data;
                setUserContext(oldValues => {
                    return {
                        ...oldValues,
                        token: data.token,
                        isAdmin: data.role === 'admin',
                    };
                });

                //hide loading popup
                setLoading(1) //success
                //hide login popup
                setTimeout(() => {
                    props.onHide();
                    setLoading(2);
                }, 500);
            }
        });*/
    };

    const render = () => {
        if (isLoading === 2) {
            return (
                <>
                    <Modal.Header
                        style={{backgroundColor: '#18181b', justifyContent: 'center'}}
                        closeButton
                        closeVariant="white">
                        <Modal.Title id="contained-modal-title-vcenter ">
                            <span>Register</span>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body
                        style={{backgroundColor: '#18181b', paddingBottom: '40px'}}>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>

                            <Form.Group className="mb-3" controlId="validationCustomUsername">
                                <Form.Label>Username</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control required className="inputLogin" type="text"
                                                  placeholder="Enter username"
                                                  onChange={event => setUsername(
                                                      event.target.value)}/>
                                    <Form.Control.Feedback type="invalid">
                                        Please choose a username.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control className="inputLogin" type="password"
                                              placeholder="Password"
                                              onChange={event => setPassword(
                                                  event.target.value)}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="validationCustomFullName">
                                <Form.Label>Full name</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control required className="inputLogin" type="text"
                                                  placeholder="Enter your full name"
                                                  onChange={event => setFullName(
                                                      event.target.value)}/>
                                    <Form.Control.Feedback type="invalid">
                                        Please enter your full name.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control className="inputLogin" type="password"
                                              placeholder="Password"
                                              onChange={event => setPassword(
                                                  event.target.value)}/>
                            </Form.Group>
                            <Button className="mt-3 w-100 buttonFilledSecondary"
                                    variant="outline-none" type="submit">
                                <b> Submit</b>
                            </Button>
                        </Form>
                    </Modal.Body>
                </>)
        } else {
            return <Loading loaded={isLoading}/>
        }
    }

    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {
                render()
            }
        </Modal>
    );
}
