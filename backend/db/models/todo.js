import mongoose from "mongoose";


const todoSchema = mongoose.Schema({

name:String,
todo:{
    title:{
        type:String,
        required:true,

    },
    completed:{
        type:Boolean,
        required:true,

    }
}


})



const Todo = mongoose.model("Todo",todoSchema);

module.export=Todo;