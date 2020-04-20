const mongoose = require('mongoose')
const express = require('express')
const rateRoute = express.Router()
const dbconnect = require('../middleware/dbconnect')

const priceSchema = new mongoose.Schema({
    "update": {
        type: Number
    },
    "currency": {
        type: String
    },
    "value": {
        type: Number
    }
});
const Prices = mongoose.model('Prices', priceSchema);


rateRoute.get('/',(req, res, next)=>{
    const rate = new Prices({
        "update": res.data.timestamp,
        "currency": Object.keys(res.data.rates),
        "value": Object.values(res.data.rates)
    })


    dbconnect.Rates.rateData.insertOne(
        rate.save((err)=>{
            if (err) return handleError(err)
        })
    );
    next()
})

module.exports = rateRoute;
