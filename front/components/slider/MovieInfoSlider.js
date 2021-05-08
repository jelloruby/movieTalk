import React from 'react';
import Link from 'next/link';
import Slider from "react-slick";

import SlickNextBotton from '../Botton/SlickNextBotton';
import SlickPrevBotton from '../Botton/SlickPrevBotton';
import { imageURL } from '../../config/config';

function MovieInfoSlider({ movieInfomation }) {
    const settings = {
        dots: true, 
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 7,
        arrows: true,
        autoplay: false,
        prevArrow: <SlickPrevBotton />,
        nextArrow: <SlickNextBotton />,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
              }
            },
            {
                breakpoint: 450,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
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
                    <Link
                        href="/movieInfo/[id]"
                        as={`/movieInfo/${item.id}`}
                        key={item.id}
                    >
                        <a style={{ cursor: 'pointer' }}>
                            <img src={havePosterPath(item.poster_path)} style={{ width: '100%', borderRadius: '10px'}} />
                        </a>
                    </Link>
                ))
            }
        </Slider>

    )
};

export default MovieInfoSlider;