const mongoose=require("mongoose");

const ratingAndReviewSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Tutorial",
    },
    rating:{
        type:Number,
        required:true
    },
    review:{
        type:String,
        required:true
    },
    tutorial: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "Tutorial",
		index: true,
	},
})

module.exports=mongoose.model("RatingAndReview",ratingAndReviewSchema);