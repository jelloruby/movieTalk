const express = require("express");
const router = express.Router();
const axios = require("axios")

//============== Naver ==============
/*
router.get(`/getNaverMovie`, async (req, res) => {
    let query = req.query.query;
    res.send(query)

    try {
        let movieRes = await axios.get('https://openapi.naver.com/v1/search/movie.json', {
            headers: {
                'X-Naver-Client-Id': 'OOvHZKrxR2Gm6N5bQyyj',
                'X-Naver-Client-Secret': 'OtTnTIIjaO',
                // 'Access-Control-Allow-Origin': '*'
            },
            params: {
                query: query
            }
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
*/
module.exports = router;