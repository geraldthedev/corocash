const axios= require('axios').default



module.exports= getRates = async(req, res, next)=>{
        await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(res=> res.data.bpi)
        .catch(err=>console.log(err))
        next()
        
       }