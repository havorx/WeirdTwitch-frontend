import React from 'react'
import { Dropdown, DropdownButton, Image } from 'react-bootstrap';
import { User as UserIcon, Settings as SettingIcon, LogOut as LogOutIcon } from 'react-feather'
import image from '../../assets/03-glitch.jpg';
export default function DropdownUser() {
    return (
        <DropdownButton menuVariant="dark" variant="secondary" align="end" title={<UserIcon />} id="dropdown-menu-align-end">
            <div className="px-1 py-2">
                <div className="d-flex align-items-center" style={{ padding: '0 16px' }}>
                    <Image style={{ height: '40px', width: '40px', borderRadius: '100%', marginRight: '10px' }} src={image} />
                    <b>UserName</b>
                </div>
                <br />
                <Dropdown.Item eventKey="1">
                    <SettingIcon className="me-2" />
                    Setting
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="2">
                    <LogOutIcon className="me-2" style={{ transform: 'scaleX(-1)' }} />
                    Log out
                </Dropdown.Item>
            </div>
        </DropdownButton>
    )
}
