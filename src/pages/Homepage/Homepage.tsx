import React from 'react'
import MainNav from '../../components/Navbar/Navbar'
import HompageCarousel from '../../components/Hompage/Carousel'
// import {  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Homepage.css'
export default function Homepage() {
    return (
        <div>
            <MainNav />
            <main >
                <h5>Trending</h5>
                <HompageCarousel />
            </main>
        </div>
    )
}
