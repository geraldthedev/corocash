const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const axios = require('axios').default;
const bodyParser = require('body-parser')
//const getRates = require('./middleware/getRates')





app.prepare()
.then(()=>{
    const server = express()
    
    server.use(bodyParser.urlencoded({ extended: false }))
    server.use(bodyParser.json())
    server.get('*', (req, res, next)=>{
        server.use('/routes/getrates', require('./routes/getRates'))

        return handle(req, res, next)
    })
    
    server.listen(3000, (err)=>{
        if (err) throw err
        console.log('ready on port 3000')
    })
})
.catch(err=>console.log(err))