import MainNav from '../../components/Navbar/Navbar'
import HompageCarousel from '../../components/Hompage/Carousel'
import Categories from '../../components/Hompage/Categories'
import FeatureUser from '../../components/Hompage/FeatureUser'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Homepage.css'
export default function Homepage() {
    return (
        <>
            <MainNav />
            <main >
                <Container>
                    <div className="mb-5">
                        <h5>Trending</h5>
                        <HompageCarousel />
                    </div>
                    <hr />
                    <div className="mb-5">
                        <h5>Categories</h5>
                        <Categories />
                    </div>
                    <hr />
                    <div className="mb-5">
                        <h5>Feature Users</h5>
                        <FeatureUser />
                    </div>
                </Container>
            </main>
        </>
    )
}
