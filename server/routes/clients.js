const express       = require('express');
const router        = express.Router();

const ClientModel   = require('../models/clients');

router.get('/', async (req, res) => {
    const clients = await ClientModel.find();
    res.status(200).json({
        error: clients.length > 0 ? false : true,
        clients: {
            rows: clients.length,
            results: clients
        }
    })
})

router.post('/create', async (req, res) => {
    const {
        names, lastNames, streetAddress,
        email, extra_info
    } = req.body
    
    if (!names || !lastNames || !streetAddress || !email) {
        return res.status(406).json({
            error: true,
            message: 'Some parameters are required in order to create a new client.',
            missingParams: 'names, lastNames, streetAddress, email'
        })
    }

    const client = await ClientModel.findOne({ email: email })
    if (!client) {
        ClientModel.create({
            names: names,
            lastNames: lastNames,
            streetAddress: streetAddress,
            email: email,
            extraInfo: extra_info || null
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
                    message: 'Client has been created',
                    client: data
                })
            }
        })
    } else {
        res.status(406).json({
            error: true,
            message: 'A client has already been exist with this email'
        })
    }

})

module.exports = router
