const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectToDB = require("./db");
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 8000;

// Connect to MongoDB
connectToDB();

// Middleware
app.use(express.json());
// CORS configuration
app.use(cors({
    origin: ['http://localhost:3000', 'https://667472c46a08c69e82eb4b3b--appforfood.netlify.app','https://food-delivery-app-z6t3.onrender.com'], // Array of allowed origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'], // Allow these headers
}));

// Routes
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Example routes - adjust as per your actual routes
app.use('/api/', require("./functions/createUser"));
app.use('/api/', require("./functions/DisplayData"));
app.use('/api/', require("./functions/OrderData"));

// Error handling middleware (if needed)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
