import React from 'react'
import { Container, Button } from 'react-bootstrap';
import TrendingContent from '../../components/Hompage/TrendingContent';
import { Heart } from 'react-feather';
export default function Category() {
    return (
        <article>
            <Container>
                <section className="mb-4">
                    <div className="d-flex mb-3">
                        <h3 className="mb-0 me-3">CATEGORY NAME</h3>
                        <Button className="me-2 buttonFilledSecondary" variant="outline-none">
                            <Heart className="me-2" />
                            Follow
                        </Button>
                    </div>
                    <p className="long-and-truncated cut-on-third w-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti saepe accusantium perspiciatis, dolore voluptas odit porro illum aperiam quo suscipit, voluptates minus deleniti ipsum eos, ratione eum similique quaerat culpa!</p>
                </section>
                <section className="mb-4">
                    <h5>Live</h5>
                    <div className="basic-grid">
                        <TrendingContent propWidth={"100%"} />
                        <TrendingContent propWidth={"100%"} />
                        <TrendingContent propWidth={"100%"} />
                        <TrendingContent propWidth={"100%"} />
                    </div>
                </section>
                <center><button className="buttonOutlined p-2" style={{ borderRadius: '10px ' }}>Load more</button></center>
                <hr />
            </Container>
        </article>
    )
}
