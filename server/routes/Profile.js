const express = require("express")
const router = express.Router()
const { auth, isAdmin } = require("../middleware/Auth")
const {
  deleteAccount,
  updateProfile,
  getAllUserDetails,
  updateDisplayPicture,
  getEnrolledTutorial,
} = require("../controller/Profile")


router.delete("/delete-profile", auth, deleteAccount)
router.put("/update-profile", auth, updateProfile)
router.get("/get-user-details", auth, getAllUserDetails)
// Get Enrolled Courses
router.get("/get-enrolled-tutorials", auth, getEnrolledTutorial)
router.put("/update-display-picture", auth, updateDisplayPicture)
//admin dashboard

module.exports = router