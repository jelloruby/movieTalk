import React, { useState } from 'react';
import Router from 'next/router';
import styled from 'styled-components';

import SearchMovieBotton from '../Botton/SearchMovieBotton';

const SearchFormWrap = styled.form`
    position: relative;
`

const SearchInput = styled.input`
    width: 500px;
    height: 70px;
    text-align: center;
    border-radius: 32px;
    border: none;
    background: rgba(133, 133, 133, 0.479);
    color: white;
        
    &::placeholder {
        color: black;
    }

    @media screen and (max-width: 900px) {
        width: 220px;
        height: 60px;

        &::placeholder {
            color: black;
            font-size: 12px;
        }
    }
`

function SearchForm() {
    const [inputValue, setInputValue] = useState("");
    
    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmitValue = (e) => {
        e.preventDefault();
        Router.push(`/movieSearch/${inputValue}`);
    };

    return (
        <SearchFormWrap onSubmit={handleSubmitValue}>
            <SearchInput
                placeholder="영화명을 입력해주세요."
                onChange={handleInputValue}
            />
            <SearchMovieBotton />
        </SearchFormWrap>
    )
};

export default SearchForm;
