import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Router from "next/router";

import SubPageLayout from '../../components/Layout/SubPageLayout';
import MovieActorList from '../../components/MovieActorList';
import ReviewModal from '../../components/Modal/ReviewModal';
import { getMovieDetailFromTMDB, getActorsFromTMDB } from '../api/api';
import { imageURL } from '../../config/config';

const MovieBasicInfo = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    position: relative;

    & > img {
        border-radius: 5px;
        width: 270px;
        height: 390px;
    }

    & > div {
        margin-left: 16px;
    }

    @media screen and (max-width: 900px) {
        display: block;

        & > img {
            display: block;
            margin: 0 auto;
        }
        
        & > div {
            margin-left: 0;
            margin-top: 20px;
        }
    }
`
const ReviewLink = styled.div`
    position: absolute;
    bottom: 0px;
    right: 21px;

    @media screen and (max-width: 650px) {
        position: static;
        text-align: right;
    }
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
    font-size: 32px;
    margin-top: 48px;
`

function MovieInfoPage(props) {
    const { me } = useSelector((state) => state.user);
    const { movieDetail } = props;
    const { cast } = props.actors;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        if (!(me && me.email)) {
            const didDelete = confirm('로그인이 필요합니다. 로그인 화면으로 이동하시겠습니까?');
            if(didDelete) {
                Router.push('/login');
            } else {
                Router.back();
            }
        } else {
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const joinArrayOfGenres = (genres) => {
        const genresNameArray = [];
        for(let i=0; i<genres.length; i++) {
            genresNameArray.push(genres[i].name);
        };
        const joinArrayToString = genresNameArray.join(", ");
        return joinArrayToString;
    };

    return (
        <SubPageLayout>
            <div style={{ marginTop: '60px' }}>
                <MovieBasicInfo>
                    <img src={`${imageURL}/w300/${movieDetail.poster_path}`}/>
                    <div>
                        { movieDetail.title &&
                            (
                                <div style={{ fontSize: '32px' }}>{movieDetail.title}</div>
                            )
                        }
                        {
                            movieDetail.original_title &&
                            (
                                <div style={{ fontSize: '24px' }}>{movieDetail.original_title}</div>
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
                    </div>
                    <ReviewLink>
                        <span>이 영화를 무비톡에 남기고 싶다면? </span>
                        <button onClick={openModal}>리뷰 작성하기</button>
                    </ReviewLink>
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
                </MovieDetailInfo>
                <MovieActorsInfo className="actors-slider">
                    <InfoTitle>배우</InfoTitle>
                    <MovieActorList movieActorInfo={cast} />   
                </MovieActorsInfo>
                {
                    isModalOpen &&
                    (
                        <ReviewModal
                            movie={movieDetail}
                            isModalOpen={isModalOpen}
                            closeModal={closeModal}
                        />
                    )
                }
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
    };
};

export default MovieInfoPage;
