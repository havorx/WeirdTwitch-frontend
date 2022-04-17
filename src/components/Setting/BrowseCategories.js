import React, {useContext, useEffect, useState} from 'react'
import {Modal, Form, Button, InputGroup, FormControl} from 'react-bootstrap'
import {myAxios} from "../../utils/AxiosSetup";
import {UserContext} from "../../context/userContext";

export default function BrowseCategories(props) {
    const {pickedCategory} = props;
    const [userContext] = useContext(UserContext);
    const [selected, setSelected] = useState(new Set());
    const [categoryList, setCategoryList] = useState([]);
    console.log(selected);

    function handleSubmit(event) {
        event.preventDefault();
        const data = Array.from(selected);
        console.log(data);
        if (data.length !== pickedCategory.length) {
            myAxios.patch('/user/update-user',
                {data, username: userContext.username}).then(async response => {
                if (response) {
                    if (response.statusText === 'OK') {
                        const data = await response.data;
                        const categoryID = data.category.map(e => e._id)
                        setSelected(new Set(categoryID));
                        props.onHide();
                    }
                }
            });
        }
    }

    function getUserDetail() {
        const username = userContext.username;
        myAxios.get(`/user/user-detail/${username}`).then(async response => {
            if (response) {
                if (response.statusText === 'OK') {
                    const data = await response.data;
                    const categoryID = data.category.map(e => e._id)
                    setSelected(new Set(categoryID));

                }
            }
        });
    }

    const a = ['dawd', 'awdawd', 'awdawdxzcz'];

    function getCategoryList() {
        myAxios.get('/category/get-category').then(response => {
            if (response) {
                if (response.statusText === 'OK') {
                    const data = response.data;
                    setCategoryList(data);
                }
            }
        });
    }

    const handleOnChange = (e) => {
        const value = e.target.value
        const checked = e.target.checked
        if (!checked && selected.has(value)) {
            console.log("has")
            removeItem(value)
        } else if (checked && !selected.has(value)) {
            console.log("hasn't")
            addItem(value)
        }
    }

    const addItem = value => {
        console.log("value")
        setSelected(prev => new Set(prev).add(value));
    }

    const removeItem = value => {
        setSelected(prev => {
            const next = new Set(prev);
            next.delete(value);
            return next;
        });
    }
    useEffect(() => {
        getUserDetail();
        getCategoryList();
    }, []);
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header style={{backgroundColor: '#18181b', justifyContent: 'center', border: 'none'}} closeButton
                          closeVariant="white">
                <Modal.Title id="contained-modal-title-vcenter ">
                    <span>Choose Categories</span>
                </Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body style={{backgroundColor: '#18181b', maxHeight: "300px", overflowY: 'auto', border: 'none'}}>
                    {
                        categoryList.map(e => {
                            return <InputGroup className="mb-3">
                                <InputGroup.Checkbox
                                    aria-label="Checkbox for following text input"
                                    value={`${e._id}`}
                                    onChange={handleOnChange}
                                    checked={selected.has(e._id)}
                                />
                                <FormControl
                                    aria-label="Text input with checkbox"
                                    disabled
                                    value={`${e.categoryName}`}
                                />
                            </InputGroup>;
                        })
                    }

                </Modal.Body>
                <Modal.Footer style={{backgroundColor: '#18181b', border: 'none'}}>
                    <Button className="mt-3 w-100 buttonFilledSecondary" variant="outline-none" type="submit">
                        <b> Submit</b>
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}
