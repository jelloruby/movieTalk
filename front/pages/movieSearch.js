import React, { useState, useEffect } from 'react';
import AppLayout from '../components/AppLayout';
import Router from 'next/router';
import { withRouter } from 'next/router';

import MovieInfoLink from '../components/MovieInfoLink'
import { getMovieFromKMDB } from '../api';

function movieSearch({ router }) {
    const [inputValue, setInputValue] = useState("");
    const [movieList, setMovieList] = useState(false);
    const [IsEmptymovieList, setIsEmptyMovieList] = useState(false);

    const handleInputValue = (e) => {
        setInputValue(e.target.value)
    };

    const handleSubmitValue = (e) => {
        e.preventDefault();
        Router.push({
            pathname: "/movieSearch",
            query: { value: inputValue }
        });
        const fetchMovieList = async () => {
            const fetchData = await getMovieFromKMDB(inputValue);
            if(!fetchData.Data[0].Result) {
                setMovieList(undefined);
                setIsEmptyMovieList(true);
            } else {
                setMovieList(fetchData.Data[0].Result);
                setIsEmptyMovieList(false);
            }
        }
        fetchMovieList();
    };

    useEffect(() => {
        const fetchMovieList = async () => {
            const fetchData = await getMovieFromKMDB(router.query.value);
            if(!fetchData.Data[0].Result) {
                setMovieList(undefined);
                setIsEmptyMovieList(true);
            } else {
                setMovieList(fetchData.Data[0].Result);
                setIsEmptyMovieList(false);
            }
        }
        fetchMovieList();
    }, [])
    
    const replaceTitle = (title) => {
        return title.replace(/!HS|!HE/g, "");
    };

    const splitPoster = (posters) => {
        if(!posters) {
            posters = "https://res.cloudinary.com/dvmqbovxh/image/upload/v1616866172/noposter_pcwcby.png";
            return posters;
        } else {
            return posters.split("|")[0];
        }
    };
    
    return (
        <AppLayout>
            <form onSubmit={handleSubmitValue} style={{ textAlign: 'center' }}>
                <input placeholder="영화명을 입력해주세요." onChange={handleInputValue} className="btn search-btn" />
                <button type="submit">검색</button>
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
                            <select>
                                <option>정확도</option>
                            </select>
                            <div>
                            {
                                movieList.map(movieItem => (
                                    <div key={movieItem.movieSeq}>
                                        <MovieInfoLink
                                            movieSeq={movieItem.movieSeq}
                                            src={splitPoster(movieItem.posters)}
                                            movieId={movieItem.movieId}
                                        />
                                        <div>{replaceTitle(movieItem.title)}</div>
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

export default withRouter(movieSearch);