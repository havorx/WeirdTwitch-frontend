import React from 'react'
import { Button, Row, Col } from 'react-bootstrap';
import { SECONDARY_COLOR, PRIMARY_COLOR } from '../../utils/Const';
const examples = [
    "Category 1", "Category 112312312", "Category 1 Category", "Cate", "Category 1", "Category 1", "Category 1", "Category 1",
    "Category 1", "Category 112312312", "Category 1 Category", "Cate", "Category 1", "Category 1", "Category 1", "Category 1",
    "Category 1", "Category 112312312", "Category 1 Category", "Cate", "Category 1", "Category 1", "Category 1", "Category 1",
]

export default function Categories() {
    return (
        <div className="d-flex flex-wrap mt-4">
            {examples.map((e) => (
                <Button className="me-3 mb-3 buttonOutlined" style={{ borderRadius: '20px' }} >
                    <b>{e}</b>
                </Button>
            ))}
        </div>
    )
}
