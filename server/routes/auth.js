const express       = require('express');
const router        = express.Router();
const bcrypt        = require('bcrypt');
const uuid          = require('uuid');

const UserModel     = require('../models/user');

router.post('/login', async (req, res) => {
    
    const { username, password } = req.body

    if (!username || !password) {
        return res.status(406).json({
            error: true,
            message: 'Missing required login and password fields'
        })
    }

    const user = await UserModel.findOne({ username: username })
    if (user && bcrypt.compareSync(password, user.password)) {
        const timestampNow = Math.floor(Date.now() / 1000)
        let session_data = {
            id: user._id,
            username: user.username,
            api_token: user.api_token,
            iat: timestampNow,
            exp: timestampNow + 3600
        }
        session_data = Buffer.from(JSON.stringify(session_data)).toString('base64')
        res.status(200).json({
            error: false,
            userToken: session_data
        })
    } else {
        res.status(401).json({
            error: true,
            message: 'Invalid credentials'
        })
    }
})


router.get('/', async (req, res) => {

    const users = await UserModel.find()

    res.status(200).json({
        error: users.length > 0 ? false : true,
        users: {
            rows: users.length,
            results: users
        }
    })
})


router.post('/create', async (req, res) => {

    const { 
        username, password
    } = req.body

    if (!username || !password) {
        return res.status(406).json({
            error: true,
            message: 'Some parameters are required in order to continue creating a new user.',
            missingParams: 'username, password'
        })
    }

    const user = await UserModel.findOne({ username: username })
    if (!user) {
        UserModel.create({
            username: username,
            password: password ? bcrypt.hashSync(req.body.password, 10) : null,
            api_token: uuid.v4()
        }, (err, data) => {
            if (err) {
                res.status(500).json({
                    error: true,
                    message: {
                        error: err._message,
                        detail: err.message
                    }
                })
            } else {
                res.status(201).json({
                    error: false,
                    message: 'User has been created',
                    user: data
                })
            }
        })
    } else {
        res.status(406).json({
            error: true,
            message: 'This user has already been taken'
        })
    }
    
})



module.exports = router
