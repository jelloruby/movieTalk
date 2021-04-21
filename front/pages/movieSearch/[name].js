import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Router, { useRouter } from "next/router";
import { IoSearchSharp } from "react-icons/io5";

import SubPageLayout from '../../components/layout/SubPageLayout';
import MovieInfoLink from '../../components/MovieInfoLink'

import { getMovieFromTMDB } from '../api/api';

const SearchInput = styled.input`
    width: 250px;
    height: 50px;
    margin: 0 auto;
    text-align: center;
    border-radius: 2rem;
    border: none;
`

const MovieCardWrap = styled.div`
    margin-left: 5%;
    position: relative;
    top: 8rem;
    display: flex;
    flex-wrap: wrap;
`

function MovieSearchPage(props) {
    const router = useRouter();
    const { name } = router.query;

    const { movieDetail } = props;

    const [inputValue, setInputValue] = useState("");

    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmitValue = (e) => {
        e.preventDefault();
        Router.push(`/movieSearch/${inputValue}`);
    };

    const handleLoadMoreMovie = async () => {
        // const moreMovie = await getMovieFromTMDB(name, `${CurrentPage + 1}`);
    };

    return (
        <SubPageLayout>
            <div style={{ position: 'relative' }}>
                <form
                    onSubmit={handleSubmitValue}
                    style={{ textAlign: 'center', position: 'absolute', top: '2.5rem', left: '2rem' }}
                >
                    <SearchInput
                        placeholder="영화명을 입력해주세요."
                        onChange={handleInputValue}
                    />
                    <button type="submit" className="btn search-btn">
                        <IoSearchSharp style={{ color: 'white', fontSize: '1.5rem' }} />
                    </button>
                </form>
                {
                    !movieDetail.results[0] && (
                        <div>검색하신 영화가 존재하지 않습니다.</div>
                    )
                }
                {
                    movieDetail.results && (
                        <MovieCardWrap>
                        {
                            movieDetail.results.map(movieItem => (
                                <div key={movieItem.id} style={{ width: '210px', margin: '0 1rem' }}>
                                    <MovieInfoLink
                                        id={movieItem.id}
                                        src={movieItem.poster_path}
                                        koreanTitle={movieItem.title}
                                    />
                                </div>
                            ))
                        }
                        </MovieCardWrap>
                    )
                }
                <button onClick={handleLoadMoreMovie}>Load More</button>
            </div>
        </SubPageLayout>
    )
};

export async function getServerSideProps({ query }) {
    const movieDetail = await getMovieFromTMDB(encodeURI(query.name), 1);
    
    return {
        props: {
            movieDetail: movieDetail,
        },
    }
};

export default MovieSearchPage;
