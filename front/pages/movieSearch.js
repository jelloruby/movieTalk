import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { END } from 'redux-saga';

import wrapper from '../store/configureStore';
import SubPageLayout from '../components/Layout/SubPageLayout';
import MovieInfoSlider from '../components/Slider/MovieInfoSlider';
import SearchForm from '../components/Form/SearchForm';
import CategoryBotton from '../components/Botton/CategoryBotton';

import { getPopularMovieFromTMDB, getMovieByGenreFromTMDB } from './api/api';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';

const MoiveSearchWrap = styled.div`
    position: absolute;
    top: 48px;
    left: 60%;
    transform: translate(-60%, 0);

    @media screen and (max-width: 900px) {
        left: 50%;
        transform: translate(-50%, 0);
    }
`

const MovieSliderWrap = styled.div`
    width: 80%;
    margin: 150px auto 0;

    .category-botton-wrap {
        margin-bottom: 20px;
    }

    .slick-slide {
         width: 150px;
    }

    .slick-slide > div { 
        margin: 0 10px;
    }

    .slick-prev {
        color: red;
        opacity: .5;
        transition: 0.5s;
    }

    .slick-prev:hover {
        opacity: 1;
    }

    .slick-next {
        color: red;
        opacity: .5;
        transition: 0.5s;
    }

    .slick-next:hover {
        opacity: 1;
    }

    & > div + div {
        margin-top: 30px;
    }

    @media screen and (max-width: 900px) {
        width: 90%;
    }
`

const TitleOfList = styled.div`
    font-size: 20px;
    margin-bottom: 20px;
`

function movieSearch(props) {
    const { popularMovie, actionGenreMovie, fantasyGenreMovie, animationGenreMovie } = props;
    
    const [genre, setGenre] = useState('Action');

    const handleClickGenre = (e) => {
        setGenre(e.target.innerHTML);
    };

    return (
        <SubPageLayout>
            <MoiveSearchWrap>
                <SearchForm />
            </MoiveSearchWrap>
            <MovieSliderWrap>
                <div className="movie-info-slider">
                    <TitleOfList>Browse by Category</TitleOfList>
                    <div onClick={handleClickGenre} className="category-botton-wrap">
                        <CategoryBotton genre="Action"/>
                        <CategoryBotton genre="Fantasy"/>
                        <CategoryBotton genre="Animation"/>
                    </div>
                    <MovieInfoSlider movieInfomation={
                        genre === 'Action' ? actionGenreMovie :
                        genre === 'Fantasy' ? fantasyGenreMovie :
                        genre === 'Animation' ? animationGenreMovie : actionGenreMovie
                    } />
                </div>
                <div className="movie-info-slider">
                    <TitleOfList>Top Rated</TitleOfList>
                    <MovieInfoSlider movieInfomation={popularMovie} />
                </div>
            </MovieSliderWrap>
        </SubPageLayout>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie; 
    };
    context.store.dispatch({
        type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();

    const popularMovie = await getPopularMovieFromTMDB();
    const actionGenreMovie = await getMovieByGenreFromTMDB(28);
    const fantasyGenreMovie = await getMovieByGenreFromTMDB(14);
    const animationGenreMovie = await getMovieByGenreFromTMDB(16);
    
    return {
      props: { 
        popularMovie: popularMovie.results, 
        actionGenreMovie: actionGenreMovie.results, 
        fantasyGenreMovie: fantasyGenreMovie.results, 
        animationGenreMovie: animationGenreMovie.results, 
      },
    };
});

export default movieSearch;