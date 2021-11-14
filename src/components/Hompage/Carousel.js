import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { } from 'react-feather'
import TrendingContent from "./TrendingContent";
export default function HompageCarousel() {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <>
            <Carousel responsive={responsive} className="mt-4">
                <TrendingContent />
                <TrendingContent />
                <TrendingContent />
            </Carousel>;
        </>
    )
}
