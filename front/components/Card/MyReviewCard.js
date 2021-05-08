import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const MyReviewCardWrap = styled.div`
    width: 100%;
    height: 200px;
    padding: 20px;
    margin-bottom: 15px;
    border-radius: 3px;
    box-sizing: border-box;
    display: inline-block;
    position: relative;

    &::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 3px;
        background: black;
        opacity: 0.5;
        z-index: 0;
    }

    & > div {
        position: relative;
        z-index: 1;
    }

    & > button {
        margin-top: 25px;
        position: relative;
        z-index: 1;
    }

    & > a {
        margin-top: 25px;
        position: relative;
        z-index: 1;
    }


    & > div + div {
        margin-top: 15px;
    }

    div.text {
        width: 500px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
`

function MyReviewCard({ myReview, id }) {
    return (
        <MyReviewCardWrap style={{ background: `url(${myReview.image}) center center / cover no-repeat` }}>
            <div style={{ fontSize: '24px' }}>제목</div>
            <div>{myReview.rating}★★★★★</div>
            <div className="text">{myReview.text}</div>
            <Link href="/review/*" as={`/review/${id}/${myReview.movieId}`}>더보기</Link>
        </MyReviewCardWrap>
    )
};

export default MyReviewCard;
