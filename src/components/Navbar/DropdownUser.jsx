import { useContext } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import {
  User as UserIcon,
  Settings as SettingIcon,
  LogOut as LogOutIcon,
  Airplay as AirplayIcon,
} from 'react-feather';
import { myAxios } from '../../utils/AxiosSetup';
import { UserContext } from '../../context/userContext.tsx';
import { Link } from 'react-router-dom';
import { SECONDARY_COLOR } from '../../utils/Const';
import Avatar from 'react-avatar';

export default function DropdownUser() {
  const [userContext, setUserContext] = useContext(UserContext);

  const logoutHandler = async () => {
    try {
      const userID = localStorage.getItem('userID');
      const refreshToken = localStorage.getItem('refreshToken');
      await myAxios.post('/auth/logout', { userID, refreshToken });
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('role');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('credits');
      setUserContext(() => {
        return {};
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <DropdownButton
      menuVariant="dark"
      variant="secondary"
      align="end"
      title={<UserIcon />}
      id="dropdown-menu-align-end"
    >
      <div className="px-1 py-2">
        <div
          className="d-flex align-items-center"
          style={{ padding: '0 16px' }}
        >
          <Avatar
            name={userContext.username}
            textSizeRatio={1.8}
            round={true}
            size={'40px'}
            style={{ marginRight: '10px' }}
          />
          <b>{userContext.username}</b>
        </div>
        <br />
        <p className=" px-3">
          <span style={{ color: `${SECONDARY_COLOR}` }}>Credit: </span>
          {userContext.credits}
        </p>

        <Dropdown.Item eventKey="1" style={{ padding: 0 }}>
          <Link to="/stream/create" className="d-block px-3 py-2">
            <AirplayIcon className="me-2" />
            Stream
          </Link>
        </Dropdown.Item>
        <Dropdown.Divider />

        <Dropdown.Item eventKey="1" style={{ padding: 0 }}>
          <Link to="/setting" className="d-block  px-3 py-2" style={{}}>
            <SettingIcon className="me-2" />
            Setting
          </Link>
        </Dropdown.Item>
        <Dropdown.Divider />

        <Dropdown.Item onClick={logoutHandler} eventKey="2">
          <LogOutIcon className="me-2" style={{ transform: 'scaleX(-1)' }} />
          Log out
        </Dropdown.Item>
      </div>
    </DropdownButton>
  );
}
