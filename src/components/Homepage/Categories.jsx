import {Button} from 'react-bootstrap';
import {myAxios} from "../../utils/AxiosSetup";
import {useEffect, useState} from "react";

export default function Categories() {
    const [categories, setCategories] = useState([]);

    function getCategory() {
        myAxios.get('/category/view-category').then(async response => {
            if (response.statusText === 'OK') {
                const data = await response.data;
                const categoryList = data.map(element => element.categoryName);
                setCategories(categoryList);
            }
        });
    }

    useEffect(() => {
        getCategory();
    },[]);

    return (
        <div className="d-flex flex-wrap mt-4">
            {categories.map((e) => (
                <Button className="me-3 mb-3 buttonOutlined" style={{borderRadius: '20px'}}>
                    <b>{e}</b>
                </Button>
            ))}
        </div>

    )
}
