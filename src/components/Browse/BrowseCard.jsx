import React from 'react'
import {Card} from 'react-bootstrap'
import {Heart, ArrowRightCircle} from 'react-feather'
import {PRIMARY_TEXT, SUB_PRIMARY_COLOR, SECONDARY_COLOR} from '../../utils/Const'
import {Link} from 'react-router-dom'

export default function BrowseCard({categoryName, description}) {
    const categoryURL = `/category/${categoryName}`
    return (
        <Card className="mb-1" style={{width: '100%', border: '1px solid black', backgroundColor: SUB_PRIMARY_COLOR}}>
            <Card.Header className="d-flex justify-content-end" style={{border: 'none', backgroundColor: 'inherit'}}>
                <div className="d-flex justify-content-end pt-2">
                    <button className="hoverSecondaryColor"
                            style={{backgroundColor: 'inherit', border: 'none', color: PRIMARY_TEXT}}>
                        <Link to={categoryURL}> <ArrowRightCircle size={32} color={SECONDARY_COLOR}/></Link>
                    </button>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title><a href="*">{categoryName}</a></Card.Title>
                <Card.Text className="long-and-truncated">
                    <b>Description: </b>{description}
                </Card.Text>
                <div className="d-flex justify-content-end me-1">
                    <span>100 followings</span>
                    <button className="hoverSecondaryColor"
                            style={{backgroundColor: 'inherit', border: 'none', color: PRIMARY_TEXT}}>
                        <Heart color='#eb6664'/>
                    </button>
                </div>

            </Card.Body>
        </Card>
    )
}
