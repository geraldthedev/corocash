const axios= require('axios').default
const express = require('express')
const router = express.Router()


router.get('/', (req, res, next)=>{
        const getRates = async()=>{
                await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
               .then(res=> {return monies = res.data})
               .catch(err=>console.log(err))
                console.log(monies)
            }
           getRates()
    
})



module.exports = router
