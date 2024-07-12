const mongoose=require("mongoose");
require("dotenv").config();

exports.connect=()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{console.log("Database connected successfully");})
    .catch((e)=>{
        console.log("Database not connected");
        console.error(e);
        process.exit(1); 
    })
}