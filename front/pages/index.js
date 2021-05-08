import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import axios from 'axios';
import { END } from 'redux-saga';

import wrapper from '../store/configureStore';
import MainPageLayout from '../components/Layout/MainPageLayout'
import MovieMainSlider from '../components/Slider/MovieMainSlider';
import SearchForm from '../components/Form/SearchForm';

import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import { getPopularMovieFromTMDB } from './api/api';

const MainSlideWrap = styled.div`
    height: 100vh;
    margin-left: 200px;
    transition: 1s;
    
    & > div:nth-child(1) {
        position: absolute;
        top: 50%;
        left: 60%;
        transform: translate(-60%, -50%);
        z-index: 1;
    }

    @media screen and (max-width: 900px) {
        margin-left: 0;

        & > div:nth-child(1) {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
`

const SiteName = styled.div`
    font-size: 50px;
    color: red;
    display: none;
    position: absolute;
    top: -100px;
    left: -20px;
    z-index: 1;

    @media screen and (max-width: 900px) {
        display: block;
    }
`

const PopluarMovieLink = styled.a`
    font-size: 14px;
    color: rgb(170, 170, 170);
    position: absolute;
    bottom: -40px;
    left: 30px;
    z-index: 1;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        color: rgb(220, 220, 220);
    }

    @media screen and (max-width: 900px) {
        font-size: 12px;
        left: 55px;
        bottom: -50px;
    }
`

function Home(props) {
    const { popularMovie } = props;

    return (
        <MainPageLayout>
            <MainSlideWrap className="main-content">
                <div>
                    <SiteName>MovieTalk</SiteName>
                    <SearchForm />
                    <Link href={'/movieSearch'}>
                        <PopluarMovieLink>Popular movie ></PopluarMovieLink>
                    </Link>
                </div>
                <MovieMainSlider movieInfomation={popularMovie}></MovieMainSlider>
            </MainSlideWrap>
        </MainPageLayout>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    };

    context.store.dispatch({
        type: LOAD_MY_INFO_REQUEST
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();

    const popularMovie = await getPopularMovieFromTMDB();
    
    return {
      props: { 
        popularMovie: popularMovie.results, 
      },
    };
});

export default Home;