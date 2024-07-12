const jwt=require("jsonwebtoken")
require("dotenv").config();

exports.auth=async(req,res,next)=>{
    try{
        //exact token
        const token=req.cookies.token || req.body.token || req.header("Authorisation").replace("Bearer","");
        //validate token
        if(!token){
            return res.status(401).json({
                success:false,
                message:"Token missing",
            })
        }
        //verify token
        try{
            const decode=await jwt.verify(token,process.env.JWT_SECRET);
            //add decoded token into the user body to access it while authencating and authorizing the user
            req.user=decode;
        }catch(e){
            console.log(e);
            return res.status(401).json({ 
                success: false, 
                message: "token is invalid",
                error:e.message
            });
        }
        next();
    }catch(e){
        console.log(e);
        return res.status(500).json({
            success:false,
            message:"Something went wrong while validating token",
            error:e.message
        })
    }
}

//isStudent
exports.isStudent=async(req,res,next)=>{
    try{
        const token=req.user;
        console.log("Token",token);
        
        if(token.accountType!="Student"){
            return res.status(401).json({
                success:false,
                message:"This is protected route for Student"
            })
        }
        next();
    }catch(e){
        console.log(e);
        return res.status(500).json({
            success:false,
            message:"User role cannot be verified! please try again",
            error:e.message
        })
    }
}

//isStudent
exports.isAdmin=async(req,res,next)=>{
    try{
        const token=req.user;
        console.log("Token",token);

        if(token.accountType!="Admin"){
            return res.status(401).json({
                success:false,
                message:"This is protected route for Admin"
            })
        }
        next();
    }catch(e){
        console.log(e);
        return res.status(500).json({
            success:false,
            message:"User role cannot be verified! please try again",
            error:e.message
        })
    }
}