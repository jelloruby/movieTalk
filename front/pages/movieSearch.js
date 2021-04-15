import React, { useState } from 'react';
import styled from 'styled-components';

import AppLayout from '../components/layout/AppLayout';
import { IoSearchSharp } from "react-icons/io5";

import MovieInfoLink from '../components/MovieInfoLink'
import { getMovieFromTMDB } from './api/api';

const SearchInput = styled.input`
    background: rgb(255, 255, 255);
    width: 50%;
    height: 50px;
    margin: 0 auto;
    text-align: center;
    border-radius: 2rem;
`

function movieSearch() {
    const [inputValue, setInputValue] = useState("");
    const [movieList, setMovieList] = useState(false);
    const [IsEmptymovieList, setIsEmptyMovieList] = useState(false);

    const handleInputValue = (e) => {
        setInputValue(e.target.value)
    };

    const handleSubmitValue = (e) => {
        e.preventDefault();

        const fetchMovieList = async () => {
            const fetchData = await getMovieFromTMDB(inputValue);
            console.log(fetchData.results);
            if(!fetchData.results) {
                setMovieList(undefined);
                setIsEmptyMovieList(true);
            } else {
                setMovieList(fetchData.results);
                setIsEmptyMovieList(false);
            }
        }
        fetchMovieList();
    };
    
    return (
        <AppLayout>
            <form onSubmit={handleSubmitValue} style={{ textAlign: 'center' }}>
                <SearchInput placeholder="영화명을 입력해주세요." onChange={handleInputValue} />
                <button type="submit" className="btn search-btn">
                    <IoSearchSharp style={{ color: 'white', fontSize: '2rem' }} />
                </button>
            </form>
            <div>
                {
                    IsEmptymovieList && (
                        <div>검색하신 영화가 존재하지 않습니다.</div>
                    )
                }
                {
                    movieList && (
                        <>
                            <div style={{ display: 'flex', flexWrap: 'wrap', width: '80%', margin: '0 auto', marginTop: '2rem' }}>
                            {
                                movieList.map(movieItem => (
                                    <div key={movieItem.id} style={{ width: '210px', margin: '0 1rem' }}>
                                        <MovieInfoLink
                                            id={movieItem.id}
                                            src={movieItem.poster_path}
                                            koreanTitle={movieItem.title}
                                        />
                                    </div>
                                ))
                            }
                            </div>
                        </>
                    )
                }
            </div>
        </AppLayout>
    );
};

export default movieSearch;