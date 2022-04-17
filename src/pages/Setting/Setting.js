import React, {useContext, useEffect, useState} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Profile from '../../components/Setting/Profile'
import Category from '../../components/Setting/Category'
import {myAxios} from "../../utils/AxiosSetup";
import {UserContext} from "../../context/userContext";

export default function Setting() {
    const [userContext] = useContext(UserContext);
    const [categoryList, setCategoryList] = useState([]);

    function getUserDetail() {
        const username = userContext.username;
        myAxios.get(`/user/user-detail/${username}`).then(async response => {
            if (response) {
                if (response.statusText === 'OK') {
                    const data = await response.data;
                    setCategoryList(data.category);
                }
            }
        });
    }

    useEffect(() => {
        getUserDetail();
    }, []);
    return (
        <article>
            <Container className="px-5">
                <Row>
                    <Col sm={3}>
                        <Profile username={userContext.username}/>
                    </Col>
                    <Col sm={9}>
                        <Category category={categoryList}/>
                    </Col>
                </Row>
            </Container>
        </article>
    )
}
