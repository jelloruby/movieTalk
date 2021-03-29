import React from 'react'
import Nav from '../components/Nav'

function MovieInfoLayOut({ children }) {
    return (
        <div>
            <Nav />
            { children }
        </div>
    )
};

export default MovieInfoLayOut
