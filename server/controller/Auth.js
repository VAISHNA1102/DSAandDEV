const User=require('../model/User')
const OTP=require('../model/OTP')
const Profile=require('../model/Profile')
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt")
const otpGenerator = require('otp-generator')
const mailSender = require("../utils/mailSender")
require("dotenv").config()


exports.signup = async (req, res) => {
    try {
        const { firstName,lastName,email,confirmPassword,password,otp,accountType,contactNumber } = req.body;

        if (!firstName || !lastName || !email || !password || !confirmPassword || !otp || !accountType) {
            return res.status(400).json({
                success: false,
                message: "All Fields are required",
            });
        }

        
        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Password and Confirm Password do not match. Please try again.",
            });
        }

        const isUserPresent = await User.findOne({ email });
        if (isUserPresent) {
            return res.status(400).json({
                success: false,
                message: "User already exists. Please sign in to continue.",
            });
        }

        const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);

        function arrayToNumber(otp) {
            return Number(otp.join(''));
        }
        let abc=arrayToNumber(otp);

        if (response.length === 0 || abc != (response[0].otp)) {
            return res.status(400).json({
                success: false,
                message: "The OTP is not valid",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const profileDetails = await Profile.create({
            gender: null,
            dateOfBirth: null,
            about: null,
            contactNumber: null,
        });

        const createdUser = await User.create({
            firstName,
            lastName,
            email,
            contactNumber,
            password: hashedPassword,
            accountType,
            additionalDetails: profileDetails._id,
            image: `https://api.dicebear.com/8.x/initials/svg?seed=${firstName} ${lastName}`,
        });

        return res.status(201).json({
            success: true,
            createdUser,
            message: "User registered successfully",
        });
    } catch (e) {
        console.error("Error during sign up:", e);
        return res.status(500).json({
            success: false,
            message: "User cannot be registered. Please try again.",
        });
    }
};


exports.login=async(req,res)=>{
    try{
        // Get email and password from request body
        const { email, password } = req.body

        // Check if email or password is missing
        if (!email || !password) {
            // Return 400 Bad Request status code with error message
            return res.status(400).json({
                success: false,
                message: `Please Fill up All the Required Fields`,
            })
        }

        //find user 
        const user=await User.findOne({email}).populate("additionalDetails");

        // If user not found with provided email
        if (!user) {
            return res.status(401).json({
                success: false,
                message: `User is not Registered with Us Please SignUp to Continue`,
            })
        }

        // Generate JWT token and Compare Password
        if(await bcrypt.compare(password,user.password)){
            const payload={ 
                email: user.email, 
                id: user._id, 
                accountType: user.accountType 
            }

            const token = jwt.sign(
                payload,
                process.env.JWT_SECRET,
                {
                  expiresIn: "24h",
                }
            )
             // Save token to user document in database
            user.token = token
            user.password = undefined

            // Set cookie for token and return success response
            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true,
            }
            res.cookie("token", token, options).status(200).json({
                success: true,
                token,
                user,
                message: `User Login Success`,
            })
            } else {
            return res.status(401).json({
                success: false,
                message: `Password is incorrect`,
            })
        }
    }catch(e){
        return res.status(500).json({
            success:false,
            message:"User cannot be registered. Please try again.",
            e:e.message
        })
    }
}

exports.sentOTP=async(req,res)=>{
    try{
        //fetch mail
        const { email } = req.body
        
        //check whether email present in db or not
        const user = await User.findOne({ email });

        if (user) {
            return res.status(401).json({
              success: false,
              message: `User is Already Registered`,
            })
          }

        //generator otp
        var otp = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false,
        })
        //check otp into otp-db
        const result = await OTP.findOne({ otp: otp })
        while (result) {
            var otp = otpGenerator.generate(6, {
                upperCaseAlphabets: false,
                lowerCaseAlphabets: false,
                specialChars: false,
            })
            result = await OTP.findOne({ otp: otp })
        }
        //add unique otp into db
        const otpPayload = { email, otp }
        const otpBody = await OTP.create(otpPayload)
        
        res.status(200).json({
            success: true,
            message: `OTP Sent Successfully`,
            otp,
        })
    }catch(e){
        console.log(e);
        return res.status(500).json({
            success:false,
            message:"Not able to send otp. Please try again.",
            e:e.message
        })
    }
}

// Controller for Changing Password
exports.changePassword = async (req, res) => {
    try {
        // Get user data from req.user
        const userDetails = await User.findById(req.user.id)
  
        // Get old password, new password, and confirm new password from req.body
        const { oldPassword, newPassword } = req.body
    
        // Validate old password
        const isPasswordMatch = await bcrypt.compare(oldPassword,userDetails.password)

        if (!isPasswordMatch) {
            // If old password does not match, return a 401 (Unauthorized) error
            return res.status(401).json({ 
                    success: false, 
                    message: "The password is incorrect" 
            })
        }
  
        // Update password
        const encryptedPassword = await bcrypt.hash(newPassword, 10)

        const updatedUserDetails = await User.findByIdAndUpdate(
            req.user.id,
            { password: encryptedPassword },
            { new: true }
        )
        // Send notification email
        try {
            const emailResponse = await mailSender(
                updatedUserDetails.email,
                "Password for your account has been updated",
                `${updatedUserDetails.email} ",Password updated successfully for" ${updatedUserDetails.firstName} ${updatedUserDetails.lastName}`
            )
        }catch (e) {
            return res.status(500).json({
                success: false,
                message: "Error occurred while sending email",
                error: e.message,
            })
        }
  
        // Return success response
        return res.status(200)
            .json({ success: true, message: "Password updated successfully" })
        } catch (error) {
        // If there's an error updating the password, log the error and return a 500 (Internal Server Error) error
        console.error("Error occurred while updating password:", error)
        return res.status(500).json({
            success: false,
            message: "Error occurred while updating password",
            error: error.message,
        })
    }
}