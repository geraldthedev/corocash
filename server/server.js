require('dotenv').config()
const express = require('express'),
        next = require('next'),
        dev = process.env.NODE_ENV !== 'production',
        port = process.env.PORT || 3000,
        app = next({dev}),
        handle = app.getRequestHandler(),
        bodyParser = require('body-parser'),
        router = require('./routes/getRates'),
        mongoose = require('mongoose'),
        rateRoute = require('./models/saveRates')

//const getRates = require('./middleware/getRates')





app.prepare()
.then(()=>{
    const server = express(),
            dbconnect = require('./middleware/dbconnect')


    server.use(bodyParser.urlencoded({ extended: false }))
    server.use(bodyParser.json())
    server.use('/routes/getrates', router)
    //server.use('/middleware/dbconnect', dbconnect)
    //server.use('/models/saveRates', rateRoute)

   /* mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.MONGO}@moneystream-vlhpe.mongodb.net/test?retryWrites=true&w=majority`,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        
        )
        .then(console.log("DB connected 1"))
        .catch(err=>console.log(err))*/
    server.get('*', async (req, res, next)=>{
        
        return handle(req, res, next)
    })
    dbconnect()
    server.listen(port, (err)=>{
        if (err) throw err
        console.log('ready on port 3000')
    })
})
.catch(err=>console.log(err))