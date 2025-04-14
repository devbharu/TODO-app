import mongoose from "mongoose";


const userSchema = mongoose.Schema({

name:String,
email:String,require:true,
password:String,


})



const User = mongoose.model("user",userSchema);

module.export=User;