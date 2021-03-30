
import axios from "axios";

export const getpopularMovieFromTMDB = () => axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=2b2e61361a6d20a07e728e56fc296333&&sort_by=popularity.desc&language=ko&page=1®ion=KR`)
    .then((res) => {
        return res.data
    })

export const getMovieByGenreFromTMDB = (genres) => axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=2b2e61361a6d20a07e728e56fc296333&with_genres=${genres}&language=ko&page=1®ion=KR`)
    .then((res) => {
        return res.data
    })





export const getMovieFromKMDB = (movieName) => axios.get(`http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&sort=prodYear,1&listCount=500&title=${movieName}&ServiceKey=QXYS65CA4DKL68FJYGTF`)
    .then((res) => {
        return res.data
    })

export const getMovieInfoFromKMDB = (movieSeq, movieId) => axios.get(`http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&movieSeq=${movieSeq}&movieId=${movieId}&ServiceKey=QXYS65CA4DKL68FJYGTF`)
    .then((res) => {
        return res.data
    })

export const getMovieGenreFromKMDB = (movieName) => axios.get(`http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&sort=prodYear,1&listCount=20&genre=${movieName}&ServiceKey=QXYS65CA4DKL68FJYGTF`)
    .then((res) => {
        return res.data
    })