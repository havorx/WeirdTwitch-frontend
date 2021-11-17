import { Navbar, Nav, Image, InputGroup, FormControl, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import image from '../../assets/03-glitch.jpg';
import './Navbar.css';
import { Search as SearchIcon, Bell as BellIcon } from 'react-feather'
import { PRIMARY_TEXT } from '../../utils/Const';
import { useState } from 'react';
import LoginPopup from '../Authen/LoginPopup';
import RegisterPopup from '../Authen/RegisterPopup';
import DropdownUser from './DropdownUser';
export default function MainNav() {

    const [loginShow, setLoginShow] = useState(false);
    const [registerShow, setRegisterShow] = useState(false);
    const user = true;

    return (
        <Navbar className="d-flex justify-content-between align-items-center"
            bg="dark" variant="dark" style={{ padding: '10px 20px' }} fixed="top"
        >
            <div className="d-flex justify-content-between align-items-center w-100">
                <Col className="d-flex justify-content-between align-items-center">
                    <Image className="logo" src={image} />
                    <Nav className="me-auto" style={{ fontSize: '1.4rem', padding: '0px 1.5rem' }}>
                        <Nav.Link style={{ fontWeight: 600 }} href="#home">Browse</Nav.Link>
                    </Nav>
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                    <InputGroup>
                        <FormControl className="search-input" placeholder="Search" >
                        </FormControl>
                    </InputGroup>
                    <Button className="search-btn" id="basic-addon1"><SearchIcon /></Button>
                </Col>
                <Col className="d-flex justify-content-end align-items-center">
                    {!user ?
                        <>
                            <Button className="me-2 buttonFilledPrimary" variant="outline-none"
                                onClick={() => { setLoginShow(true) }}
                            >
                                Login
                            </Button>
                            <Button className="me-2 buttonFilledSecondary" variant="outline-none"
                                onClick={() => { setRegisterShow(true) }}
                            >
                                Sign up
                            </Button>
                        </>
                        : <>
                            <Button className="me-2 buttonFilledSecondary" variant="outline-none">Add Credits</Button>
                            <Button style={{ color: PRIMARY_TEXT }} variant="outline-none"><BellIcon /></Button>
                            <DropdownUser />
                        </>
                    }
                </Col>
            </div>
            <LoginPopup show={loginShow} onHide={() => setLoginShow(false)} />
            <RegisterPopup show={registerShow} onHide={() => setRegisterShow(false)} />
        </Navbar>
    )
}

// setLoaded
