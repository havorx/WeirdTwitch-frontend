import {
  Navbar,
  Nav,
  Image,
  InputGroup,
  FormControl,
  Col,
  Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../../assets/03-glitch.jpg';
import './Navbar.css';
import {Search as SearchIcon, Bell as BellIcon} from 'react-feather';
import {PRIMARY_TEXT} from '../../utils/Const';
import {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import LoginPopup from '../Authen/LoginPopup';
import RegisterPopup from '../Authen/RegisterPopup';
import DropdownUser from './DropdownUser';
import {UserContext} from '../../context/userContext.tsx';

export default function MainNav() {
  const [userContext] = useContext(UserContext);
  const [loginShow, setLoginShow] = useState(false);
  const [registerShow, setRegisterShow] = useState(false);
  console.log(userContext);
  return (
      <Navbar className="d-flex justify-content-between align-items-center"
              bg="dark" variant="dark" style={{padding: '10px 20px'}}
              fixed="top"
      >
        <div
            className="d-flex justify-content-between align-items-center w-100">
          <Col className="d-flex justify-content-between align-items-center">
            <Link to="/"> <Image className="logo" src={image}/></Link>
            <Nav className="me-auto"
                 style={{fontSize: '1.4rem', padding: '0px 1.5rem'}}>

              {userContext.isAdmin && <Link style={{fontWeight: 600, marginRight: '20px'}}
                     to="/admin">Administrator</Link>}

              <Link style={{fontWeight: 600}} to="/browse">Browse</Link>
            </Nav>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <InputGroup>
              <FormControl className="search-input" placeholder="Search">
              </FormControl>
            </InputGroup>
            <Button className="search-btn"
                    id="basic-addon1"><SearchIcon/></Button>
          </Col>
          <Col className="d-flex justify-content-end align-items-center">
            {!userContext.token ?
                <>
                  <Button className="me-2 buttonFilledPrimary"
                          variant="outline-none"
                          onClick={() => {setLoginShow(true);}}
                  >
                    Login
                  </Button>
                  <Button className="me-2 buttonFilledSecondary"
                          variant="outline-none"
                          onClick={() => {setRegisterShow(true);}}
                  >
                    Sign up
                  </Button>
                </>
                : <>
                  {!userContext.isAdmin
                      ? <>
                        <Button className="me-2 buttonFilledSecondary"
                                variant="outline-none">Add
                          Credits</Button>
                        <Button style={{color: PRIMARY_TEXT}}
                                variant="outline-none"><BellIcon/></Button>
                      </>
                      : <>
                        <b className="me-4">Logged in as
                          admin {userContext.username}</b>
                      </>
                  }
                  <DropdownUser/>
                </>
            }
          </Col>
        </div>
        <LoginPopup show={loginShow} onHide={() => setLoginShow(false)}/>
        <RegisterPopup show={registerShow}
                       onHide={() => setRegisterShow(false)}/>
      </Navbar>
  );
}

// setLoaded
