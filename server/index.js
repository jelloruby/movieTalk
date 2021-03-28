const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false })); 

// app.use('/naver', require('./routes/naver'));
app.get(`/naver/getNaverMovie`, async (req, res) => {
    let query = req.query.query;

    try {
        let movieRes = await axios.get('https://openapi.naver.com/v1/search/movie.json', {
            params: {
                query: query
            },
            headers: {
                'X-Naver-Client-Id': 'OOvHZKrxR2Gm6N5bQyyj',
                'X-Naver-Client-Secret': 'OtTnTIIjaO',
                'Access-Control-Allow-Origin': '*'
            },
        });
        return res.json(movieRes.data);
    }
    catch (e) {
        return res.json({
            status: 400,
            message: e
    });
    }
});


const port = 5000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});