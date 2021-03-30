import React from 'react'
import styled from 'styled-components';

import AppLayout from '../components/AppLayout'
import MovieInfoSlider from '../components/MovieInfoSlider';
import MovieMainSlider from '../components/MovieMainSlider';

import { getpopularMovieFromTMDB, getMovieByGenreFromTMDB } from '../api';

const WrapMovieList = styled.div`
    margin-bottom: 3rem;
`

const TitleOfList = styled.div`
    color: white;
    font-size: 2rem;
`
const SiteName = styled.h2`
    text-align: center;
    font-size: 5rem;
    color: red;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
`
export default function Home(props) {
    const { popularMovie } = props;
    const { actionMovie } = props;
    const { comedyMovie } = props;
    const { animationMovie } = props;
    const { fantasyMovie } = props;
    const { sfMovie } = props;
    

    // const movieNameArray = (list) => {
    //     var arr = [];
        
    //     for(let i=0; i<5; i++) {
    //         arr.push(list[i])
    //     }
    //     return arr;
    // }

    return (
        <AppLayout>
            <div className="main-content" style={{ height: '80vh', position: 'relative' }}>
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
                <WrapMovieList>
                    <TitleOfList>판타지 | Fantasy</TitleOfList>
                    { fantasyMovie &&
                        (
                            <MovieInfoSlider movieInfomation={fantasyMovie} />
                        )
                    }
                </WrapMovieList>
                <WrapMovieList>
                    <TitleOfList>공상과학 | SF</TitleOfList>
                    { sfMovie &&
                        (
                            <MovieInfoSlider movieInfomation={sfMovie} />
                        )
                    }
                </WrapMovieList>   
            </div>
        </AppLayout>
    )
}

export async function getServerSideProps() {
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
}
