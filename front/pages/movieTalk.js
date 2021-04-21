import React from 'react';
import { useDispatch } from 'react-redux';

import SubPageLayout from '../components/layout/MainPageLayout';
import { LOAD_ALL_REVIEW_REQUEST } from '../reducers/review'

function movieTalk() {
    const dispatch = useDispatch();

    return (
        <SubPageLayout>
            무비톡페이지
        </SubPageLayout>
    )
};

export default movieTalk;
