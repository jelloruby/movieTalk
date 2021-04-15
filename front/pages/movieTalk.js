import React from 'react';
import { useDispatch } from 'react-redux';

import AppLayout from '../components/layout/AppLayout';
import { LOAD_ALL_REVIEW_REQUEST } from '../reducers/review'

function movieTalk() {
    const dispatch = useDispatch();

    return (
        <AppLayout>
            무비톡페이지
        </AppLayout>
    )
};

export async function getServerSideProps() {
    dispatch({
        type: LOAD_ALL_REVIEW_REQUEST
    })
    
    return {
        props: {
            movieDetail: movieDetail,
        },
    }
}

export default movieTalk;
