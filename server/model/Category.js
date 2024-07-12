const mongoose=require("mongoose");

const categorySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        
    },
    tutorial:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Tutorial",
    }
})

module.exports=mongoose.model("Category",categorySchema);