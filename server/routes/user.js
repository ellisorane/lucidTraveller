require('dotenv').config()
const express = require('express')
const router = express.Router()
// import database connection
// const db = require('../db')
// For password hashing and salt
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const multer = require('multer');
const upload = multer();
const mongoose = require('mongoose')


const User = require('../models/User')
const { authenticate } = require('../middleware')


// Register a new user
router.post('/register', async (req, res) => {
    try {    
        const { username, email, password } = JSON.parse( req.body.form );

        const user = await User.create({
            username,
            email,
            password
        })
        // currentUser = user
        res.json( user )
        
    } catch (error) {
        res.json( error );

    }
})

// Get the current user
router.get('/current', authenticate, async (req, res) => {
    try {
        // res.json(currentUser)
        console.log("Current user: ", req.user)
        res.json(req.user)
    } catch (error) {
        console.error(error)
        res.json(error)
    }
})

// Login
router.post('/login', async (req, res) => {
    try {
        // Find user in database with username or email
        let user = await User.findOne({ username: req.body.usernameOrEmail });
        if (!user) {
            user = await User.findOne({ email: req.body.usernameOrEmail });
        }

        // User not found
        if(user === null) {
            // Production env
            // return res.status(404).send('Incorrect credentials')
            // Dev environment
            return res.status(404).send('User not found')
        }

        // Compare password of user in database and the user trying to login
        if(await bcrypt.compare(req.body.password, user.password)) {
            // Create JWT token
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' })

            // Password match send token and user to client and set to current user
            res.json({
                token: token,
                user: user
            })

            currentUser = user
            console.log(currentUser)
        } else {
            // Production env
            // return res.status(404).send('Incorrect credentials')
            // Dev environment
            return res.status(404).send('Wrong password')
        }

    } catch (error) {
        console.error(error)
        res.json(error)
    }
})

// Update user
router.put('/update', async (req, res) => {
    const newData = req.body
    try {
        // Find and update user by _id
        const user = await User.findByIdAndUpdate(currentUser._id, newData, { new: true });

        // User not found
        if(user === null) {
            return res.status(404).send('User not found');
        }

        res.json(user)
        
    } catch (error) {
        console.error(error)
        res.json(error)
    }
})

// Update user password
router.put('/password', async (req, res) => {
    const currentPassword = req.body.currentPassword
    const newPassword = req.body.newPassword
    try {
        // Find user in database with currentUser _id
        const user = await User.findById(currentUser._id).exec();
        
        // If currentPassword matches password in database then update currentPassword with newPassword
        if(await bcrypt.compare(currentPassword, user.password)) {
            const updatedUser = await User.findByIdAndUpdate(currentUser.id, { password: newPassword }, { new: true })
            console.log("Password updated")
            res.json(updatedUser)
        } else {
            res.status(404).send('Incorrect credentials')
        }
        
    } catch (error) {
        res.send(error)
    }
})


// Delete a user
router.delete('/delete', async(req, res) => {
    try {
        const user = await User.findByIdAndDelete(currentUser.id)
        res.send('User deleted successfully.')
    } catch (error) {
        res.send(error)
    }
})


module.exports = router