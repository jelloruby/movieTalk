import React from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import styled from 'styled-components';
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";

import { LIKE_REVIEW_REQUEST, UNLIKE_REVIEW_REQUEST } from '../../reducers/review';

const MovieTalkCardWrap = styled.div`
    width: 90%;
    height: 190px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid rgba(128, 128, 128, 0.4);
    border-radius: 5px;
    box-sizing: border-box;
    position: relative;

    img {
        width: 100px;
        vertical-align: top;
    }

    div.text {
        width: 500px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    div.review-info {
        display: inline-block;
        margin-left: 20px;
    }

    svg {
        position: absolute;
        top: 20px;
        right: 20px;
    }

    a {
        position: absolute;
        bottom: 20px;
        right: 20px;
    }

    div + div {
        margin-top: 19px;
    }

    @media screen and (max-width: 900px) {
        & div.text {
            width: 100px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
`

function MovieTalkCard({ review, id }) {
    const dispatch = useDispatch();
    const liked = review.likers.includes(id);
    
    const onLike = ()=> {
        const body = {
            reviewId: review._id,
            liker: id,
        };

        if(!id) {
            return alert("로그인이 필요합니다.")
        }
        return dispatch({
            type: LIKE_REVIEW_REQUEST,
            data: body, 
        });
    };

    const onUnLike = ()=> {
        const body = {
            reviewId: review._id,
            disLiker: id,
        };

        if(!id) {
            return alert("로그인이 필요합니다.")
        }
        return dispatch({
            type: UNLIKE_REVIEW_REQUEST,
            data: body, 
        });
    };

    return (
        <MovieTalkCardWrap>
            <img src={review.image}/>
            <div className="review-info">
                <div>{review.name}님의 리뷰</div>
                <div>★★★★★{review.rating}</div>
                <div className="text">{review.text}</div>
                <div>{review.createdAt.slice(0, 10)}</div>
                {
                    !liked ?
                    <IoHeartOutline onClick={onLike} style={{ fontSize: '25px' }} />
                    :
                    <IoHeartSharp onClick={onUnLike} style={{ fontSize: '25px' }} />
                }
            <Link href="/review/*" as={`/review/${review.writer}/${review.movieId}`}>더보기</Link>
            </div>
        </MovieTalkCardWrap>
    )
};


export default MovieTalkCard;
