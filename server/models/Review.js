const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    likers: {
        type: Array,
    },
    image: {
        type: String,
    },
    title: {
        type: String,
    },
    rating: {
        type: Number,
    },
    text: {
        type: String,
    },
    movieId: {
        type: Number,
    }
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

module.exports = { Review };