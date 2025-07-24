
const express = require('express');
const router = express.Router();    
const userController = require('../controllers/userController'); // Import the user controller


// Define your routes here

module.exports = () => {
    console.log('Initializing routes...'); // Log when routes are being initialized
    router.get('/', (req, res) => {
        res.send('Welcome to the User Administrator API');
    });
    // Add more routes as needed
    router.get('/about', (req, res) => {
        res.send('This is the about page');
    }); 
    router.get('/all-users',userController.getUsers); // Get all users

    router.post('/create-user', userController.createUser); // Create a new user

    router.get('/getUser/:id',userController.getUserById); // Get a user by ID

    

    return router;
}



