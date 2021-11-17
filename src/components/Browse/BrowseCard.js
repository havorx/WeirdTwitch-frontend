import React from 'react'
import { Card } from 'react-bootstrap'
import { Heart, ArrowRightCircle } from 'react-feather'
import { PRIMARY_TEXT, SUB_PRIMARY_COLOR, SECONDARY_COLOR } from '../../utils/Const'
import { Link } from 'react-router-dom'
export default function BrowseCard() {
    return (
        <Card className="me-2 mb-4" style={{ width: '316px', border: '1px solid black', backgroundColor: SUB_PRIMARY_COLOR }}>
            <Card.Header className="d-flex justify-content-end" style={{ border: 'none', backgroundColor: 'inherit' }} >
                <div className="d-flex justify-content-end pt-2">
                    <button className="hoverSecondaryColor" style={{ backgroundColor: 'inherit', border: 'none', color: PRIMARY_TEXT }}>
                        <Link to="/category/categoryID"> <ArrowRightCircle size={32} color={SECONDARY_COLOR} /></Link>
                    </button>
                </div>
            </Card.Header>
            <Card.Body >
                <Card.Title><a href="*">Cate 1</a></Card.Title>
                <Card.Text className="long-and-truncated">
                    <b>Description: </b>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus repellat eos officia accusamus rem vero qui commodi. Nostrum doloremque saepe quam magnam fuga! Hic ab consequuntur voluptates magnam! Voluptatem, minima.
                </Card.Text>
                <div className="d-flex justify-content-end me-1">
                    <span >100 followings</span>
                    <button className="hoverSecondaryColor" style={{ backgroundColor: 'inherit', border: 'none', color: PRIMARY_TEXT }}>
                        <Heart color='#eb6664' />
                    </button>
                </div>

            </Card.Body>
        </Card>
    )
}
