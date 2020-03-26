const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const axios = require('axios').default;




app.prepare()
.then(()=>{
    const server = express()
    const getRates = async(req, res, next)=>{
        await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then((res)=>{
            console.log(res.data)
        })
        .catch(err=>console.log(err))
        next()
       }
       server.use(getRates)
    server.get('*', (req, res, next)=>{
        
        return handle(req, res, next)
    })
    
    server.listen(3000, (err)=>{
        if (err) throw err
        console.log('ready on port 3000')
    })
})
.catch(err=>console.log(err))