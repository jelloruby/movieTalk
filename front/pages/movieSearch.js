import React, { useState } from 'react';
import styled from 'styled-components';
import Router from "next/router";

import SubPageLayout from '../components/layout/SubPageLayout';
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = styled.input`
    width: 250px;
    height: 50px;
    margin: 0 auto;
    text-align: center;
    border-radius: 2rem;
    border: none;
`

function movieSearch() {
    const [inputValue, setInputValue] = useState("");

    const handleInputValue = (e) => {
        setInputValue(e.target.value)
    };

    const handleSubmitValue = (e) => {
        e.preventDefault();
        Router.push(`/movieSearch/${inputValue}`);
    };
    
    return (
        <SubPageLayout>
            <form
                onSubmit={handleSubmitValue}
                style={{ marginTop: '3rem', marginLeft: '2rem' }}
            >
                <SearchInput
                    placeholder="영화명을 입력해주세요."
                    onChange={handleInputValue}
                />
                <button type="submit" className="btn search-btn">
                    <IoSearchSharp style={{ color: 'white', fontSize: '1.5rem' }} />
                </button>
            </form>
        </SubPageLayout>
    );
};

export default movieSearch;