import React from 'react';
import styled from 'styled-components';

import { IoSearchSharp } from "react-icons/io5";

const SearchBtn = styled.button`
    background: none;
    position: absolute;
    top: 10px;
    right: -60px;
    cursor: pointer;
    border: none;

    svg {
        color: white;
        font-size: 50px;
    }

    @media screen and (max-width: 900px) {
        top: 15px;
        right: -40px;

        svg {
            color: white;
            font-size: 30px;
        } 
    }
`

function SearchMovieBotton() {
    return (
        <SearchBtn type="submit">
            <IoSearchSharp />
        </SearchBtn>
    )
};

export default SearchMovieBotton;
