import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useRouter } from "next/router";
import { imageURL } from '../../config/config';
import {ADD_REVIEW_REQUEST, MODIFY_REVIEW_REQUEST, ADD_REVIEW_SUCCESS, MODIFY_REVIEW_SUCCESS } from '../../reducers/review';

const ModalWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(3px);
    z-index: 999999;
`

const Modal = styled.div`
    width: 600px;
    height: 600px;
    border-radius: 5px;
    padding: 20px;
    background-color: #2A2A28;
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    @media screen and (max-width: 900px) {
        width: 350px;
        height: 600px;
    }
`

const ReviewContent = styled.div`
    display: flex;

    & > div {
        width: 50%;
        font-size: 18px;
        margin-bottom: 8px;
    }

    & > form {
        width: 50%;
    }

    & > div img {
        border-radius: 5px;
        width: 260px;
        height: 390px;
    }

    @media screen and (max-width: 900px) {
        display: block;

        & > div {
            width: auto;
        }

        & > form {
            width: auto;
        }

        & > div img {
            width: 100%;
            display: none;
        }
    }
`

const TextArea = styled.textarea`
    width: 100%;
    height: 390px;
    border-radius: 5px;
    padding: 10px;
    color: white;
    background: black;
    box-sizing: border-box;
    border: none;

    @media screen and (max-width: 900px) {
        height: 380px;
    }
`

const CloseBtn = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
`

const SubmitBtn = styled.button`
    position: absolute;
    bottom: 20px;
    right: 20px;
`

function ReviewModal({ movie, closeModal }) {
    const dispatch = useDispatch();
    const router = useRouter();

    const [text, setText] = useState("");
    const { me } = useSelector((state) => state.user);

    const handleChangeText = (e) => {
        setText(e.currentTarget.value);
    };
    
    const handleSubmitReview = (e) => {
        e.preventDefault();

        if(router.query.all) {
            const body = {
                writerId: router.query.all[0],
                movieId: router.query.all[1],
                text: text
            };
            dispatch({ type: MODIFY_REVIEW_REQUEST, data: body });
            if(MODIFY_REVIEW_SUCCESS) {
                closeModal();
            } else {
                alert("수정에 실패하였습니다.")
            }
        } else {
            const body = {
                writer: me._id,
                name: me.name,
                image: `${imageURL}/original${movie.poster_path}`,
                text: text,
                likes: 0,
                title: movie.title,
                movieId: router.query.id,
            };
            dispatch({ type: ADD_REVIEW_REQUEST, data: body });
            if(ADD_REVIEW_SUCCESS) {
                closeModal();
            } else {
                alert("리뷰 추가에 실패하였습니다.")
            }
        };
    };

    return (
        <ModalWrap>
            <Modal>
                <div style={{ fontSize: '25px', marginBottom: '20px' }}>Review</div>
                <ReviewContent>
                    <div>
                        <img src={`${imageURL}/w300/${movie.poster_path ? movie.poster_path : movie.image}`} />
                        <div>
                            {movie.title}
                        </div>
                    </div>
                    <form onSubmit={handleSubmitReview}>
                        <TextArea
                            placeholder="영화 리뷰를 적어주세요."
                            onChange={handleChangeText}
                        >
                            {movie.text ? movie.text : ""}
                        </TextArea>
                        <SubmitBtn type="submit">제출</SubmitBtn>
                    </form>
                </ReviewContent>
                <CloseBtn onClick={closeModal}>닫기</CloseBtn>
            </Modal>
        </ModalWrap>
    )
};

export default ReviewModal;
