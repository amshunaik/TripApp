const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const connectDb=require('./Db.js')
const itemModel=require('./Schema.js')
const AddedTrip=require('./TripSchema.js')
const cookieParser=require("cookie-parser")
const {createTokens,validateToken}=require('./JWT')
require('dotenv').config();
const cors = require('cors');
const { use } = require('react');
const app = express();

// Middleware
app.use(cookieParser())
app.use(cors()); // Enables CORS for all origins
app.use(express.json());


connectDb();
app.post('/signup', async(req, res) => {
    const {username,email,phone,chatno,password}=req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user={username,email,password:hashedPassword};
    console.log("User Added : ",user);

    const newUser = new itemModel(user);
    await newUser.save();
    res.status(201).json(newUser);

    
})

app.post('/:userid/addTrip', async(req, res) => {
    //const {name:name,email:email,phone:phone,size:size,startdate:startdate,selectedOption:selectedOption,plan:plan}=req.body;
    const userId = req.params.userid;
    const data=req.body
    console.log({"userid":userId,data})
    const Detail = new AddedTrip({"userid":userId,...data});
    await Detail.save();
    res.status(201).json(Detail);

    
})
app.get('/requests', async(req, res) => {
    //const {name:name,email:email,phone:phone,size:size,startdate:startdate,selectedOption:selectedOption,plan:plan}=req.body;
    //const items = JSON.parse(localStorage.getItem('items'));

    const Detail = await AddedTrip.find({userid:items._id});
    //await Detail.save();
    res.status(201).json(Detail);
    res.send(Detail)

    
})
app.post('/user', async(req, res) => {
    const {username,email,phone,chatno,password}=req.body;
    //const user=req.body
    const user = await itemModel.findOne({ email });
    if (!user) {
        console.log("Sign Up your email id");
        return res.status(404).json({ message: 'User not found' });
        
    }

    // Compare the hashed password
    const hashedPassword = await bcrypt.hash(password, 10);
    const isMatch = await bcrypt.compare(password, user.password);
    

    if (!isMatch) {
        alert("Email and password not matching, \\enter correct details");
        return res.status(401).json({ message: 'Invalid password' });
    }

    //console.log("hi :",hashedPassword , user.password ,email,user.email)
    //checking to make sure the user entered the correct username/password combo
        if(isMatch && email==user.email) { 
        //if user log in success, generate a JWT token for the user with a secret key
            const accesstoken=createTokens(user);
            console.log("Token : ",accesstoken);

            res.cookie("access-token",accesstoken,{
                maxAge:60*60*24*30*1000,
            })
            // jwt.sign({user}, 'privatekey', { expiresIn: '1h' },(err, token) => {
            //     if(err) { console.log(err) }  
            //     console.log(token) ;
            //     res.send(token);
            // });
        }
        
        else {
            console.log('ERROR: Could not log in');
        }
        res.send(user);
    
})

app.get('/profile',validateToken,(req,res)=>{
    res.json({Message:"User authenticated"});
})
// Start the server
const PORT = 3005;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
