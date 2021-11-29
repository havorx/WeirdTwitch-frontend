import { useContext, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Loading from './Loading';
import { myAxios } from '../../utils/AxiosSetup';
import { UserContext } from '../../context/userContext.tsx';

export default function LoginPopup(props) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [, setUserContext] = useContext(UserContext);

  const [isLoading, setLoading] = useState(2);
  // must change to -1,0,1 later
  // 2: not submit
  // 0: loading
  // 1: successful
  // -1: failed (use XCircle for failed)

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(0); //loading

    myAxios.post('/auth/login', {
      username: username,
      password: password,
    }).then(async response => {
      if (response.statusText !== 'OK') {
        if (response.status === 400) {
          setError('Invalid username or password');
        }
        setLoading(-1) //failed;
        props.onHide();
      } else {
        const data = await response.data;
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', username);
        localStorage.setItem('role', data.role);

        setUserContext(oldValues => {
          return {
            ...oldValues,
            token: data.token,
            username: username,
            isAdmin: data.role === 'admin',
          };
        });

        setLoading(1) //success;
        props.onHide();
      }
    });

    /*        //test timeout
            firstTimeout = setTimeout(() => {
                setLoaded(true)
            }, 1000)

            secondTimeout = setTimeout(() => {
                //hide loading popup
                setLoading(false);
                setLoaded(false);
                //hide login popup
                props.onHide();
            }, 2000)*/
  };

  const render = () => {
    if (isLoading === 2) {
      return (<>
        <Modal.Header
          style={{ backgroundColor: '#18181b', justifyContent: 'center' }}
          closeButton={!isLoading}
          closeVariant="white">
          <Modal.Title id="contained-modal-title-vcenter ">
            <span>Login</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{ backgroundColor: '#18181b', paddingBottom: '40px' }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control className="inputLogin" type="username"
                placeholder="Enter username or email"
                onChange={event => setUsername(
                  event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control className="inputLogin" type="password"
                placeholder="Password"
                onChange={event => setPassword(event.target.value)}
              />
            </Form.Group>
            <Button className="mt-3 w-100 buttonFilledSecondary"
              variant="outline-none" type="submit">
              <b> Submit</b>
            </Button>
          </Form>
        </Modal.Body>
      </>)
    } else {
      return <Loading loaded={isLoading} />
    }
  }

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {render()}
    </Modal>
  );
}
