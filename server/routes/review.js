const express = require('express');
const router = express.Router();

const { Review } = require('../models/Review');
const { isLoggedIn } = require('../routes/middleware');

//============== Review ==============

// add review
router.post('/', isLoggedIn, async (req, res, next) => {    
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

// modify review
router.post('/edit', isLoggedIn,  async (req, res, next) => {
    console.log(req.body.writerId);
    try {
        await Review.findOneAndUpdate(
            { writer : req.body.writerId, movieId: req.body.movieId },
            { $set : { "text" : req.body.text }},
            { new : true },
            (err, result) => {
                if (err) return res.status(401).send(err);
                res.status(200).send("리뷰 수정에 성공하였습니다.");
            }
        );
    } catch (err) {
        console.log(err);
        next(err);
    };
});

// like review
router.post('/like', isLoggedIn, async (req, res, next) => {    
    console.log("LIKE");

    try {
        await Review.findOneAndUpdate(
            { _id : req.body.reviewId },
            { $addToSet : { "likers" : req.body.liker }},
            { new : true },
            (err, likeResult) => {
                if (err) return res.status(401).send(err);
                res.status(200).json({ reviewId: req.body.reviewId, userId: req.body.liker });
            }
        );
    } catch (err) {
        console.log(err);
        next(err);
    };
});

// dislike review
router.post('/disLike', isLoggedIn, async (req, res, next) => {
    console.log("DISLIKE", req.body.disLiker);

    try {
        await Review.findOneAndUpdate(
            { _id : req.body.reviewId },
            { $pull : { "likers" : req.body.disLiker }},
            { new : true },
            (err, dislikeResult) => {
                if (err) return res.status(401).send(err);
                res.status(200).json({ reviewId: req.body.reviewId, userId: req.body.disLiker });
            }
        );
    } catch (err) {
        console.log(err);
        next(err);
    };
});

// load my reviews
router.get('/:userId', isLoggedIn, async (req, res, next) => {
    try {
        await Review.find()
            .populate('writer')
            .find({ writer: req.params.userId })
            .limit(4)
            .sort({ createdAt : 'desc' })
            .exec((err, reviews) => {
                return res.status(200).json(reviews)
            })
    } catch (err) {
        console.log(err);
        next(err);
    };
});

// load my reviews by scroll
router.post('/:userId', isLoggedIn, async (req, res, next) => {
    try {  
        await Review.find()
            .populate('writer')
            .find({ writer: req.params.userId })
            .find({ _id : { $lt : req.body.lastId }})
            .limit(4)
            .sort({ createdAt : 'desc' })
            .exec((err, reviews) => {
                return res.status(200).json(reviews)
            })
    } catch (err) {
        console.log(err);
        next(err);
    };
});

// load one review per page
router.get('/:writerId/:movieId', async (req, res, next) => {
    try {
        await Review.find({ writer: req.params.writerId, movieId: req.params.movieId }, (err, review) => {
            if (err) return res.status(401).send(err);
            res.status(200).json(review);
        })
    } catch (err) {
        console.log(err);
        next(err);
    };
});

module.exports = router;