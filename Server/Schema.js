const mongoose=require('mongoose');
const data=new mongoose.Schema({
    username:String,
    email:String,
    password:String
})

const model=mongoose.model("Signup",data);
module.exports =model;