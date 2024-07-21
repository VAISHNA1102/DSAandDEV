const Tutorial=require("../model/Tutorial");
const User=require("../model/User");
const Category=require("../model/Category");
const Section=require("../model/Section")
const SubSection=require("../model/SubSection")
const { uploadImageToCloudinary } = require("../utils/imageUploader")
require("dotenv").config();


//create Tutorial
exports.createTutorial=async(req,res)=>{
    try{
         // Get user ID from request object
        const userId = req.user.id

        // Get all required fields from request body
        let {
            tutorialName,
            tutorialDescription,
            whatYouWillLearn,
            tag,
            category,
            status
        } = req.body
        // Get thumbnail image from request files
        const thumbnail = req.files.thumbnailImage

        // Convert the tag from stringified Array to Array
        // const tag = JSON.parse(_tag)

        // console.log("tag", tag)

        // Check if any of the required fields are missing
        if (
            !tutorialName ||
            !tutorialDescription ||
            !whatYouWillLearn ||
            !tag ||
            !thumbnail ||
            !category
        ) {
            return res.status(400).json({
                success: false,
                message: "All Fields are Mandatory",
            })
        }
        if (!status || status === undefined) {
            status = "Draft"
        }
        // Check if the user is an admin
        const adminDetails = await User.findById(userId, {
            accountType: "Admin",
        })

        if (!adminDetails) {
        return res.status(404).json({
            success: false,
            message: "Admin Details Not Found",
        })
        }

        // Check if the tag given is valid
        const categoryDetails = await Category.findById(category)
        if (!categoryDetails) {
            return res.status(404).json({
                success: false,
                message: "Category Details Not Found",
            })
        }
        // Upload the Thumbnail to Cloudinary
        const thumbnailImage = await uploadImageToCloudinary(thumbnail,process.env.FOLDER_NAME)
        console.log(thumbnailImage)

        // Create a new tutorial with the given details
        const newTutorial = await Tutorial.create({
            tutorialName,
            tutorialDescription,
            createdBy: adminDetails._id,
            whatYouWillLearn: whatYouWillLearn,
            tag,
            category: categoryDetails._id,
            thumbnail: thumbnailImage.secure_url,
            status: status
        })

        // Add the new tutorial to the User Schema of the Instructor
        await User.findByIdAndUpdate(
                    {
                        _id: adminDetails._id,
                    },
                    {
                        $push: {
                            tutorial: newTutorial._id,
                        },
                    },
                    { new: true }
        )
        // Add the new tutorial to the Categories
        const categoryDetails2 = await Category.findByIdAndUpdate(
                    { _id: category },
                    {
                        $push: {
                            tutorial: newTutorial._id,
                        },
                    },
                    { new: true }
        )
        console.log("category Details", categoryDetails2)

        // Return the new tutorial and a success message
        res.status(200).json({
            success: true,
            data: newTutorial,
            message: "Tutorial Created Successfully",
        })
  } catch (error) {
    // Handle any errors that occur during the creation of the tutorial
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Failed to create tutorial",
      error: error.message,
    })
  }
}

//edit Tutorial
exports.editTutorial = async (req, res) => {
    try {
      const { tutorialId } = req.body
      const updates = req.body
      const tutorial = await Tutorial.findById(tutorialId)
  
      if (!tutorial) {
        return res.status(404).json({ error: "Tutorial not found" })
      }
  
      // If Thumbnail Image is found, update it
      if (req.files) {
        console.log("thumbnail update")
        const thumbnail = req.files.thumbnailImage
        const thumbnailImage = await uploadImageToCloudinary(
        thumbnail,
        process.env.FOLDER_NAME
        )
        tutorial.thumbnail = thumbnailImage.secure_url
      }
  
      // Update only the fields that are present in the request body
      for (const key in updates) {
        if (updates.hasOwnProperty(key)) {
          if (key === "tag") {
            tutorial[key] = JSON.parse(updates[key])
          } else {
            tutorial[key] = updates[key]
          }
        }
      }
  
      await tutorial.save()
  
      const updatedTutorial = await Tutorial.findOne({
        _id: tutorialId,
      })
        .populate({
          path: "createdBy",
          populate: {
            path: "additionalDetails",
          },
        })
        .populate("category")
        .populate("ratingAndreview")
        .populate({
          path: "tutorialContent",
          populate: {
            path: "subSection",
          },
        })
        .exec()
  
        res.json({
            success: true,
            message: "Tutorial updated successfully",
            data: updatedTutorial,
        })
    } catch (error) {
      console.error(error)
      res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      })
    }
}

//get tutorial
exports.getTutorial=async(req,res)=>{
    try {
        const allTutorial = await Tutorial.find(
          { status: "Published" },
          {
            tutorialName: true,
            thumbnail: true,
            tutorialDescription:true,
            createdBy: true,
            ratingAndreviews: true,
            studentsEnrolled: true,
            createdAt:true
          }
        )
          .populate("createdBy")
          .exec()
    
        return res.status(200).json({
          success: true,
          data: allTutorial,
        })
      } catch (error) {
        console.log(error)
        return res.status(404).json({
          success: false,
          message: `Can't Fetch Tutorial Data`,
          error: error.message,
        })
      }
}

//get full tutorial
exports.getFullTutorial=async(req,res)=>{
    try {
        const { tutorialId } = req.query;  // Use req.query for GET requests
        const tutorialDetails = await Tutorial.findOne({
          _id: tutorialId,
        })
          .populate({
            path: "createdBy",
            populate: {
              path: "additionalDetails",
            },
          })
          .populate("category")
          .populate("ratingAndreview")
          .populate({
            path: "tutorialContent",
            populate: {
              path: "subSection",
            },
          })
          .exec()
          
        if (!tutorialDetails) {
          return res.status(400).json({
            success: false,
            message: `Could not find Tutorial with id: ${tutorialId}`,
          })
        }

        return res.status(200).json({
          success: true,
          data:tutorialDetails
        })
      }catch(e){
        return res.status(500).json({
            success:false,
            message:"Can't Fetch Full Tutorial Data",
            error:e.message
        })
    }
}

//delete tutorial
exports.deleteTutorial=async(req,res)=>{
    try{
        const{tutorialId}=req.body;
        
        // Find the tutorial
        const tutorial = await Tutorial.findById(tutorialId)
        if (!tutorial) {
            return res.status(404).json({ message: "Tutorial not found" })
        }

        // Unenroll students from the tutorial
        const studentsEnrolled = tutorial.studentsEnrolled
        for (const studentId of studentsEnrolled) {
            await User.findByIdAndUpdate(studentId, {
                $pull: { tutorial: tutorialId },
            })
        }

        // Delete sections and sub-sections
        const tutorialSections = tutorial.tutorialContent
        for (const sectionId of tutorialSections) {
            // Delete sub-sections of the section
            const section = await Section.findById(sectionId)
            if (section) {
                const subSections = section.subSection
                for (const subSectionId of subSections) {
                    await SubSection.findByIdAndDelete(subSectionId)
                }
            }

            // Delete the section
            await Section.findByIdAndDelete(sectionId)
        }

        // Delete the tutorial
        await Tutorial.findByIdAndDelete(tutorialId)

        return res.status(200).json({
            success: true,
            message: "Tutorial deleted successfully",
        })
    }catch(e){
        return res.status(500).json({
            success: false,
            message: "Server error",
            error: e.message,
          })
    }
}