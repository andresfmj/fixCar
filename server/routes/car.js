const express       = require('express');
const router        = express.Router();

const mongoose      = require('mongoose');

const ClientModel   = require('../models/clients');


router.post('/create', async (req, res) => {
    const {
        emailclient, brand, model, extra_info
    } = req.body

    if (!emailclient || !brand || !model) {
        return res.status(406).json({
            error: true,
            message: 'Some parameters are required to register a car for the client',
            missingParams: 'emailclient, brand, model'
        })
    }

    const client = await ClientModel.findOne({ email: emailclient })
    if (client) {
        client.car.push({
            brand: brand,
            model: model,
            extraInfo: extra_info || null
        })
        const clientUpdated = await client.save();
        res.status(201).json({
            error: false,
            message: 'A new car has been added to the client',
            client: clientUpdated
        })
    } else {
        res.status(404).json({
            error: true,
            message: 'Client not found'
        })
    }

})


router.post('/fixes/create', async (req, res) => {
    const {
        client_id, car_id, observ, extra_info
    } = req.body

    if (!car_id || !client_id || !observ) {
        return res.status(406).json({
            error: true,
            message: 'Some parameters are required to register a car for the client',
            missingParams: 'id, brand, model'
        })
    }

    const query = [
        {
            "$match" : {
                "_id": mongoose.Types.ObjectId(client_id)
            }
        },
        {
            "$project" : {
                "names" : 1, "lastNames" : 1,
                "car" : {
                    "$first": {
                        "$filter" : {
                            "input" : "$car",
                            "as" : "car",
                            "cond" : {
                                "$eq": [ "$$car._id", mongoose.Types.ObjectId(car_id) ]
                            }
                        }
                    }
                }
            }
        }
    ]

    const carCLient = await ClientModel.aggregate(query)

    if (carCLient && carCLient.length > 0 && carCLient[0].car) {
        ClientModel.update(
            { "_id": mongoose.Types.ObjectId(client_id), "car._id": mongoose.Types.ObjectId(car_id) },
            {
                $push: {
                    "car.$.fixes": {
                        "observ": observ,
                        "extraInfo": extra_info || null,
                        "created_at": Date.now(),
                        "updated_at": Date.now()
                    }
                }
            },
            (err, numAffected) => {
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
                        message: 'A new fix has been added to the selected car',
                        numAffected: numAffected
                    })
                }
            }
        )
    } else {
        res.status(404).json({
            error: true,
            message: 'Client/Car not found'
        })
    }

    

})

module.exports = router;
