const express = require('express'); // Import Express
const cors = require('cors');       // Import CORS
const bodyParser = require('body-parser'); // Import body-parser for JSON handling
const mongoose = require('mongoose'); // Import Mongoose
const Message = require('./models/Message'); // Import the Message model

const app = express(); // Initialize Express
const PORT = 5000;     // Define the port

// Middleware
app.use(cors());
app.use(bodyParser.json()); // To parse JSON body requests

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/contactMessages')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define the /submit endpoint
app.post('/submit', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const newMessage = new Message({ name, email, message });
        await newMessage.save(); // Save message to MongoDB
        res.status(200).json({ message: 'Message saved successfully!' });
    } catch (error) {
        console.error('Error saving message:', error);
        res.status(500).json({ message: 'Failed to save message' });
    }
});




// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


