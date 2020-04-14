const axios = require('axios')
const mongoose = require('mongoose')


const dbconnect =async(req, res, next)=>{
    await mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.MONGO}@moneystream-vlhpe.mongodb.net/test?retryWrites=true&w=majority`,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        
        )
        .then(console.log("DB connected"))
        .catch(err=>console.log(err))
        next()
}
module.exports = dbconnect