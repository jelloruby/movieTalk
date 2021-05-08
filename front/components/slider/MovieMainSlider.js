import React from 'react';
import Slider from "react-slick";

import { imageURL } from '../../config/config';

function MovieMainSlider({ movieInfomation }) {
    const settings = {
        dots: false, 
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
        fade: true,
        arrows: false,
        autoplay: true,
        initialSlide: 0,
    };

    return (
        <Slider {...settings}>
            {
                movieInfomation.map(item => (
                    <div key={item.id} className="main-slider-item">
                        <div style={{ background: `url(${imageURL}/original/${item.backdrop_path}) center center / cover no-repeat`, height: '100vh' }}></div>
                    </div>
                ))
            }
        </Slider>
    )
}

export default MovieMainSlider
