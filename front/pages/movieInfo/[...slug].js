import Link from 'next/link';
import React from 'react';
import AppLayout from '../../components/AppLayout';

import { getMovieInfoFromKMDB } from '../../api'

export default function MovieInfo (props) {
    const { result } = props;

    // 커스텀 훅 제작 필요
    const replaceTitle = (title) => {
        return title.replace(/!HS|!HE/g, "");
    };

    const splitPoster = (posters) => {
        if(!posters) {
            posters = "https://res.cloudinary.com/dvmqbovxh/image/upload/v1616866172/noposter_pcwcby.png";
            return posters;
        } else {
            return posters.split("|")[0];
        }
    };

    return (
        <AppLayout>
            <img src={splitPoster(result[0].posters)} />
            <div>{replaceTitle(result[0].title)}</div>
            <div>{result[0].genre}</div>
            <div>{result[0].rating}</div>
            <div>{result[0].repRlsDate}</div>
            <div>{result[0].runtime}분</div>
            <Link href="/movieTalk">
                리뷰쓰기
            </Link>
        </AppLayout>
    )
};

export async function getServerSideProps(context) {
    const res = await getMovieInfoFromKMDB(context.query.slug[0], context.query.slug[1])
    const result = await res.Data[0].Result;

    return {
      props: { result },
    }
}
