import React from 'react'
import Head from 'next/head'

import AppLayout from '../components/AppLayout'
import MovieInfo from '../json/movieInfo.json'

function ticketing() {
    const { store, movieInfomation } = MovieInfo.movie

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>예매</title>
            </Head>
            <AppLayout>
            <div>
                <div className="movie-theaters" style={{ border: '1px solid red' }}>
                    <h2>지역 및 상영관</h2>
                    <ul>
                    {
                        movieInfomation.map(item => (
                            <li key={item.id} style={{ display: 'inline-block' }}>
                                <div>{item.name}</div>
                            </li>
                        ))
                    }
                    </ul>
                </div>
                <div className="movie" style={{ border: '1px solid red' }}>
                    <h2>영화</h2>
                    <div>
                        {
                            store.map(item => (
                                <div key={item.id}>{item.지역}</div>
                            ))
                        }
                    </div>
                </div>
                <div className="time" style={{ border: '1px solid red' }}>
                    <h2>상영시간, 날짜</h2>
                </div>
            </div>
        </AppLayout>
        </>

    )
}

export default ticketing
