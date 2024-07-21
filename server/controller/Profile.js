const Profile = require("../model/Profile")
const TutorialProgress = require("../model/TutorialProgress")

const Tutorial = require("../model/Tutorial")
const User = require("../model/User")
const { uploadImageToCloudinary } = require("../utils/imageUploader")


//update Profile
exports.updateProfile = async (req, res) => {
    try {
        const {
          firstName,
          lastName,
          dateOfBirth,
          about,
          contactNumber,
          gender,
        } = req.body
  
        const id = req.user.id
  
        // Find the profile by id
        const userDetails = await User.findById(id)
        const profile = await Profile.findById(userDetails.additionalDetails)
  
        const user = await User.findByIdAndUpdate(id, {
          firstName,
          lastName,
        })
        await user.save()
  
        // Update the profile fields
        profile.dateOfBirth = dateOfBirth
        profile.about = about
        profile.contactNumber = contactNumber
        profile.gender = gender
  
        // Save the updated profile
        await profile.save()
  
        // Find the updated user details
        const updateProfile = await User.findById(id)
          .populate("additionalDetails")
          .exec()

        return res.json({
          success: true,
          message: "Profile updated successfully",
          updateProfile,
        })
      } catch (error) {
        console.log(error)
        return res.status(500).json({
          success: false,
          error: error.message,
        })
      }
}

exports.deleteAccount = async (req, res) => {
    try {
        const id = req.user.id
        console.log(id)
        const user = await User.findById({ _id: id })
        if (!user) {
            return res.status(404).json({
            success: false,
            message: "User not found",
            })
        }
        // Delete Assosiated Profile with the User
        await Profile.findByIdAndDelete(user.additionalDetails);

        for(const tutorialId of user.tutorial) {
            await Tutorial.findByIdAndUpdate(
            tutorialId,
            { $pull: { studentsEnrolled: id } },
            { new: true }
            )
        }
        // Now Delete User
        await User.findByIdAndDelete({ _id: id })
        res.status(200).json({
            success: true,
            message: "User deleted successfully",
        })
        await TutorialProgress.deleteMany({ userId: id })
    } catch (error) {
        console.log(error)
        res.status(500).json({ 
            success: false, 
            message: "User Cannot be deleted" 
        })
    }
}

exports.getAllUserDetails = async (req, res) => {
    try {
        const id = req.user.id
        const userDetails = await User.findById(id)
            .populate("additionalDetails")
            .exec()

        res.status(200).json({
            success: true,
            message: "User Data fetched successfully",
            data: userDetails,
        })
        } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

exports.updateDisplayPicture = async (req, res) => {
    try {
      const displayPicture = req.files.displayPicture
      const userId = req.user.id
      console.log(displayPicture," ",userId);

      const image = await uploadImageToCloudinary(
        displayPicture,
        process.env.FOLDER_NAME,
        1000,
        1000
      )
      console.log("image",image)
      const updatedProfile = await User.findByIdAndUpdate(
        { _id: userId },
        { image: image.secure_url },
        { new: true }
      )
      res.send({
        success: true,
        message: `Image Updated successfully`,
        data: updatedProfile,
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      })
    }
}

exports.getEnrolledTutorial = async (req, res) => {
    try {
        const userId = req.user.id
        let userDetails = await User.findOne({
            _id: userId,
        })
            .populate({
            path: "Tutorial",
            populate: {
                path: "tutorialContent",
                populate: {
                path: "subSection",
                },
            },
            })
            .exec()

        if (!userDetails) {
            return res.status(400).json({
            success: false,
            message: `Could not find user with id: ${userDetails}`,
            })
        }
        return res.status(200).json({
            success: true,
            data: userDetails.courses,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

//student enrolled controller