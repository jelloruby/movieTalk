import Link from 'next/link';
import React from 'react';
import styled from 'styled-components'
import Router, { useRouter } from "next/router";

import SubPageLayout from '../../components/layout/SubPageLayout';
import MovieActorSlider from '../../components/slider/MovieActorSlider';
import { getMovieDetailFromTMDB, getActorsFromTMDB } from '../api/api';
import { imageURL } from '../config';

const MovieBasicInfo = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
`

const MovieDetailInfo = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`

const MovieActorsInfo = styled.div`
    width: 80%;
    margin: 0 auto;
`

const InfoTitle = styled.div`
    font-size: 2rem;
    margin-top: 3rem;
`

function MovieInfoPage(props) {
    const router = useRouter();
    const { id } = router.query
    console.log(router.query);

    const { movieDetail } = props;
    const { cast } = props.actors;

    const joinArrayOfGenres = (genres) => {
        const genresNameArray = [];
        for(let i=0; i<genres.length; i++) {
            genresNameArray.push(genres[i].name);
        }
        const joinArrayToString = genresNameArray.join(", ");
        return joinArrayToString;
    };


    return (
        <SubPageLayout>
            <div style={{ marginTop: '3rem' }}>
                <div style={{ width: '90%', display: 'flex', justifyContent: 'space-between'  }}>
                    <div onClick={() => Router.back()} style={{ cursor: 'pointer' }}>뒤로가기</div>
                    <div>
                        <span>이 영화를 무비톡에 남기고 싶다면? </span>
                        <Link href="/movieTalk/[id]" as={`/movieTalk/${id}`}>
                            <a style={{ color: 'red' }}>톡 작성하기</a>
                        </Link>
                    </div>
                </div>
                <MovieBasicInfo>
                    <div>
                        <img src={`${imageURL}/w300/${movieDetail.poster_path}`} style={{ borderRadius: '5px' }} />
                    </div>
                    <div style={{ marginLeft: '2rem' }}>
                        { movieDetail.title &&
                            (
                                <div style={{ fontSize: '2rem' }}>{movieDetail.title}</div>
                            )
                        }
                        {
                            movieDetail.original_title &&
                            (
                                <div style={{ fontSize: '1.5rem' }}>{movieDetail.original_title}</div>
                            )
                        }
                        {
                            movieDetail.release_date &&
                            (
                                <div>개봉일 : {movieDetail.release_date}</div>
                            )
                        }
                        {
                            movieDetail.genres &&
                            (
                                <div>장르 : {joinArrayOfGenres(movieDetail.genres)}
                                </div>
                            )
                        }
                        {
                            movieDetail.runtime &&
                            (
                                <div>상영시간 : {movieDetail.runtime}분</div>
                            )
                        }
                        {/* {
                            movieDetail.directors.director.directorNm &&
                            (
                                <div>감독 : {movieDetail.directors.director.directorNm}</div>
                            )
                        } */}
                        {/* {
                            movieDetail.actors.actor.actorNm &&
                            (
                                <div>배우 : {joinArrayOfActors(movieDetail.actors.actor)}</div>
                            )
                        } */}
                    </div>
                </MovieBasicInfo>
                <MovieDetailInfo>
                    {
                        movieDetail.overview &&
                        (
                            <div>
                                <InfoTitle>줄거리</InfoTitle>
                                <div>{movieDetail.tagline}</div>
                                <br/>
                                <div>{movieDetail.overview}</div>
                            </div>
                        )
                    }
                    { movieDetail.video &&
                        (
                            <video />
                        )
                    }
                </MovieDetailInfo>
                <MovieActorsInfo className="actors-slider">
                    <InfoTitle>배우</InfoTitle>
                    <MovieActorSlider movieActorInfo={cast} />   
                </MovieActorsInfo>
            </div>
        </SubPageLayout>
    )
};

export async function getServerSideProps({ query }) {
    const movieDetail = await getMovieDetailFromTMDB(query.id);
    const actors = await getActorsFromTMDB(query.id);
    
    return {
        props: {
            movieDetail: movieDetail,
            actors: actors,
        },
    }
}

export default MovieInfoPage;
