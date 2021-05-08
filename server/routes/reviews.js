const express = require('express');
const router = express.Router();

const { Review } = require('../models/Review');

//============== Reviews ==============

router.post('/', async (req, res, next) => {
    try {  
        if(req.body.lastId) { // 스크롤해서 불러올 때
            const reviews = await Review.find({ _id : { $lt : req.body.lastId }}).limit(5).sort({ createdAt : 'desc' })
            return res.status(200).json(reviews);
        } else {              // 처음 렌더링 될 때
            const reviews = await Review.find({}).limit(5).sort({ createdAt : 'desc' })
            return res.status(200).json(reviews);
        }
    } catch (err) {
        console.log(err);
        next(err);
    };
});


module.exports = router;