import React, { useState, useEffect } from 'react'

import AppLayout from '../components/AppLayout'
import MovieSlider from '../components/MovieSlider'

import MovieInfoData from '../json/movieInfo.json'

import { getMovieList, getMovieFromKMDB } from '../api'

function Home() {
    const { movieInfomation } = MovieInfoData.movie
    const [boxofficeMovieNames, setboxofficeMovieNames] = useState([])

    useEffect(() => {
        const fetchMovieList = async () => {
            const boxofficeList = await getMovieList();
            setboxofficeMovieNames(movieNameArray(boxofficeList.boxOfficeResult.dailyBoxOfficeList));
            const result2 = await getMovieFromKMDB("미나리");
            console.log(result2);
        }
        fetchMovieList();
    }, [])

    const movieNameArray = (list) => {
        var arr = [];
        
        for(let i=0; i<list.length; i++) {
            arr.push(list[i].movieNm)
        }
        return arr;
    }

    return (
        <AppLayout>
            <h2 style={{ textAlign: 'center' }}>박스오피스</h2>
            <MovieSlider movieInfomation={movieInfomation} />
        </AppLayout>
    )
}

export default Home;
