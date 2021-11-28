import React, { useState } from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import { SUB_PRIMARY_COLOR, SECONDARY_COLOR } from '../../utils/Const'
import BrowseCategories from './BrowseCategories';
const BLUR_TEXT_COLOR = "#8b949e";


export default function Category() {

    let a = [1, 2]
    const [editCategory, setEditCategory] = useState(false);



    return (
        <>
            <BrowseCategories pickedCategory={a} show={editCategory} onHide={() => setEditCategory(false)} />
            <Container >
                <div className="mb-4 d-flex flex-row justify-content-between">
                    <h5 >Categories</h5>
                    <Button
                        variant="outline-none"
                        style={{ color: `${SECONDARY_COLOR}` }}
                        onClick={() => { setEditCategory(true) }}
                    >
                        Edit categories
                    </Button>
                </div>
                <div className="basic-grid-two ">
                    {a.map((e) => {
                        return <Card style={{ width: '100%', border: '1px solid black', backgroundColor: SUB_PRIMARY_COLOR }}>
                            <Card.Header className="pt-4" style={{ border: 'none' }}>
                                <h5 >Category name</h5>
                            </Card.Header>
                            <Card.Footer style={{ border: 'none' }}>
                                <p >Followers: <span style={{ color: `${SECONDARY_COLOR}` }}>1</span></p>
                            </Card.Footer>
                        </Card>
                    })}
                </div>
            </Container>
        </>
    )
}
