const express = require("express")
const router = express.Router()

const { auth,isStudent,isAdmin } = require("../middleware/Auth");

const{createTutorial,editTutorial,getTutorial,getFullTutorial,deleteTutorial}=require("../controller/Tutorial");

const {createSection,updateSection,deleteSection} = require("../controller/Section")

const {createSubSection,updateSubSection,deleteSubSection} = require("../controller/SubSection")

const {createRating,getAverageRating,getAllRating} = require("../controller/RatingAndReview")

const{createCategory,showAllCategories}=require("../controller/Category")

const {updateTutorialProgress,getProgressPercentage} = require("../controller/TutorialProgress");

//----------------------courses route----------------------------
router.post('/createTutorial',auth,isAdmin,createTutorial)
router.post('/editTutorial',auth,isAdmin,editTutorial)
router.get('/getTutorial',auth,getTutorial)
router.get('/getFullTutorial',auth,getFullTutorial)
router.delete('/deleteTutorial',auth,isAdmin,deleteTutorial)

router.post('/addSection',auth,isAdmin,createSection)
router.post('/updateSection',auth,isAdmin,updateSection)
router.post('/deleteSection',auth,isAdmin,deleteSection)

router.post('/addSubSection',auth,isAdmin,createSubSection)
router.post('/updateSubSection',auth,isAdmin,updateSubSection)
router.post('/deleteSubSection',auth,isAdmin,deleteSubSection)

//----------------------tutorial Progress route----------------------------
router.post('/updateCourseProgress', auth, isStudent, updateTutorialProgress);
// router.get("/getProgressPercentage", auth, isAdmin, getProgressPercentage);

//----------------------rating and review route----------------------------
router.post("/createRating", auth, isStudent, createRating)
router.get("/getAverageRating", getAverageRating)
router.get("/getReviews", getAllRating)


//----------------------category route----------------------------
router.post("/create-category", auth, isAdmin, createCategory)
router.get("/showAllCategories", showAllCategories)


module.exports = router