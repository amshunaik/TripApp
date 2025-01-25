const mongoose=require('mongoose');
const data=new mongoose.Schema({
    username:String,
    email:String,
    phone:String,
    chatno:String,
    password:String
})

const model=mongoose.model("Signup",data);
module.exports =model;