import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { Frown as FronwIcon } from 'react-feather'
import { SECONDARY_COLOR, SECONDARY_TEXT } from '../../utils/Const'
import { Link } from 'react-router-dom'
export default function NotFound() {
    return (
        <article >
            <Container>
                <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                    <FronwIcon size={108} color={SECONDARY_COLOR} />
                    <h1 className="mb-3" style={{ fontSize: '100px', letterSpacing: '10px', color: SECONDARY_COLOR }}>404</h1>
                    <h3>THAT PAGE DOESN'T EXIST OR IS UNAVAILABLE</h3>
                    <Button className="mt-4 buttonFilledSecondary" variant="outline-none">
                        <Link to="/"><b style={{ color: SECONDARY_TEXT }}> Go Back to Homepage</b></Link>
                    </Button>
                </div>
            </Container>
        </article>
    )
}
