const mongoose = require('mongoose');

// The schema for book reviews
const reviewSchema = new mongoose.Schema({
    BookName: { type: String, required: true },
    BookAuthor: { type: String, required: true },
    Rating: { type: Number, required: true, min: 1, max: 5 },
    Ranking: { type: String, required: true },
    Date: { type: Date, default: Date.now},
});

// Export the model
const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
