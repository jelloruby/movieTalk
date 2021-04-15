import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import { END } from 'redux-saga';

import { LOAD_MY_INFO_REQUEST } from '../reducers/user'
import AppLayout from '../components/layout/AppLayout'
import MovieInfoSlider from '../components/slider/MovieInfoSlider';
import MovieMainSlider from '../components/slider/MovieMainSlider';
import wrapper from '../store/configureStore';

import { getpopularMovieFromTMDB, getMovieByGenreFromTMDB, getActorsFromTMDB } from './api/api';

const WrapMovieList = styled.div`
    margin-bottom: 3rem;
`

const TitleOfList = styled.div`
    font-size: 2rem;
`
const SiteName = styled.h2`
    text-align: center;
    font-size: 6rem;
    color: red;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
function Home(props) {
    const dispatch = useDispatch();

    const { popularMovie } = props;
    const { actionMovie } = props;
    const { comedyMovie } = props;
    const { animationMovie } = props;

    useEffect(() => {
        const fetch = async () => {
            const a = await getActorsFromTMDB(103124)
            console.log(a);
        }
        fetch();
    }, [])

    return (
        <AppLayout>
            <div className="main-content" style={{ height: '80vh', position: 'relative', marginBottom: '5rem' }}>
                <MovieMainSlider movieInfomation={popularMovie}></MovieMainSlider>
                <SiteName>MovieTalk</SiteName>
            </div>
            <div style={{ width: '85%', margin: '0 auto' }} className="movie-list">
                <WrapMovieList>
                    <TitleOfList>최신 인기 영화</TitleOfList>
                    { popularMovie &&
                        (
                            <MovieInfoSlider movieInfomation={popularMovie} />
                        )
                    }
                </WrapMovieList>
                <WrapMovieList>
                    <TitleOfList>무비톡 리뷰순</TitleOfList>
                </WrapMovieList>
                <WrapMovieList>
                    <TitleOfList>액션 | Action</TitleOfList>
                    { actionMovie &&
                        (
                            <MovieInfoSlider movieInfomation={actionMovie} />
                        )
                    }
                </WrapMovieList>
                <WrapMovieList>
                    <TitleOfList>코미디 | Drama</TitleOfList>
                    { comedyMovie &&
                        (
                            <MovieInfoSlider movieInfomation={comedyMovie} />
                        )
                    }
                </WrapMovieList>
                <WrapMovieList>
                    <TitleOfList>애니메이션 | Animation</TitleOfList>
                    { animationMovie &&
                        (
                            <MovieInfoSlider movieInfomation={animationMovie} />
                        )
                    }
                </WrapMovieList>
            </div>
        </AppLayout>
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
    })
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();


    const popularMovie = await getpopularMovieFromTMDB();
    const actionMovie = await getMovieByGenreFromTMDB(28);
    const comedyMovie = await getMovieByGenreFromTMDB(35);
    const animationMovie = await getMovieByGenreFromTMDB(16);
    const fantasyMovie = await getMovieByGenreFromTMDB(14);
    const sfMovie = await getMovieByGenreFromTMDB(878);

    return {
      props: { 
        popularMovie: popularMovie.results, 
        actionMovie: actionMovie.results, 
        comedyMovie: comedyMovie.results,
        animationMovie: animationMovie.results,
        fantasyMovie: fantasyMovie.results,
        sfMovie: sfMovie.results
      },
    }
});

export default Home;