const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()

const priceSchema = new mongoose.Schema({
    update:'integer',
    currency: 'string',
    value: 'integer'
});
const Prices = mongoose.model('Prices', priceSchema);


const rate = new Prices({
    update: res.data.timestamp,
    currency: Object.keys(res.data.rates),
    value: Object.values(res.data.rates)
})



rate.save((err)=>{
    if (err) return handleError(err)
});