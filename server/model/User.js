const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
    },
    accountType:{
        type:String,
        enum:["Admin","Student"],
        required:true
    },
    active: {
        type: Boolean,
        default: true,
	},
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Profile"
    },
    tutorial:[   
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Tutorial"
        }
    ],
    token:{
        type:String
    },
    resetPasswordExpires:{
        type:Date
    },
    image:{
        type:String,
        required:true
    },
    tutorialProgress:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"TutorialProgress"
        }
    ]
})


const User = mongoose.model('User', userSchema);

module.exports = User; 