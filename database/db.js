const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async (retries = 5, delay = 5000) => {
  try {
    console.log('Attempting to connect to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Adjust the timeout as needed
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    if (retries === 0) {
      process.exit(1);
    } else {
      console.log(`Retrying to connect in ${delay / 1000} seconds...`);
      setTimeout(() => connectDB(retries - 1, delay), delay);
    }
  }
};

module.exports = connectDB;