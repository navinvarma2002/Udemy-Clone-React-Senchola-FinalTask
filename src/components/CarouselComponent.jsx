import React from 'react';
import { Carousel } from 'react-bootstrap';
import one from "../asset/slide-1.png"
import two from "../asset/slide-2.png"
import three from "../asset/slide-3.jpg"

const CarouselComponent = ({images}) => {
    return (
        <Carousel>
            <Carousel.Item className="slidess">
                <img
                    className="d-block w-100"
                    src={one}
                    alt="First slide"
                />
                <Carousel.Caption >
                    <h3 className="titlecolor">Let's Learn</h3>
                    <p className="titlecolor">Buy Advance Course's.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="slidess">
                <img
                    className="d-block w-100"
                    src={two}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    {/* <h3 className="titlecolor">Second Slide Title</h3>
                    <p className="titlecolor">Description for the second slide.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="slidess">
                <img
                    className="d-block w-100"
                    src={three}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3 className="titlecolor">You Can Find</h3>
                    <p className="titlecolor">Below The Course's</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselComponent;
