import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'

import { addReviewRequestAction } from '../reducers/review';


const WrapCommentForm = styled.div`
    border: 1px solid red;
    display: flex;
`

const TextArea = styled.textarea`
    border: none;
    font-family: 'GmarketSansMedium';
    width: 500px;
`

function MovieComment() {
    const dispatch = useDispatch();
    // const { me } = useSelector(state => state.user)

    const [Comment, setComment] = useState("");

    const onCommentHandler = (e) => {
        setComment(e.currentTarget.value)
    }

    const onSubmitHandler = (e) => { 
        e.preventDefault();

        let body = {
            comment: Comment,
        }
        dispatch(addReviewRequestAction(body));
    }

    return (
        <div>
            <WrapCommentForm>
                <div>닉네임</div>
                <form onSubmit={onSubmitHandler}>
                    <TextArea
                        placeholder="로그인 후 이용해주세요."
                        onChange={onCommentHandler}
                    />
                    <button type="submit">댓글 쓰기</button>
                </form>
            </WrapCommentForm>
            <div>
                이 영화에 달린 댓글을 맵해서 가져온다.
            </div>
        </div>
    )
}

export default MovieComment
