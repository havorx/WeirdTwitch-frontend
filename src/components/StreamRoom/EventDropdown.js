import React, { useState } from 'react'
import { DropdownButton, NavDropdown, Dropdown } from 'react-bootstrap'
import EventDialog from './EventDialog';
export default function EventDropdown({ setTopic }) {

    const [openTopic, setOpenTopic] = useState(false);


    return (
        <>
            <EventDialog setTopic={setTopic} show={openTopic} onHide={() => setOpenTopic(false)} />
            <NavDropdown
                id="nav-dropdown-dark-example"
                title="Events"
                menuVariant="dark"
            >
                <Dropdown.Item eventKey="1" onClick={() => { setOpenTopic(true) }}>Create Topic</Dropdown.Item>
            </NavDropdown>
        </>
    )
}
