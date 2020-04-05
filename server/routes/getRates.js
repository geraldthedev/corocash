const axios= require('axios').default
const express = require('express')
const router = express.Router()


router.get('/', (req, res, next)=>{
        const getRates = async()=>{
                await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
               .then(res=>{res})
               .catch(err=>console.log(err))
                
            }
           getRates()
    
})



module.exports = router
