import mongoose from 'mongoose'

  const connectdb = async function(){


    try{
        await mongoose.connect("mongodb+srv://devbharu04:SpBnLVyneW7951fg@cluster0.eq1cq.mongodb.net/mama");
        console.log("MONGO  DB CONNECTED");
    }
    catch(e){
        console.log("error while connecting the db");
    }
 


}


export default connectdb;
 
