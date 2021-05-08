import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import { END } from 'redux-saga';

import wrapper from '../../store/configureStore';
import SubPageLayout from '../../components/Layout/SubPageLayout';
import ReviewModal from '../../components/Modal/ReviewModal';
import ModifyReviewBotton from '../../components/Botton/ModifyReviewBotton';

import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';
import { LOAD_REVIEW_REQUEST } from '../../reducers/review';

const MovieReviewWrap = styled.div`
    width: 80%;
    margin: 0 auto;
    text-align: center;
    box-sizing: border-box;
    position: relative;

    .movie-image {
        border-radius: 5px;
        width: 200px;
    }

    .movie-title {
        margin-top: 15px;
        font-size: 30px;
    }

    .review {
        margin-top: 35px;

        .name {
            color: gray;
            font-size: 23px;
            margin-bottom: 10px;
        }
    }
`

function review() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { review } = useSelector((state) => state.review);
    const { me } = useSelector((state) => state.user);

    useEffect(() => {
        if(me && me.email) {
            setIsLoggedIn(true);
        }
    }, []);

    const openModal = () => {
        console.log(1);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <SubPageLayout>
            <MovieReviewWrap>
                {
                    isLoggedIn && (
                        <ModifyReviewBotton openModal={openModal} />
                    )
                }
                <img src={review.image} className="movie-image"/>
                <div className="movie-title">{review.title}</div>
                <div className="review">
                    <div className="name">Review</div>
                    <div>{review.text}</div>
                </div>
                {
                    isModalOpen &&
                    (
                        <ReviewModal
                            movie={review}
                            isModalOpen={isModalOpen}
                            closeModal={closeModal}
                        />
                    )
                }
            </MovieReviewWrap>
        </SubPageLayout>
    )
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    console.log(context.params.all);
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    };
    context.store.dispatch({
        type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch({
        type: LOAD_REVIEW_REQUEST,
        data: {
            movieId: context.params.all[1],
            writerId: context.params.all[0]
        }
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
});

export default review;
