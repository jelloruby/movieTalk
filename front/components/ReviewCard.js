import React from 'react'
import styled from 'styled-components';

const ReviewCardWrap = styled.div`
    border: 1px solid gray;
    width: 45%;
    padding: 20px;
    border-radius: 3px;
    box-sizing: border-box;
    display: inline-block;
    position: relative;
    background: ${props => props.src || "blue"};
    
    &:after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 45%;
        height: 100%;
        border-radius: 3px;
        background: linear-gradient(to right, rgba(40,40,60,1) 0%,rgba(40,0,60,0) 90%);
        background-blend-mode: multiply;
        will-change: transform;
        z-index: 0;
    }

    & > div {
        position: relative;
        z-index: 1;
    }

    & > button {
        margin-top: 15px;
        position: relative;
        z-index: 1;
    }

    & > div + div {
        margin-top: 15px;
    }
`

function ReviewCard({ posterPath }) {
    return (
        <ReviewCardWrap src="gray">
            <div style={{ fontSize: '1.5rem' }}>제목</div>
            <div>★★★★★</div>
            <div>후기 내용 ...</div>
            <button>더보기</button>
        </ReviewCardWrap>
    )
}

export default ReviewCard
