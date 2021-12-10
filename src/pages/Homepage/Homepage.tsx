import HomepageCarousel from '../../components/Homepage/Carousel'
import Categories from '../../components/Homepage/Categories'
import FeaturedUser from '../../components/Homepage/FeaturedUser'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Homepage.css'
export default function Homepage() {
    return (
        <>
            <article >
                <Container>
                    <div className="mb-5">
                        <h5>Trending</h5>
                        <HomepageCarousel />
                    </div>
                    <hr />
                    <div className="mb-5">
                        <h5>Categories</h5>
                        <Categories />
                    </div>
                    <hr />
                    <div className="mb-5">
                        <h5>Featured Users</h5>
                        <FeaturedUser />
                    </div>
                </Container>
            </article>
        </>
    )
}
