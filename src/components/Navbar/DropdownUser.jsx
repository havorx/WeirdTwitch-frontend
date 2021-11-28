import { useContext } from 'react';
import { Dropdown, DropdownButton, Image } from 'react-bootstrap';
import {
  User as UserIcon,
  Settings as SettingIcon,
  LogOut as LogOutIcon,
  Airplay as AirplayIcon
} from 'react-feather';
import image from '../../assets/03-glitch.jpg';
import { myAxios } from '../../utils/AxiosSetup';
import { UserContext } from '../../context/userContext.tsx';
import { Link } from 'react-router-dom';
export default function DropdownUser() {
  const [userContext, setUserContext] = useContext(UserContext);

  const logoutHandler = () => {
    myAxios.get('/auth/logout').then(async response => {
      if (response.statusText === 'OK') {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('role');
        setUserContext(oldValues => {
          return { ...oldValues, token: null, username: null, isAdmin: null };
        });
      }
    })
  }

  return (
    <DropdownButton menuVariant="dark" variant="secondary" align="end"
      title={<UserIcon />}
      id="dropdown-menu-align-end">
      <div className="px-1 py-2">
        <div className="d-flex align-items-center"
          style={{ padding: '0 16px' }}>
          <Image style={{
            height: '40px',
            width: '40px',
            borderRadius: '100%',
            marginRight: '10px',
          }}
            src={image} />
          <b>{userContext.username}</b>
        </div>
        <br />
        <br />
        <Dropdown.Item eventKey="1">
          <AirplayIcon className="me-2" />
          <Link to="/stream/create">Stream</Link>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="1">
          <SettingIcon className="me-2" />
          <Link to="/setting">Setting</Link>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={logoutHandler} eventKey="2">
          <LogOutIcon className="me-2"
            style={{ transform: 'scaleX(-1)' }} />
          Log out
        </Dropdown.Item>
      </div>
    </DropdownButton>
  )

}