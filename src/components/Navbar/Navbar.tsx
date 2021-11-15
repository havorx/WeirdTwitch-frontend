import { Navbar, Nav, Image, InputGroup, FormControl, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import image from '../../assets/03-glitch.jpg';
import './Navbar.css';
import { Search as SearchIcon, User as UserIcon } from 'react-feather'
import { SUB_PRIMARY_COLOR, PRIMARY_TEXT } from '../../utils/Const';
import { useState } from 'react';
import LoginPopup from '../Authen/LoginPopup';
import RegisterPopup from '../Authen/RegisterPopup';
export default function MainNav() {

    const [loginShow, setLoginShow] = useState(false);
    const [registerShow, setRegisterShow] = useState(false);


    return (
        <Navbar className="d-flex justify-content-between align-items-center" bg="dark" variant="dark" style={{ padding: '10px 20px' }}>
            <div className="d-flex justify-content-between align-items-center w-100">
                <Col className="d-flex justify-content-between align-items-center">
                    <Image className="logo" src={image} />
                    <Nav className="me-auto" style={{ fontSize: '1.4rem', padding: '0px 1.5rem' }}>
                        <Nav.Link style={{ fontWeight: 600 }} href="#home">Browse</Nav.Link>
                    </Nav>
                </Col>
                <Col className="d-flex justify-content-between align-items-center">
                    <InputGroup>
                        <FormControl placeholder="Search">
                        </FormControl>
                    </InputGroup>
                    <Button style={{ background: SUB_PRIMARY_COLOR, border: 'none', outline: 'red', color: 'white' }} id="basic-addon1"><SearchIcon /></Button>
                </Col>
                <Col className="d-flex justify-content-end align-items-center">
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
                    <Button className="me-2" style={{ color: PRIMARY_TEXT }} variant="outline-none"><UserIcon /></Button>
                </Col>
            </div>
            <LoginPopup show={loginShow} onHide={() => setLoginShow(false)} />
            <RegisterPopup show={registerShow} onHide={() => setRegisterShow(false)} />
        </Navbar>
    )
}
