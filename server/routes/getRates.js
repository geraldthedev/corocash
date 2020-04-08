const axios= require('axios').default
const express = require('express')
const router = express.Router()
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



module.exports = router
