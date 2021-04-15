import React from 'react'
import Slider from "react-slick";
import styled from 'styled-components'

import { imageURL } from '../../pages/config'

const ActorImage = styled.img`
  width: '200px';
  height: '300px';
  border-radius: '5px';
  transition: 500ms ease;
`
const ActorName = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-30%, -50%);
`

function MovieStllSlider({ movieActorInfo }) {
    const settings = {
        dots: false, 
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        speed: 500,
        arrows: false,
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

    const havePosterPath = (posterPath) => {
      if(!posterPath) {
          posterPath = "https://res.cloudinary.com/dvmqbovxh/image/upload/v1616866172/noposter_pcwcby.png";
          return posterPath;
      } else {
          return `${imageURL}/w200/${posterPath}`
      }
  };
    return (
        <Slider {...settings}>
            {
                movieActorInfo.map(item => (
                    <div>
                        <ActorImage src={havePosterPath(item.profile_path)} />
                        <ActorName>{item.name}</ActorName>
                    </div>
                ))
            }
        </Slider>

    )
}

export default MovieStllSlider