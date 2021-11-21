import React, { useState } from 'react'
import MainNav from '../Navbar/Navbar'
import { Tabs, Tab, InputGroup, FormControl } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import UserAccount from '../../pages/UserAccount/UserAccount'
import AdminCategory from '../../pages/AdminCategory/AdminCategory'
import AdminLiveStream from '../../pages/AdminLiveStream/AdminLiveStream'
export default function AdminLayout() {

    const [key, setKey] = useState('user');

    return (
        <div>
            <MainNav />
            <article>
                <Container>
                    <div className="d-flex justify-content-end">
                        <InputGroup style={{ width: '40%', maxWidth: '400px' }}>
                            <FormControl className="search-input" placeholder="Search">
                            </FormControl>
                        </InputGroup>
                    </div>
                    <Tabs
                        defaultActiveKey="profile"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                    >
                        <Tab eventKey="user" title="User" tabClassName="tabs-color">
                            <UserAccount />
                        </Tab>
                        <Tab eventKey="category" title="Category" tabClassName="tabs-color">
                            <AdminCategory />
                        </Tab>
                        <Tab eventKey="contact" title="Contact" tabClassName="tabs-color">
                            <AdminLiveStream />
                        </Tab>
                    </Tabs>
                </Container>
            </article>
        </div>
    )
}
