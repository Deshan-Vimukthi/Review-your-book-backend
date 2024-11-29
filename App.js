const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Review = require('./models/Reviews');
const connectDB = require('./config/db');

const app = express();
const PORT = 5050;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
connectDB().then();
// CREATE a new review
app.post('/reviews/add_review', async (req, res) => {
    try {
        const review = new Review(req.body);
        const savedReview = await review.save();
        res.status(201).json(savedReview);
    } catch (error) {
        res.status(400).json({ error: error.message });
        console.log(error.message);
    }
});

// READ all reviews
app.get('/reviews', async (req, res) => {
    try {
        const reviews = await Review.find();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// UPDATE a review by ID
app.put('/reviews/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedReview = await Review.findByIdAndUpdate(id, req.body, {
            new: true, // Return the updated document
            runValidators: true, // Validate before updating
        });
        if (!updatedReview) {
            return res.status(404).json({ error: 'Review not found' });
        }
        res.status(200).json(updatedReview);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// DELETE a review by ID
app.delete('/reviews/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedReview = await Review.findByIdAndDelete(id);
        if (!deletedReview) {
            return res.status(404).json({ error: 'Review not found' });
        }
        res.status(200).json({ message: 'Review deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
