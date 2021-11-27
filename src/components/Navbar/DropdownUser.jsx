import React, { useContext, useState } from 'react'
import { Dropdown, DropdownButton, Image } from 'react-bootstrap';
import { User as UserIcon, Settings as SettingIcon, LogOut as LogOutIcon, Airplay as AirplayIcon } from 'react-feather'
import image from '../../assets/03-glitch.jpg';
import { axiosGet } from "../../utils/AxiosSetup";
import { UserContext } from "../../context/userContext";
import { Link } from 'react-router-dom';
export default function DropdownUser() {
    const [, setUserContext] = useState(UserContext);

    const logoutHandler = () => {
        axiosGet('/auth/logout').then(async response => {
            if (response.ok) {
                setUserContext(oldValues => {
                    return { ...oldValues, details: undefined, token: null }
                })
            }
        });
    }


    return (
        <DropdownButton menuVariant="dark" variant="secondary" align="end" title={<UserIcon />}
            id="dropdown-menu-align-end">
            <div className="px-1 py-2">
                <div className="d-flex align-items-center" style={{ padding: '0 16px' }}>
                    <Image style={{ height: '40px', width: '40px', borderRadius: '100%', marginRight: '10px' }}
                        src={image} />
                    <b>UserName</b>
                </div>
                <br />
                <Dropdown.Item eventKey="1">
                    <AirplayIcon className="me-2" />
                    <Link to="/stream/create">Stream</Link>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="1">
                    <SettingIcon className="me-2" />
                    Setting
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="2">
                    <LogOutIcon onClick={logoutHandler} className="me-2" style={{ transform: 'scaleX(-1)' }} />
                    Log out
                </Dropdown.Item>
            </div>
        </DropdownButton>
    )
}
