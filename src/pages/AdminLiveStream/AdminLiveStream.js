// import React, { useState } from 'react'
import {useEffect, useState} from 'react'
import { Table } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import DeleteDialog from '../../components/AdminDialog/DeleteDialog';
import LiveStreamEditDialog from '../../components/AdminDialog/LiveStreamEditDialog';
import {myAxios} from "../../utils/AxiosSetup";
export default function AdminLiveStream() {

    const [editDialog, setEditDialog] = useState(false);
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [currentID, setCurrentID] = useState(null);
    const [activeRooms, setActiveRooms] = useState([]);

    function getActiveRooms() {
        myAxios.get('/rooms/all-room').then(async response => {
            if (response) {
                if (response.statusText === 'OK') {
                    const rooms = await response.data;
                    setActiveRooms(rooms);
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
        getActiveRooms();
    }, [])

    return (
        <>
            {/*<LiveStreamEditDialog currentID={currentID} show={editDialog} onHide={() => setEditDialog(false)} />*/}
            <DeleteDialog type={"Livestream"} currentID={currentID} show={deleteDialog} onHide={() => setDeleteDialog(false)} />
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Listeners</th>
                        <th>Host</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {activeRooms && activeRooms.map((el) => {
                        return <tr key={el._id}>
                            <td>{el.roomName}</td>
                            <td>{el.roomCategory}</td>
                            <td>{el.members.length}</td>
                            <td>{el.roomHost}</td>
                            <td colSpan="1">
                                {/*<Button className="me-2 buttonFilledSecondary" variant="outline-none" onClick={() => { handleEdit(el.id) }}>Edit</Button>*/}
                                <Button variant="danger" onClick={() => { handleDelete(el._id) }}>Delete</Button>
                            </td>
                        </tr>
                    })}
                </tbody>
                <Button className="me-2 buttonFilledSecondary" variant="outline-none" onClick={() => {}}>Create new</Button>

            </Table>
        </>
    )
}
