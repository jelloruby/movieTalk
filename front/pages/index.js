import React, { useState, useEffect } from 'react'
import Router from 'next/router';

import AppLayout from '../components/AppLayout'

import { getMovieGenreFromKMDB } from '../api';

function Home() {
    const [inputValue, setInputValue] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const fetchData = await getMovieGenreFromKMDB("코메디");
            console.log(fetchData);
        }
        fetch()
    }, [])

    const handleInputValue = (e) => {
        setInputValue(e.target.value)
    };

    const handleSubmitValue = (e) => {
        e.preventDefault();
        Router.push({
            pathname: "/movieSearch",
            query: { value: inputValue }
        });
    };

    return (
        <AppLayout>
            <div style={{ height: '600px', background: 'gray' }}>
                <h2 style={{ textAlign: 'center' }}>MovieTalk</h2>
                <form onSubmit={handleSubmitValue} style={{ textAlign: 'center' }}>
                    <input placeholder="영화명을 입력해주세요." onChange={handleInputValue} className="btn search-btn" />
                    <button type="submit">검색</button>
                </form>
            </div>
            <div>
                <div>
                    <div>액션 | Action</div>
                    <div></div>
                </div>
                <div>
                    <div>드라마 | Drama</div>
                </div>
                <div>
                    <div>미스터리 | Mistery</div>
                </div>
                <div>
                    <div>코미디 | Comedy</div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Home;
