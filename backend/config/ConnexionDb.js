const mongoose= require("mongoose");
require('dotenv').config();
const uri=process.env.Mongo_uri;


const ConnectDb=async()=>{
    try{
        await mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true});
        console.log('connected to database');
    }
    catch(err){
        console.log(err);
    }
}


module.exports= ConnectDb;