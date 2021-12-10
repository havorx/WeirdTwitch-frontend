import React, {useEffect, useState} from 'react'
import {Container, Button} from 'react-bootstrap';
import TrendingContent from '../../components/Homepage/TrendingContent';
import {Heart} from 'react-feather';
import {useParams} from "react-router";
import {myAxios} from "../../utils/AxiosSetup";

export default function Category() {
    const {categoryName} = useParams();
    const [description, setDescription] = useState('');
    const [activeRooms, setActiveRooms] = useState([]);

    function getCategoryByName() {
        myAxios.get('/category/get-category', {params: {categoryName}}).then(async response => {
            if (response) {
                if (response.statusText === 'OK') {
                    const category = await response.data;
                    setDescription(category.description);
                }
            }
        });
    }

    function getRoomsByCategory() {
        myAxios.get('/rooms/all-room', {params: {categoryName}}).then(async response => {
            if (response) {
                if (response.statusText === 'OK') {
                    const rooms = await response.data;
                    setActiveRooms(rooms);
                }
            }
        });
    }

    useEffect(() => {
        getCategoryByName();
        getRoomsByCategory();
        console.log(activeRooms);
    }, []);
    return (
        <article>
            <Container>
                <section className="mb-4">
                    <div className="d-flex mb-3">
                        <h3 className="mb-0 me-3">{categoryName}</h3>
                        <Button className="me-2 buttonFilledSecondary" variant="outline-none">
                            <Heart className="me-2"/>
                            Follow
                        </Button>
                    </div>
                    <p className="long-and-truncated cut-on-third w-50">{description}</p>
                </section>
                <section className="mb-4">
                    <h5>Live</h5>
                    <div className="basic-grid">
                        <TrendingContent propWidth={"100%"} />

                    </div>

                    {activeRooms.length !== 0 && <div className="basic-grid">
                        {/*  <TrendingContent propWidth={"100%"} />
                        <TrendingContent propWidth={"100%"} />
                        <TrendingContent propWidth={"100%"} />*/}
                        {activeRooms.map(element => (
                            <TrendingContent id={element.roomName}
                                             key={element.roomHost}
                                             description={element.description}
                                             roomName={element.roomName}
                                             roomHost={element.roomHost}
                                             members={element.members}
                                             propWidth={"100%"}
                            />
                        ))}
                    </div>}
                </section>
                <center>
                    <button className="buttonOutlined p-2" style={{borderRadius: '10px '}}>Load more</button>
                </center>
                <hr/>
            </Container>
        </article>
    )
}
