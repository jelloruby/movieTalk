const express = require('express');
const router = express.Router();

const { Review } = require('../models/Review');

//============== Review ==============

router.post('/', async (req, res, next) => {
    try {
        const review = new Review(req.body);

        await review.save();
        
        return res.status(200).json({
            success: true
        });
    } catch (err) {
        console.log(err);
        next(err);
    };
});

router.post('/all', async (req, res, next) => {
    try {
        await Review.find().limit(5)({}, (err, review) => {
            return res.status(200).json(review);
        })
    } catch (err) {
        console.log(err);
        next(err);
    };
});


module.exports = router;