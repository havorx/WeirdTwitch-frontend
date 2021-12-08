import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {} from 'react-feather';
import TrendingContent from './TrendingContent';
import {useEffect, useState} from 'react';
import {myAxios} from "../../utils/AxiosSetup";

export default function HomepageCarousel() {
    const room = {
        username: String,
        roomName: String
    }
    const [activeRooms, setActiveRooms] = useState([room]);

    function getActiveRooms() {
        myAxios.get('/rooms/all-room').then(response => {
            if (response) {
                if (response.statusText === 'OK') {
                    setActiveRooms(response.data);
                }
            }
        });
    }

    /*  const activeRoom = [
        {
          username: 'MinkLee',
          roomName: 'Folk story',
        }];*/
    useEffect(() => {
        getActiveRooms();
    }, [])
    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3,
            slidesToSlide: 3, // optional, default to 1.
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2,
            slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    };

    return (
        <>
            <Carousel
                responsive={responsive}
                draggable={false}
                className="mt-4">
                {activeRooms.map(element => (
                    <TrendingContent id={element.roomName} username={element.username}
                                     roomName={element.roomName} propWidth={'500px'}
                                     propPadding={'0 8px'}
                                     key={element.username}
                    />
                ))}
            </Carousel>
        </>
    );
}
