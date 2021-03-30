import Link from 'next/link';
import React from 'react';
import styled from 'styled-components'

import MovieInfoLayOut from '../../components/MovieInfoLayOut';
import MovieComment from '../../components/MovieComment'
import MovieStllSlider from '../../components/MovieStllSlider'
import { getMovieInfoFromKMDB } from '../../api'

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

export default function MovieInfoPage (props) {
    const { result } = props;
    
    // 커스텀 훅 제작 필요
    const replaceTitle = (title) => {
        const replacedTitle = title.replace(/!HS|!HE/g, "");
        return replacedTitle.trim()
    };

    const splitPoster = (posters) => {
        if(!posters) {
            posters = "https://res.cloudinary.com/dvmqbovxh/image/upload/v1616866172/noposter_pcwcby.png";
            return posters;
        } else {
            return posters.split("|")[0];
        }
    };

    const joinArrayOfActors = (actors) => {
        const sliceArray = actors.slice(0, 5);
        const actorsNameArray = [];
        for(let i=0; i<sliceArray.length; i++) {
            actorsNameArray.push(sliceArray[i].actorNm)
        }
        const joinArrayToString = actorsNameArray.join(", ");
        return joinArrayToString;
    }

    const splitStillImages = (stllsImages) => {
        if(!stllsImages) {
            stllsImages = "https://res.cloudinary.com/dvmqbovxh/image/upload/v1616866172/noposter_pcwcby.png";
            return stllsImages;
        } else {
            return stllsImages.split("|");
        }
    };

    return (
        <MovieInfoLayOut>
            <div style={{ width: '90%', textAlign: 'right', margin: '0 auto 1rem' }}>
                <span>이 영화를 무비톡에 남기고 싶다면?</span>
                <Link href="/movieTalk">무비톡 작성하기</Link>
            </div>
            <MovieBasicInfo>
                <div>
                    <img src={splitPoster(result[0].posters)} />
                </div>
                <div style={{ marginLeft: '2rem' }}>
                    { result[0].title &&
                        (
                            <div style={{ fontSize: '2rem' }}>{replaceTitle(result[0].title)}</div>
                        )
                    }
                    {
                        result[0].titleEng &&
                        (
                            <div style={{ fontSize: '1.5rem' }}>{result[0].titleEng}</div>
                        )
                    }
                    {
                        result[0].repRlsDate &&
                        (
                            <div>개봉일 : {result[0].repRlsDate.slice(0, 4)}-{result[0].repRlsDate.slice(4, 6)}-{result[0].repRlsDate.slice(6, 8)}</div>
                        )
                    }
                    {
                        result[0].genre && result[0].runtime &&
                        (
                            <div>장르 : {result[0].genre} / {result[0].runtime}분</div>
                        )
                    }
                    {
                        result[0].rating &&
                        (
                            <div>등급 : {result[0].rating}</div>
                        )
                    }
                    {
                        result[0].directors.director[0].directorNm &&
                        (
                            <div>감독 : {result[0].directors.director[0].directorNm}</div>
                        )
                    }
                    {
                        result[0].actors.actor[0].actorNm &&
                        (
                            <div>배우 : {joinArrayOfActors(result[0].actors.actor)}</div>
                        )
                    }
                </div>
            </MovieBasicInfo>
            <MovieDetailInfo>
                {
                    result[0].plots &&
                    (
                        <div>
                            <div>줄거리</div>
                            <div>{result[0].plots.plot[0].plotText}</div>
                        </div>
                    )
                }
                { result[0].stlls &&
                    (
                        <MovieStllSlider movieInfomation={splitStillImages(result[0].stlls)} />
                    )
                }
            </MovieDetailInfo>
            <div style={{ width: '80%', margin: '0 auto', border: '1px solid red' }}>
                <div>댓글</div>
                <div>
                    <MovieComment />
                </div>
            </div>
        </MovieInfoLayOut>
    )
};

export async function getServerSideProps(context) {
    const res = await getMovieInfoFromKMDB(context.query.slug[1], context.query.slug[0])
    const result = await res.Data[0].Result;

    return {
      props: { result },
    }
}
