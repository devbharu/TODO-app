import mongoose from 'mongoose'

  const connectdb = async function(){


    try{
        await mongoose.connect("");//connect yours
        console.log("MONGO  DB CONNECTED");
    }
    catch(e){
        console.log("error while connecting the db");
    }
 


}


export default connectdb;
 
