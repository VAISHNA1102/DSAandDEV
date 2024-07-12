const express = require("express")
const router = express.Router()

const{signup,login,sentOTP,changePassword}=require("../controller/Auth");
const {resetPasswordToken,resetPassword} = require("../controller/resetPassword")

const { auth } = require("../middleware/Auth");


// Route for user login
router.post("/login", login)

// Route for user signup
router.post("/signup", signup)

// Route for sending OTP to the user's email
router.post("/sendotp", sentOTP)

// Route for Changing the password
router.post("/changepassword", auth, changePassword)



// Route for generating a reset password token
router.post("/reset-password-token", resetPasswordToken)

// Route for resetting user's password after verification
router.post("/reset-password", resetPassword)


module.exports = router