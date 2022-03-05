import React, { useState } from 'react'
import { NavDropdown, Dropdown } from 'react-bootstrap'
import EventDialog from './EventDialog';
export default function EventDropdown({ setTopic, roomName }) {

    const [openTopic, setOpenTopic] = useState(false);


    return (
        <>
            <EventDialog roomName={roomName} setTopic={setTopic} show={openTopic} onHide={() => setOpenTopic(false)} />
            <NavDropdown
                id="nav-dropdown-dark-example"
                title="Events"
                menuVariant="dark"
                className="px-2 py-3"
            >
                <Dropdown.Item eventKey="1" onClick={() => { setOpenTopic(true) }}>Create Topic</Dropdown.Item>
            </NavDropdown>
        </>
    )
}
