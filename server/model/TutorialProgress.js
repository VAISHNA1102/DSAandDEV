const mongoose=require("mongoose");

const TutorialProgressSchema=new mongoose.Schema({
    tutorialId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Tutorial"
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    completedTutorials:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"SubSection"
        }
    ]
})

module.exports=mongoose.model("TutorialProgress",TutorialProgressSchema);