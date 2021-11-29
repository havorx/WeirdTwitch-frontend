// import React, { useState } from 'react'
import { useState } from 'react'
import { Table } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import DeleteDialog from '../../components/AdminDialog/DeleteDialog';
import UserEditDialog from '../../components/AdminDialog/UserEditDialog'
export default function UserAccount() {

    const [editDialog, setEditDialog] = useState(false);
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [currentID, setCurrentID] = useState(null);
    const data = [
        {
            id: '1',
            username: 'account 1',
            email: 'awdjaw@oaw.co',
            status: 'Activated',
            fullName: 'Minkle'
        },
    ]

    const handleEdit = (id) => {
        setCurrentID(id);
        setEditDialog(true);
    }

    const handleDelete = (id) => {
        setCurrentID(id);
        setDeleteDialog(true);
    }

    return (
        <>
            <UserEditDialog currentID={currentID} show={editDialog} onHide={() => setEditDialog(false)} />
            <DeleteDialog type={"User"} currentID={currentID} show={deleteDialog} onHide={() => setDeleteDialog(false)} />
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Status</th>
                        <th>Full name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((el) => {
                        return <tr key={el.id}>
                            <td>{el.username}</td>
                            <td>{el.status}</td>
                            <td>{el.fullName}</td>
                            <td colSpan="1">
                                <Button className="me-2 buttonFilledSecondary" variant="outline-none" onClick={() => { handleEdit(el.id) }}>Edit</Button>
                                <Button variant="danger" onClick={() => { handleDelete(el.id) }}>Delete</Button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </>
    )
}
