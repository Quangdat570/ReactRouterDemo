import React, { useState } from "react";
import { Carousel, Container } from "react-bootstrap";

const Banner = () => {
    const [activeBanner, setActiveBanner] = useState(0);

    const handleSelectBanner = (selectedBanner, e) => {
        setActiveBanner(selectedBanner);
    };

    return (
        <section>
            <Container fluid className="px-0 mt-5">
                <Carousel
                    activeIndex={activeBanner}
                    onSelect={handleSelectBanner}
                >
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./image 1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>
                                Nulla vitae elit libero, a pharetra augue mollis
                                interdum.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./image 2.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </section>
    );
};

export default Banner;
