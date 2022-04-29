import {useEffect, useState} from 'react';
import {Container} from 'react-bootstrap';
import BrowseCard from '../../components/Browse/BrowseCard';
import {InputGroup, FormControl} from 'react-bootstrap';
import {Search as SearchIcon} from 'react-feather';
import {SUB_PRIMARY_TEXT, SUB_PRIMARY_COLOR} from '../../utils/Const';
import {myAxios} from '../../utils/AxiosSetup.js';

const examples = Array(30).fill(0);
export default function Browse() {
    const [category, setCategory] = useState([]);

    function getCategory() {
        myAxios.get('/category/get-category').then(async response => {
            if (response) {
                if (response.statusText === 'OK') {
                    const data = await response.data;
                    setCategory(data);
                }
            }
        });
    }

    useEffect(() => {
        getCategory();
    }, []);

    return (
        <article>
            <Container>
                <div className="mb-5">
                    <div className="d-flex justify-content-between">
                        <h5>Categories</h5>
                        <InputGroup
                            className="d-flex align-items-center position-relative"
                            style={{width: '40%', maxWidth: '310px'}}>
                            <FormControl placeholder="Search" style={{
                                color: SUB_PRIMARY_TEXT,
                                backgroundColor: SUB_PRIMARY_COLOR,
                            }}>
                            </FormControl>
                            <SearchIcon style={{right: '10px'}} color={SUB_PRIMARY_TEXT}
                                        className="position-absolute"/>
                        </InputGroup>
                    </div>
                    <div className="basic-grid-four mt-4">
                        {category.map((element, index) => {
                            return <BrowseCard
                                key={index}
                                categoryName={element.categoryName}
                                description={element.description}
                                followers={element.followers}/>;
                        })}
                    </div>
                </div>
                <center>
                    <button className="buttonOutlined p-2"
                            style={{borderRadius: '10px '}}>Load more
                    </button>
                </center>
                <hr/>
            </Container>
        </article>
    );
}
