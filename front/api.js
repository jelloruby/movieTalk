
import axios from "axios";

export const getMovieList = () => axios.get('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=5622df58bf74fc555a60bcb2baf58da6&targetDt=20210326')
    .then((res) => {
        return res.data
    })

export const getMovieFromKMDB = (movieName) => axios.get(`http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&title=${movieName}&ServiceKey=QXYS65CA4DKL68FJYGTF`)
    .then((res) => {
        return res.data
    })

export const getMovieInfoFromKMDB = (movieSeq, movieId) => axios.get(`http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&movieSeq=${movieSeq}&movieId=${movieId}&ServiceKey=QXYS65CA4DKL68FJYGTF`)
    .then((res) => {
        return res.data
    })