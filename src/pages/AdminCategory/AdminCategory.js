import React, { useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import CategoryEditDialog from '../../components/AdminDialog/CategoryEditDialog'
import DeleteDialog from '../../components/AdminDialog/DeleteDialog';
export default function AdminCategory() {

    const [editDialog, setEditDialog] = useState(false);
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [currentID, setCurrentID] = useState(null);
    const data = [
        {
            id: '1',
            categoryName: 'Category Name',
            followers: 'Followers'
        }, {
            id: '1',
            categoryName: 'Category Name',
            followers: 'Followers'
        }, {
            id: '1',
            categoryName: 'Category Name',
            followers: 'Followers'
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
            <CategoryEditDialog currentID={currentID} show={editDialog} onHide={() => setEditDialog(false)} />
            <DeleteDialog type={"Category"} currentID={currentID} show={deleteDialog} onHide={() => setDeleteDialog(false)} />
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Category Name</th>
                        <th>Followers</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((el) => {
                        return <tr key={el.id}>
                            <td>{el.categoryName}</td>
                            <td>{el.followers}</td>
                            <td >
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
