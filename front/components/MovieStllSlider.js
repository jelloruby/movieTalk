import React from 'react'
import Slider from "react-slick";

function MovieStllSlider({ movieInfomation }) {
    const settings = {
        dots: false, 
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 500,
        arrows: true,
        autoplay: false,
        className:"wrap-slider",
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ],
    };

    return (
        <Slider {...settings}>
            {
                movieInfomation.map(item => (
                    <div>
                        <img src={item} style={{ width: '99%', height: '200px' }} />
                    </div>
                ))
            }
        </Slider>

    )
}

export default MovieStllSlider