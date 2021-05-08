import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import { END } from 'redux-saga';

import wrapper from '../store/configureStore';
import SubPageLayout from '../components/Layout/SubPageLayout';
import MovieTalkCard from '../components/Card/MovieTalkCard';

import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import { LOAD_ALL_REVIEWS_REQUEST } from '../reducers/review';

const MovieTalkCardWrap = styled.div`
    margin-top: 48px;

    & > div + div {
        margin-top: 16px;
    }

    @media screen and (max-width: 900px) {
        margin-top: 60px;
    }
`

function movieTalk() {
    const dispatch = useDispatch();

    const { allReviews, hasMoreReviews, loadAllReviewsLoading } = useSelector((state) => state.review);
    const { me } = useSelector((state) => state.user);
    const [id, setId] = useState(undefined);
    
    useEffect(() => {
        if(me && me._id) {
            setId(me._id);
        };
    }, []);

    useEffect(() => {
        function onScroll() {
            if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
                if (!loadAllReviewsLoading) {
                    const lastId = allReviews[allReviews.length - 1]?._id;

                    dispatch({
                        type: LOAD_ALL_REVIEWS_REQUEST,
                        data: {
                            lastId : lastId
                        }
                    });
                }
              }
        }
        window.addEventListener('scroll', onScroll);
        return () => {
          window.removeEventListener('scroll', onScroll);
        };
    }, [allReviews, hasMoreReviews, loadAllReviewsLoading]);

    return (
        <SubPageLayout>
            <MovieTalkCardWrap>
            {
                allReviews && (
                    allReviews.map(review => (
                        <MovieTalkCard key={review._id} review={review} id={id} />
                    ))
                )
            }
            </MovieTalkCardWrap>
        </SubPageLayout>
    )
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    };
    context.store.dispatch({
        type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch({
        type: LOAD_ALL_REVIEWS_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
});

export default movieTalk;
