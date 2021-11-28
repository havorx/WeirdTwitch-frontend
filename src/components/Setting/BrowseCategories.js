import React, { useState } from 'react'
import { Modal, Form, Button, InputGroup, FormControl } from 'react-bootstrap'
export default function BrowseCategories(props) {

    const [selected, setSelected] = useState(new Set());

    const handleSubmit = () => {

    }

    const a = [1, 2, 3, 4, 5, 6, 7]

    const { pickedCategory } = props;

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

    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
        >
            <Modal.Header style={{ backgroundColor: '#18181b', justifyContent: 'center', border: 'none' }} closeButton closeVariant="white">
                <Modal.Title id="contained-modal-title-vcenter ">
                    <span>Choose Categories</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: '#18181b', maxHeight: "300px", overflowY: 'auto', border: 'none' }}>
                <Form onSubmit={handleSubmit}>
                    {
                        a.map(e => {
                            return <InputGroup className="mb-3">
                                <InputGroup.Checkbox
                                    aria-label="Checkbox for following text input"
                                    value={`Category${e}`}
                                    onChange={handleOnChange}
                                />
                                <FormControl
                                    aria-label="Text input with checkbox"
                                    disabled
                                    value={`Category${e}`}
                                />
                            </InputGroup>
                        })
                    }
                </Form>
            </Modal.Body>
            <Modal.Footer style={{ backgroundColor: '#18181b', border: 'none' }}>
                <Button className="mt-3 w-100 buttonFilledSecondary" variant="outline-none" type="submit">
                    <b> Submit</b>
                </Button>
            </Modal.Footer>
        </Modal >
    )
}
