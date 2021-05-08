import React from 'react';
import styled from 'styled-components';

const ModifyReviewBtn = styled.button`
    width: 70px;
    font-size : 15px;
    padding: 5px 0;
    border: none;
    border-radius: 5px;
    margin-top: 16px;
    display: block;
    background: white;
    font-family: 'GmarketSansMedium';
    position: absolute;
    top: -10px;
    right: 0;
    cursor: pointer;
`

function ModifyReviewBotton({ openModal }) {
    return (
        <ModifyReviewBtn onClick={openModal}>수정하기</ModifyReviewBtn>
    )
};

export default ModifyReviewBotton;
