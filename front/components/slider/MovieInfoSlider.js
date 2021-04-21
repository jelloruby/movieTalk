import React from 'react'
import Slider from "react-slick";

import { imageURL } from '../../pages/config'

function MovieInfoSlider({ movieInfomation }) {
    const settings = {
        dots: false, 
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 8,
        arrows: false,
        autoplay: false,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                infinite: true,
              }
            },
            {
              breakpoint: 840,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
        ],
    };
    
    const havePosterPath = (posterPath) => {
        if(!posterPath) {
            posterPath = "https://res.cloudinary.com/dvmqbovxh/image/upload/v1616866172/noposter_pcwcby.png";
            return posterPath;
        } else {
            return `${imageURL}/w500/${posterPath}`
        }
    };

    return (
        <Slider {...settings}>
            {
                movieInfomation.map(item => (
                    <div key={item.id} >
                        <img src={havePosterPath(item.poster_path)} style={{ width: '100%', borderRadius: '10px'}} />
                    </div>
                ))
            }
        </Slider>

    )
}

export default MovieInfoSlider