import React, { useState } from 'react';
import AppLayout from '../components/AppLayout';

import MovieInfoLink from '../components/MovieInfoLink'
import { getMovieFromKMDB } from '../api';

function movieSearch() {
    const [inputValue, setInputValue] = useState([]);
    const [movieList, setMovieList] = useState([]);

    const handleInputValue = (e) => {
        setInputValue(e.target.value)
    };

    const handleSubmitValue = (e) => {
        e.preventDefault();
        const fetchMovieList = async () => {
            const fetchData = await getMovieFromKMDB(inputValue);
            setMovieList(fetchData.Data[0].Result);
            console.log(fetchData.Data[0].Result);
        }
        fetchMovieList();
    };

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
                <input placeholder="영화명을 입력해주세요." onChange={handleInputValue} style={{ textAlign: 'center', border: '1px solid gray', padding: '.5rem .7rem', borderRadius: '5px' }} />
                <button type="submit">검색</button>
            </form>
            <div>
                {
                    !movieList && <div>검색하신 영화가 존재하지 않습니다.</div>
                }
                {
                    movieList && movieList.map(movieItem => (
                        <div key={movieItem.movieSeq}>
                            <MovieInfoLink
                                movieSeq={movieItem.movieSeq}
                                src={splitPoster(movieItem.posters)}
                                movieId={movieItem.movieId}
                            />
                            <div>
                                <div>{replaceTitle(movieItem.title)}</div>
                                <button>리뷰쓰기</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </AppLayout>
    );
};

export default movieSearch;
