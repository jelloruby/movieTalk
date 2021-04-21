import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import { END } from 'redux-saga';
import Router from "next/router";

import { LOAD_MY_INFO_REQUEST } from '../reducers/user'
import MainPageLayout from '../components/layout/MainPageLayout'
import MovieInfoSlider from '../components/slider/MovieInfoSlider';
import MovieMainSlider from '../components/slider/MovieMainSlider';
import wrapper from '../store/configureStore';
import { IoSearchSharp } from "react-icons/io5";

import { getpopularMovieFromTMDB, getMovieByGenreFromTMDB } from './api/api';

const WrapMovieList = styled.div`
`

const TitleOfList = styled.div`
    font-size: 1.5rem;
`

const SearchInput = styled.input`
    width: 250px;
    height: 50px;
    margin: 0 auto;
    text-align: center;
    border-radius: 2rem;
    border: none;
    position: relative;
    z-index: 99999;
`

function Home(props) {
    const { me } = useSelector((state) => state.user);
    console.log(me);
    const [inputValue, setInputValue] = useState("");
    
    const { popularMovie } = props;

    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmitValue = (e) => {
        e.preventDefault();
        Router.push(`/movieSearch/${inputValue}`);
    };

    return (
        <MainPageLayout>
            <div className="main-content" style={{ height: '100vh', position: 'relative', marginLeft: '200px' }}>
                <form
                    onSubmit={handleSubmitValue}
                    style={{ textAlign: 'center', position: 'absolute', top: '3rem', left: '2rem' }}
                >
                    <SearchInput
                        placeholder="영화명을 입력해주세요."
                        onChange={handleInputValue}
                    />
                    <button type="submit" className="btn search-btn">
                        <IoSearchSharp style={{ color: 'white', fontSize: '1.5rem' }} />
                    </button>
                </form>

                <MovieMainSlider movieInfomation={popularMovie}></MovieMainSlider>
            </div>
            <div style={{ width: '84%', margin: '0 auto', position: 'absolute', bottom: '2rem', left: '250px' }} className="movie-list">
                <WrapMovieList>
                    <TitleOfList>최신 인기 영화</TitleOfList>
                    { popularMovie &&
                        (
                            <MovieInfoSlider movieInfomation={popularMovie} />
                        )
                    }
                </WrapMovieList>
            </div>
        </MainPageLayout>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    // 쿠키의 정보가 항상 들어가도록 해주는 것!
    const cookie = context.req ? context.req.headers.cookie : '';
    // 만약 아래와 같이 설정하면 쿠키가 모든 서버에서 공유될 수 있다.
    // axios.defaults.headers.Cookie = cookie;

    // 그래서 쿠키를 써서 요청을 보낼 때만 쿠키를 넣어놨다가 쿠키를 쓰지 않을 때는 서버에서 공유하고 있는 쿠키를 제거하도록 한다.
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    
    // context 안에는 store가 들어있다.
    // redux에 데이터가 채워진 상태로 데이터가 존재하게 된다.
    context.store.dispatch({
        type: LOAD_MY_INFO_REQUEST
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();

    const popularMovie = await getpopularMovieFromTMDB();

    return {
      props: { 
        popularMovie: popularMovie.results, 
      },
    }
});

export default Home;