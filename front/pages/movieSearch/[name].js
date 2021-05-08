import React, { useState } from 'react';
import styled from 'styled-components';
import Router, { useRouter } from "next/router";
import { IoSearchSharp } from "react-icons/io5";

import SubPageLayout from '../../components/Layout/SubPageLayout';
import MovieInfoLink from '../../components/MovieInfoLink'
import SearchForm from '../../components/Form/SearchForm';

import { getMovieFromTMDB } from '../api/api';

const MovieCardWrap = styled.div`
    margin-left: 5%;
    position: relative;
    top: 128px;
    display: flex;
    flex-wrap: wrap;
`

const MoiveSearchWrap = styled.div`
    position: absolute;
    top: 48px;
    left: 60%;
    transform: translate(-60%, 0);

    @media screen and (max-width: 900px) {
        left: 50%;
        transform: translate(-50%, 0);
    }
`

function MovieSearchPage(props) {
    const router = useRouter();
    const { name } = router.query;
    const { movieDetail } = props;

    const [movieList, setMovieList] = useState([]);
    const [CurrentPage, setCurrentPage] = useState(1);
    
    const handleLoadMoreMovie = async () => {
        const movieFromTMDB = await getMovieFromTMDB(name, `${CurrentPage + 1}`);
        const result = movieList.concat(movieFromTMDB.results)
        setMovieList(result);
        setCurrentPage(CurrentPage + 1);
    };

    return (
        <SubPageLayout>
            <div>
                <MoiveSearchWrap>
                    <SearchForm />
                </MoiveSearchWrap>
                {/* {
                    !movieList.results[0] && (
                        <div>검색하신 영화가 존재하지 않습니다.</div>
                    )
                } */}
                {
                    movieDetail.results && (
                        <>
                            <MovieCardWrap>
                            {
                                movieDetail.results.map(movieItem => (
                                    <div key={movieItem.id} style={{ width: '210px', margin: '0 16px' }}>
                                        <MovieInfoLink
                                            id={movieItem.id}
                                            src={movieItem.poster_path}
                                            koreanTitle={movieItem.title}
                                        />
                                    </div>
                                ))
                            }
                            </MovieCardWrap>
                            <button onClick={handleLoadMoreMovie}>Load More</button>
                        </>

                    )
                }
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
