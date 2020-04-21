require('dotenv').config()
const mongoose = require('mongoose')



const dbconnect =async(req, res, next)=>{
    await mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.MONGO}@moneystream-vlhpe.mongodb.net/test?retryWrites=true&w=majority`,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        
        )
        .then(console.log("DB connected 2"))
        .catch(err=>console.log(err))
    
}
module.exports = dbconnect