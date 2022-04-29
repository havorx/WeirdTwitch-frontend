import { useContext, useState } from 'react';
import { Modal, Button, InputGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Loading from './Loading';
import { myAxios } from '../../utils/AxiosSetup';
import { UserContext } from '../../context/userContext.tsx';

export default function LoginPopup(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [validated, setValidated] = useState(false);
  const [, setUserContext] = useContext(UserContext);
  const [isLoading, setLoading] = useState(2);
  // must change to -1,0,1 later
  // 2: not submit
  // 0: loading
  // 1: successful
  // -1: failed (use XCircle for failed)

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      console.log(43);
      return;
    }

    setLoading(0); //loading

    try {
      const response = await myAxios.post('/auth/login', {
        username: username,
        password: password,
      });
      const data = response.data;
      localStorage.setItem('token', data.token);
      localStorage.setItem('username', username);
      localStorage.setItem('role', data.role ?? 'user');
      localStorage.setItem('refreshToken', data.refreshToken);
      localStorage.setItem('credits', data.credits);
      localStorage.setItem('userID', data.userID);

      setUserContext((oldValues) => {
        return {
          ...oldValues,
          token: data.token,
          username: username,
          isAdmin: data.role === 'admin',
          credits: data.credits,
          userID: data.userID,
        };
      });
      setLoading(1); //success;
      setTimeout(() => {
        props.onHide();
        setLoading(2);
      }, 1000);
    } catch (err) {
      setLoading(-1); // failed
      setTimeout(() => {
        props.onHide();
        setLoading(2);
      }, 1000);
    }
  };

  const render = () => {
    if (isLoading === 2) {
      return (
        <>
          <Modal.Header
            style={{ backgroundColor: '#18181b', justifyContent: 'center' }}
            closeButton={!isLoading}
            closeVariant="white"
          >
            <Modal.Title id="contained-modal-title-vcenter ">
              <span>Login</span>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body
            style={{ backgroundColor: '#18181b', paddingBottom: '40px' }}
          >
            <Form
              autoComplete={'off'}
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    required
                    className="inputLogin"
                    type="username"
                    placeholder="Enter username or email"
                    onChange={(event) => setUsername(event.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a username.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    required
                    className="inputLogin"
                    type="password"
                    placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a password.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Button
                className="mt-3 w-100 buttonFilledSecondary"
                variant="outline-none"
                type="submit"
              >
                <b> Submit</b>
              </Button>
            </Form>
          </Modal.Body>
        </>
      );
    } else {
      return <Loading loaded={isLoading} />;
    }
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      {render()}
    </Modal>
  );
}
