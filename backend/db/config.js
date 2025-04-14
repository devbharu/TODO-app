import mongoose from 'mongoose'

const connectdb = async function(){


    try{
        await mongoose.connect("mongodb://localhost:27017/todo");
        console.log("MONGO  DB CONNECTED");
    }
    catch(e){
        console.log("error while connecting the db");
    }
 


}



module.exports=connectdb;
