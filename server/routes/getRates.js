const axios= require('axios').default



const getRates = async()=>{
        await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(res=>{return res.data.bpi})
        .catch(err=>console.log(err))
        
        
       }

module.exports = getRates()