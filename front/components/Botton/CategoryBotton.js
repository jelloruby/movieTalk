import React from 'react';
import styled from 'styled-components';

const CategoryBtn = styled.button`
    width: 80px;
    border: none;
    padding: 8px 0;
    margin-right: 10px;
    border-radius: 15px;
    color: white;
    background: rgba(204, 32, 32, 0.7);
    box-sizing: border-box;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background: rgba(255, 0, 0, 0.8);
    }
`

function CategoryBotton({ genre }) {
    return (
        <CategoryBtn>{genre}</CategoryBtn>
    )
};

export default CategoryBotton;
