const mongoose=require("mongoose");
const mailSender = require("../utils/mailSender");

const otpSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true,

    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:5*60
    }
});

// Define a function to send emails
async function sendVerificationEmail(email, otp) {
	try {
		const mailResponse = await mailSender(
			email,
			"Verification Email",
			otp
		);
	} catch (error) {
		console.log("Error occurred while sending email: ", error);
		throw error;
	}
}

// Define a post-save hook to send email after the document has been saved
otpSchema.pre("save", async function (next) {
	// Only send an email when a new document is created
	if (this.isNew) {
		await sendVerificationEmail(this.email, this.otp);
	}
	next();
});

module.exports=mongoose.model("OTP",otpSchema);