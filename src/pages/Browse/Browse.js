import React from 'react'
import { Container } from 'react-bootstrap';
import BrowseCard from '../../components/Browse/BrowseCard';

const examples = [
    "Category 1", "Category 112312312", "Category 1 Category", "Cate", "Category 1", "Category 1", "Category 1", "Category 1",
    "Category 1", "Category 112312312", "Category 1 Category", "Cate", "Category 1", "Category 1", "Category 1", "Category 1",
    "Category 1", "Category 112312312", "Category 1 Category", "Cate", "Category 1", "Category 1", "Category 1", "Category 1",
]

export default function Browse() {
    return (
        <article>
            <Container>
                <div className="mb-5">
                    <h5>Categories</h5>
                    <div className="d-flex flex-wrap mt-4">
                        {examples.map(e => {
                            return <BrowseCard />
                        })}
                    </div>
                </div>
                <center><button className="buttonOutlined p-2" style={{ borderRadius: '10px ' }}>Load more</button></center>
                <hr />
            </Container>
        </article>
    )
}
