import axios from "axios";

export const getpopularMovieFromTMDB = () => axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=2b2e61361a6d20a07e728e56fc296333&&sort_by=popularity.desc&language=ko&page=1®ion=KR`)
    .then((res) => {
        return res.data
    })

export const getMovieByGenreFromTMDB = (genres) => axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=2b2e61361a6d20a07e728e56fc296333&with_genres=${genres}&language=ko&page=1®ion=KR`)
    .then((res) => {
        return res.data
    })

export const getMovieFromTMDB = (movieName) => axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2b2e61361a6d20a07e728e56fc296333&query=${movieName}&language=ko&page=1®ion=KR`)
.then((res) => {
    return res.data
})

export const getMovieDetailFromTMDB = (movieId) => axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=2b2e61361a6d20a07e728e56fc296333&language=ko&page=1®ion=KR`)
    .then((res) => {
        return res.data
    })

export const getActorsFromTMDB = (movieId) => axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=2b2e61361a6d20a07e728e56fc296333&language=ko&page=1®ion=KR`)
    .then((res) => {
        return res.data
    })
    