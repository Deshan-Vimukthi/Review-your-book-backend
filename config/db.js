const mongoose = require('mongoose');


const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://deshanvimukthi976:SZrNzGqnSjLunP87@cluster0.hotklnh.mongodb.net/Book_Review?retryWrites=true&w=majority';

const connectDB = async () => {
    // connecting database.
    // this database has network access to any ip address.
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.error(err));
}

module.exports = connectDB;