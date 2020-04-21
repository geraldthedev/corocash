const mongoose = require('mongoose')
const express = require('express')
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
const prices = mongoose.model('rateData', priceSchema);



   

exports.prices = prices;

