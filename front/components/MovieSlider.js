import React from 'react'
import { useRouter } from 'next/router'
import Slider from "react-slick";

import MovieInfoLink from './MovieInfoLink'

function MovieSlider({ movieInfomation }) {
    const router = useRouter()

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

    const ticketingMovie = () => {
        router.push("/ticketing")
    }

    return (
        <Slider {...settings}>
            {
                movieInfomation.map(item => (
                    <div key={item.id} style={{ margin: '0 1rem' }}>
                        <MovieInfoLink id={item.id} src={item.poster}/>
                        <button onClick={ticketingMovie} className="btn ticketing-btn">예매</button>
                    </div>
                ))
            }
        </Slider>

    )
}

export default MovieSlider