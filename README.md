# Book Review API Backend

This repository contains the backend code for a simple Book Review application that allows users to create, read, update, and delete book reviews. It uses **Node.js** with **Express** for the API and **MongoDB** as the database. This backend provides endpoints to manage reviews and integrates with MongoDB to store the data.

## Features
- **Create a Review**: Add new book reviews with details such as Book Name, Author, Rating (1-5), Review text, and Date.
- **Read Reviews**: Fetch all the reviews stored in the database.
- **Update a Review**: Modify an existing review by its ID.
- **Delete a Review**: Delete a review by its ID.

## Tech Stack
- **Node.js**: JavaScript runtime for building the server-side logic.
- **Express**: Web framework for Node.js to handle HTTP requests.
- **MongoDB**: NoSQL database to store reviews data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB to define schemas and interact with the database.
- **CORS**: Middleware for enabling Cross-Origin Resource Sharing (CORS) for frontend-backend communication.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js**: You can download it from [here](https://nodejs.org/).
- **MongoDB Atlas** account: To set up a cloud database or run MongoDB locally.
- **Postman** (optional): For testing the API endpoints.

### Clone the Repository

```bash
git clone https://github.com/your-username/book-review-backend.git
cd book-review-backend

```
## Install Dependencies
```bash
npm install`
```
## Set Up Environment Variables
Create a .env file in the root of the project and add the following line with your MongoDB connection string:

```bash
MONGO_URI=mongodb+srv://deshanvimukthi976:SZrNzGqnSjLunP87@cluster0.hotklnh.mongodb.net/Book_Review?retryWrites=true&w=majority
```
You can get the MongoDB connection string by creating a cluster on MongoDB Atlas.

## Run the Application
Start the server:

```bash
npm start
```
The application will run on http://localhost:5050.


## API Endpoints
## 1. Create a New Review
### Endpoint: POST /reviews/add_review

```bash
Request Body:
{
  "BookName": "Book Name",
  "BookAuthor": "Author Name",
  "Rating": 5,
  "Review": "This is a great book!",
  "Date": "2024-11-29T00:00:00Z"
}

Response:
{
  "_id": "review_id",
  "BookName": "Book Name",
  "BookAuthor": "Author Name",
  "Rating": 5,
  "Review": "This is a great book!",
  "Date": "2024-11-29T00:00:00Z"
}
```

## 2. Get All Reviews
Endpoint: GET /reviews

```bash
Response:
[
  {
    "_id": "review_id",
    "BookName": "Book Name",
    "BookAuthor": "Author Name",
    "Rating": 5,
    "Review": "This is a great book!",
    "Date": "2024-11-29T00:00:00Z"
  }
]
```

## 3. Update a Review by ID
Endpoint: PUT /reviews/update/:id

```bash
Request Body:
{
  "BookName": "Updated Book Name",
  "BookAuthor": "Updated Author",
  "Rating": 4,
  "Review": "This book was good, but could be better!",
  "Date": "2024-11-30T00:00:00Z"
}
Response:
{
  "_id": "review_id",
  "BookName": "Updated Book Name",
  "BookAuthor": "Updated Author",
  "Rating": 4,
  "Review": "This book was good, but could be better!",
  "Date": "2024-11-30T00:00:00Z"
}
```

## 4. Delete a Review by ID
Endpoint: DELETE /reviews/delete/:id
```bash
Response:
{
  "message": "Review deleted successfully"
}
```

# Database Schema
## Review Schema
* BookName: (String) Name of the book (required).
* BookAuthor: (String) Name of the author (required).
* Rating: (Number) Rating from 1 to 5 (required).
* Review: (String) Text of the review (required).
* Date: (Date) The date the review was created (defaults to the current date).

```bash
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    BookName: { type: String, required: true },
    BookAuthor: { type: String, required: true },
    Rating: { type: Number, required: true, min: 1, max: 5 },
    Review: { type: String, required: true },
    Date: { type: Date, default: Date.now },
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
```

# Folder Structure

- config
  - db.js                # MongoDB connection setup
- models
  - Reviews.js           # Mongoose schema and model for reviews
- node_modules
- .env                    # Environment variables for MongoDB URI
- App.js                  # Main server file with Express routes
- package.json            # Project dependencies and scripts
- README.md               # Documentation

# Contributing

Feel free to fork this repository and submit pull requests for any improvements or bug fixes!

# License
This project is licensed under the MIT License.



