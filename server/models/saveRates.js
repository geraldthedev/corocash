const mongoose = require('mongoose')
const priceSchema = new mongoose.Schema({
    currency: 'string',
    value: 'integer'
});
const Prices = mongoose.model('Prices', priceSchema);

const rate = new Prices({
    currency: Object.keys(res.data.rates),
    value: Object.values(res.data.rates)
})


rate.save((err)=>{
    if (err) return handleError(err)
});