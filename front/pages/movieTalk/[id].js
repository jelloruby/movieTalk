import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';

import SubPageLayout from '../../components/layout/SubPageLayout';
import { imageURL } from '../config';
import { getMovieDetailFromTMDB } from '../api/api';
import { addReviewRequestAction } from '../../reducers/review';

function createMovieTalk(props) {
    const dispatch = useDispatch();

    const { movieDetail } = props;
    const { me } = useSelector((state) => state.user);

    const [Review, setReview] = useState("");
    
    useEffect(() => {
        if (!(me && me.email)) {
            const didDelete = confirm('로그인이 필요합니다. 로그인 화면으로 이동하시겠습니까?');
            if(didDelete) {
                Router.push('/login');
            } else {
                Router.back();
            }
        };
    }, [me && me.id]);


    const onReviewHandler = (e) => {
        setReview(e.currentTarget.value)
    }

    const handleSubmitReview = (e) => {
        e.preventDefault();
        const body = {
            writer: me._id,
            iamge: `${imageURL}/original${movieDetail.poster_path}`,
            name: me.name,
            rating: 5,
            text: Review
        };

        dispatch(addReviewRequestAction(body));
    }

    return (
        <SubPageLayout>
            <div>
                { (me && me.name) &&
                    (
                        <div>{me.name}님의 리뷰</div>
                    )
                }
                <div>
                    평점
                </div>
                <div>
                    <img src={`${imageURL}/w200/${movieDetail.poster_path}`} style={{ borderRadius: '5px' }} />
                </div>
                <div>{movieDetail.title}({movieDetail.release_date.slice(0, 4)})</div>
                <form onSubmit={handleSubmitReview}>
                    <textarea
                        placeholder="영화 리뷰를 적어주세요."
                        onChange={onReviewHandler}
                    ></textarea>
                    <button type="submit">제출</button>
                </form>
            </div>

        </SubPageLayout>
    )
};

export async function getServerSideProps({ query }) {
    const movieDetail = await getMovieDetailFromTMDB(query.id);
    
    return {
        props: {
            movieDetail: movieDetail,
        },
    }
}

export default createMovieTalk;
