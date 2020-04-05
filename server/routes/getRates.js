const axios= require('axios').default
const express = require('express')
const router = express.Router()


router.get('/', (req, res, next)=>{
     getRates = async()=>{
                await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
     .then(data=>res.send(data.data))
               .catch(err=>console.log(err))
               
               next()
                
            }

           getRates()
    
})



module.exports = router
