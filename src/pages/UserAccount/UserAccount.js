// import React, { useState } from 'react'
import {useEffect, useState} from 'react'
import {Table} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import DeleteDialog from '../../components/AdminDialog/DeleteDialog';
import UserEditDialog from '../../components/AdminDialog/UserEditDialog'
import {myAxios} from "../../utils/AxiosSetup";

export default function UserAccount() {

    const [editDialog, setEditDialog] = useState(false);
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [currentID, setCurrentID] = useState(null);
    const [allUser, setAllUser] = useState([]);

    function getAllUser() {
        myAxios.get('/user/all-user').then(response => {
            if (response) {
                if (response.statusText === 'OK') {
                    const data = response.data;
                    setAllUser(data);
                }
            }
        });
    }

    const handleEdit = (id) => {
        setCurrentID(id);
        setEditDialog(true);
    }

    const handleDelete = (id) => {
        setCurrentID(id);
        setDeleteDialog(true);
    }

    useEffect(() => {
        getAllUser();
    }, []);

    return (
        <>
            <UserEditDialog currentID={currentID} show={editDialog} onHide={() => setEditDialog(false)}/>
            <DeleteDialog type={"User"} currentID={currentID} show={deleteDialog}
                          onHide={() => setDeleteDialog(false)}/>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>Username</th>
                    <th>Status</th>
                    <th>Full name</th>
                    <th>Admin role</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {allUser && allUser.map((el) => {
                    return <tr key={el._id}>
                        <td>{el.username}</td>
                        <td>{el.status ? 'Activated' : 'Deactivated'}</td>
                        <td>{el.fullName}</td>
                        <td>{el.role === 'admin' ? 'Yes' : 'No'}</td>
                        <td colSpan="1">
                            <Button className="me-2 buttonFilledSecondary" variant="outline-none" onClick={() => {
                                handleEdit(el._id)
                            }}>Edit</Button>
                            <Button variant="danger" onClick={() => {
                                handleDelete(el._id)
                            }}>Delete</Button>
                        </td>
                    </tr>
                })}
                </tbody>
            </Table>
        </>
    )
}
