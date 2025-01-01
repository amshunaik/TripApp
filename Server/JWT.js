const {sign,verify}=require("jsonwebtoken");

const createTokens=(user)=>{
    const token=sign(
        {username:user.username,email:user.email,password:user.password},
    "jwtsecretplschange");

    return token;
}
const validateToken=(req,res,next)=>{
    const accesstoken=req.cookies["access-token"];
    console.log(accesstoken)

    if(!accesstoken){
        return res.status(400).json({error:"User not authenticated"});

    }
    try{
        const validToken=verify(accesstoken,"jwtsecretplschange");
        if(validToken){
            req.authenticated=true;
            return next();
        }

    }catch(err){
        return res.status(400).json({error:err});
    }

}

module.exports={createTokens,validateToken};