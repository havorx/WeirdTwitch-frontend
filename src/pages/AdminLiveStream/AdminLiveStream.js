// import React, { useState } from 'react'
import { useState } from 'react'
import { Table } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import DeleteDialog from '../../components/AdminDialog/DeleteDialog';
import LiveStreamEditDialog from '../../components/AdminDialog/LiveStreamEditDialog';
export default function AdminLiveStream() {

    const [editDialog, setEditDialog] = useState(false);
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [currentID, setCurrentID] = useState(null);
    const data = [
        {
            id: '1',
            name: 'name',
            status: 'status',
            listeners: 'listeners'
        },
        {
            id: '2',
            name: 'name',
            status: 'status',
            listeners: 'listeners'
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
            <LiveStreamEditDialog currentID={currentID} show={editDialog} onHide={() => setEditDialog(false)} />
            <DeleteDialog type={"Livestream"} currentID={currentID} show={deleteDialog} onHide={() => setDeleteDialog(false)} />
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Listeners</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((el) => {
                        return <tr key={el.id}>
                            <td>{el.name}</td>
                            <td>{el.status}</td>
                            <td>{el.listeners}</td>
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
