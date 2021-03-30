import React, { useState } from 'react'
import Slider from "react-slick";

function MovieMainSlider({ movieInfomation }) {
    const settings = {
        dots: false, 
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        fade: true,
        arrows: false,
        autoplay: true,
        initialSlide: 0,

    };

    const imageURL = 'https://image.tmdb.org/t/p/original/'

    return (
        <Slider {...settings}>
            {
                movieInfomation.map(item => (
                    <div key={item.id} className="main-slider-item">
                        <img src={`${imageURL}${item.backdrop_path}`} />
                    </div>
                ))
            }
        </Slider>

    )
}

export default MovieMainSlider
