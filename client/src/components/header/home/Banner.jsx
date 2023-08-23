import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import { styled } from '@mui/material';

import { bannerData } from '../../../CONSTANTS/data';

const Image = styled('img')({
    width: '100%',
    height: 180
})

const responsive = {

    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Banner = () => {
    return (
        <Carousel
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
            dotListClass="custom-dot-list-style"
            swipeable={false}
            infinite={true}
            autoPlay={true}
            draggable={false}
            utoPlaySpeed={4000}
  keyBoardControl={true}
            slidesToSlide={true}
            responsive={responsive}
        >
            {
                bannerData.map(data => (
                    <Image src={data.url} alt='banner' />

                ))
            }
        </Carousel>
    )
}

export default Banner;
