import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Profile from '../../components/Setting/Profile'
import Category from '../../components/Setting/Category'

export default function Setting() {
    return (
        <article>
            <Container className="px-5">
                <Row>
                    <Col sm={3}>
                        <Profile />
                    </Col>
                    <Col sm={9}>
                        <Category />
                    </Col>
                </Row>
            </Container>
        </article>
    )
}
