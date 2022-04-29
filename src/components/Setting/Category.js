import {useState} from 'react'
import {Container, Card, Button} from 'react-bootstrap'
import {SUB_PRIMARY_COLOR, SECONDARY_COLOR} from '../../utils/Const'
import BrowseCategories from './BrowseCategories';

export default function Category({category}) {
    const [editCategory, setEditCategory] = useState(false);
    const categoryNameArr = category.length !== 0 ? category.map(element => element.categoryName) : [];
    const categoryIDArr = category.length !== 0 ? category.map(element => element._id) : [];
    return (
        <>
            <BrowseCategories pickedCategory={categoryIDArr} category={categoryNameArr} show={editCategory}
                              onHide={() => setEditCategory(false)}/>
            <Container>
                <div className="mb-4 d-flex flex-row justify-content-between">
                    <h5>Categories</h5>
                    <Button
                        variant="outline-none"
                        style={{color: `${SECONDARY_COLOR}`}}
                        onClick={() => {
                            setEditCategory(true)
                        }}
                    >
                        Edit categories
                    </Button>
                </div>
                <div className="basic-grid-two ">
                    {category.map((element) => {
                        return <Card
                            style={{width: '100%', border: '1px solid black', backgroundColor: SUB_PRIMARY_COLOR}}>
                            <Card.Header className="pt-4" style={{border: 'none'}}>
                                <h5>{element.categoryName}</h5>
                            </Card.Header>
                            <Card.Footer style={{border: 'none'}}>
                                <p>Followers: <span style={{color: `${SECONDARY_COLOR}`}}>{element.followers}</span></p>
                            </Card.Footer>
                        </Card>
                    })}
                </div>
            </Container>
        </>
    )
};
