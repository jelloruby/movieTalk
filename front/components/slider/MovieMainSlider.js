import React from 'react'
import Slider from "react-slick";

import { imageURL } from '../../pages/config'

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

    return (
        <Slider {...settings}>
            {
                movieInfomation.map(item => (
                    <div key={item.id} className="main-slider-item">
                        <img src={`${imageURL}/original/${item.backdrop_path}`} />
                    </div>
                ))
            }
        </Slider>

    )
}

export default MovieMainSlider
