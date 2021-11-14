import { Navbar, Nav, Image, InputGroup, FormControl, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import image from '../../assets/03-glitch.jpg';
import './Navbar.css';
import { Search as SearchIcon, User as UserIcon } from 'react-feather'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../utils/Const';
export default function MainNav() {
    return (
        <Navbar className="d-flex justify-content-between align-items-center" bg="dark" variant="dark" style={{ padding: '10px' }}>
            <div className="d-flex justify-content-between align-items-center w-100">
                <Col className="d-flex justify-content-between align-items-center">
                    <Image className="logo" src={image} />
                    <Nav className="me-auto" style={{ fontSize: '1.4rem', padding: '0px 1rem' }}>
                        <Nav.Link style={{ color: 'white' }} href="#home">Browse</Nav.Link>
                    </Nav>
                </Col>
                <Col className="d-flex justify-content-between align-items-center">
                    <InputGroup>
                        <FormControl placeholder="Search">
                        </FormControl>
                    </InputGroup>
                    <Button style={{ background: PRIMARY_COLOR, border: 'none', outline: 'red', color: 'white' }} id="basic-addon1"><SearchIcon /></Button>
                </Col>
                <Col className="d-flex justify-content-end align-items-center">
                    <Button className="me-2" style={{ background: PRIMARY_COLOR, color: 'white' }} variant="outline-none">Login</Button>
                    <Button className="me-2" style={{ background: SECONDARY_COLOR, color: 'white' }} variant="outline-none">Sign up</Button>
                    <Button className="me-2" style={{ color: 'white' }} variant="outline-none"><UserIcon /></Button>
                </Col>
            </div>
        </Navbar>
    )
}
