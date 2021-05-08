import React from 'react';
import styled from 'styled-components';

const LoadMoreBtn = styled.button`
    width: 150px;
    margin: 0 auto;
    font-size : 18px;
    padding: 5px 0;
    border: none;
    border-radius: 5px;
    margin-top: 16px;
    display: block;
    background: white;
    font-family: 'GmarketSansMedium';
    cursor: pointer;
`

function LoadMoreBotton() {
    return (
        <LoadMoreBtn>Load More</LoadMoreBtn>
    )
};

export default LoadMoreBotton;
