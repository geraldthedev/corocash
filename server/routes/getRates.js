const axios= require('axios').default
const express = require('express')
const router = express.Router()
const prices = require('../models/saveRates')
require('dotenv').config()


router.get('/', (req, res, next)=>{
     getRates = async()=>{
                await axios.get(`http://data.fixer.io/api/latest?access_key=${process.env.API_KEY}`)
     .then(data=>res.send(data.data))
               .catch(err=>console.log(err))
               next()
        
            }

           getRates()
    
})

router.post('/',(req, res, next)=>{
   const rate = new prices({
      "update": res.data.timestamp,
      "currency": Object.keys(res.data.rates),
      "value": Object.values(res.data.rates)
  })
   rate.save()
   .then(saved=>{
      res.status(200).send("It worked")

      console.log(saved)
   })
   .catch(err =>{
      res.status().send(err)
   })
  next()
})


module.exports = router
