import React from 'react'
import { Container } from 'react-bootstrap';
import BrowseCard from '../../components/Browse/BrowseCard';
import { InputGroup, FormControl } from 'react-bootstrap';
import { Search as SearchIcon } from 'react-feather';
import { SUB_PRIMARY_TEXT, SUB_PRIMARY_COLOR } from '../../utils/Const';
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
                    <div className="d-flex justify-content-between">
                        <h5>Categories</h5>
                        <InputGroup className="d-flex align-items-center position-relative" style={{ width: '310px' }}>
                            <FormControl placeholder="Search" style={{ color: SUB_PRIMARY_TEXT, backgroundColor: SUB_PRIMARY_COLOR }}>
                            </FormControl>
                            <SearchIcon style={{ right: '10px' }} color={SUB_PRIMARY_TEXT} className="position-absolute" />
                        </InputGroup>
                    </div>
                    <div className="basic-grid-four mt-4">
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
