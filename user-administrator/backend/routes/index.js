    
const express = require('express');
const router = express.Router();    
const userController = require('../controllers/userController'); // Import the user controller


// Define your routes here

module.exports = () => {
    const { getUsers, createUser, getUserById, getUserByEmail,updateUserByEmail } = userController

    console.log('Initializing routes...'); // Log when routes are being initialized
    router.get('/', (req, res) => {
        res.send('Welcome to the User Administrator API');
    });
    // Add more routes as needed
    router.get('/about', (req, res) => {
        res.send('This is the about page');
    }); 
    router.get('/all-users',getUsers); // Get all users

    router.post('/create-user', createUser); // Create a new user

    router.get('/getUser/:id',getUserById); // Get a user by ID

    router.get('/getUserByEmail/:email', getUserByEmail); // Get user by email
    
    router.put('/updateUser/:email',updateUserByEmail);//Updare user

    
    return router;
}



