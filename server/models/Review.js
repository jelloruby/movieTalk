const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    iamge: {
        type: String,
    },
    name: {
        type: String,
    },
    rating: {
        type: Number,
    },
    text: {
        type: String,
    },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = { Review };