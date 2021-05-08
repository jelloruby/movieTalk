import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import axios from 'axios';
import { END } from 'redux-saga';

import wrapper from '../../store/configureStore';
import MyPageLayOut from '../../components/Layout/MyPageLayOut';
import MyReviewCard from '../../components/Card/MyReviewCard';
import LoadMoreBotton from '../../components/Botton/LoadMoreBotton';

import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';
import { LOAD_MY_REVIEWS_REQUEST, LOAD_MORE_MY_REVIEWS_REQUEST } from '../../reducers/review';

const UserInfoWrap = styled.div`
    width: 100%;
    height: 300px;
    marginBottom: 250px;
    background: gray;
    position: relative
`

const UserInfoInner = styled.div`
    width: 100%;
    position: absolute;
    top: 225px;

    & > div {
        display: inline-block;
    }

    @media screen and (max-width: 900px) {
        & > div {
            display: block;
        }
    }
`

const UserImage = styled.div`
    width: 150px;
    height: 150px;
    margin-left: 100px;
    border-radius: 50%;
    background: red;
    vertical-align: top;

    @media screen and (max-width: 900px) {
        width: 130px;
        height: 130px;

        margin: 0 auto;
    }
`

const UserInfo = styled.div`
    margin-left: 50px;
    margin-top: 30px;

    @media screen and (max-width: 900px) {
        width: 100%;
        margin-left: 0;
        text-align: center;
    }
`

const UserName = styled.div`
    font-size: 32px;
`

const NumRelatedUser = styled.div`
    margin-top: 25px;
`

const MyMovieTalk = styled.div`
    width: 80%;
    margin: 150px auto 0;

    & > div:nth-child(1) {
        font-size: 24px;
        margin-bottom: 15px;
    }
`

function myPage() {
    const router = useRouter();
    const dispatch = useDispatch();
    const { id } = router.query;

    const { me } = useSelector((state) => state.user);
    const { myReviews } = useSelector((state) => state.review);

    const handleClick = () => {
        const lastId = myReviews[myReviews.length - 1]?._id;

        dispatch({
            type: LOAD_MORE_MY_REVIEWS_REQUEST,
            data: {
                userId: id,
                lastId: lastId
            }
        });
    };

    return (
        <MyPageLayOut>
            <UserInfoWrap>
                <UserInfoInner>
                    <UserImage />
                    <UserInfo>
                        <UserName>{me && me.name ? me.name : ""}</UserName>
                        <NumRelatedUser>{myReviews && myReviews.length} reviews</NumRelatedUser>
                    </UserInfo>
                </UserInfoInner>
            </UserInfoWrap>
            <MyMovieTalk>
                <div>{me && me.name ? me.name : ""}'s MovieTalk</div>
                <div>
                    {
                        myReviews && myReviews.map(myReview => (
                            <MyReviewCard
                                myReview={myReview}
                                id={id}
                            />
                        ))
                    }
                </div>
                {
                    myReviews[0] ?  
                    <LoadMoreBotton onClick={handleClick}/>
                    :
                    <div>리뷰가 없습니다.</div>
                }
            </MyMovieTalk>
        </MyPageLayOut>
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
        type: LOAD_MY_REVIEWS_REQUEST,
        data: context.params.id
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
});


export default myPage;
