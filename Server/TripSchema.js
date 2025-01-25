const mongoose=require('mongoose');
const data=new mongoose.Schema({
    userid:String,
    name:String,
    email:String,
    phone:String,
    size:Number,
    startdate:String,
    enddate:String,
    selectedOption:String,
    plan:String
})

const model=mongoose.model("AddTrip",data);
module.exports =model;