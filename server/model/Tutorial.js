const mongoose=require("mongoose");

const tutorialSchema=new mongoose.Schema({
    tutorialName:{
        type:String,
        trim:true
    },
    tutorialDescription:{
        type:String,
        trim:true
    },
    createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "User",
	},
    whatYouWillLearn:{
        type:String,
        trim:true
    },
    tutorialContent:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Section",
        required:true
    }],
    ratingAndreview:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"RatingAndReview"
        }
    ],
    thumbnail:{
        type:String
    },
    category:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Category"
        }
    ],
    tag:{
        type:String,
    },
    studentsEnrolled:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    status: {
		type: String,
		enum: ["Draft", "Published"],
	},
    createdAt: {
		type:Date,
		default:Date.now
	},
})

module.exports=mongoose.model("Tutorial",tutorialSchema);