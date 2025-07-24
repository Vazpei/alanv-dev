const express = require('express');
const routes = require('./routes'); // Assuming you have routes defined in a separate file
const mongoose = require('mongoose'); // If you plan to use mongoose for database operations
const app = express();
const cors = require('cors'); // Importing CORS middleware
const PORT = process.env.PORT || 9898;

mongoose.Promise = global.Promise; // Use global Promise for mongoose
mongoose.connect('mongodb://localhost:27017/users-administrator')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    }); 

app.use(cors()); // Use CORS middleware to allow cross-origin requests
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

console.log('Loading routes...'); // Log when routes are being loaded
app.use('/',routes()); // Use the routes defined in your routes file
console.log('Routes loaded successfully'); // Log when routes are successfully loaded

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




