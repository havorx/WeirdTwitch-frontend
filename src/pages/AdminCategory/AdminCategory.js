import React, {useEffect, useState} from 'react'
import { Table, Button } from 'react-bootstrap'
import CategoryEditDialog from '../../components/AdminDialog/CategoryEditDialog'
import DeleteDialog from '../../components/AdminDialog/DeleteDialog';
import {myAxios} from "../../utils/AxiosSetup";
export default function AdminCategory() {

    const [editDialog, setEditDialog] = useState(false);
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [currentID, setCurrentID] = useState(null);
    const [categories, setCategories] = useState([]);

    function getCategory() {
        myAxios.get('/category/get-category').then(response => {
            const data = response.data;
            setCategories(data);
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
        getCategory();
    }, []);


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
                    {categories && categories.map((el) => {
                        return <tr key={el._id}>
                            <td>{el.categoryName}</td>
                            <td>{el.followers}</td>
                            <td >
                                <Button className="me-2 buttonFilledSecondary" variant="outline-none" onClick={() => { handleEdit(el._id) }}>Edit</Button>
                                <Button variant="danger" onClick={() => { handleDelete(el._id) }}>Delete</Button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </>
    )
}
