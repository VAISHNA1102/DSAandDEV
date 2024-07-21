const Section = require("../model/Section")
const SubSection = require("../model/SubSection")
const TutorialProgress = require("../model/TutorialProgress")
const Tutorial = require("../model/Tutorial")

exports.updateTutorialProgress = async (req, res) => {
  const { tutorialId, subsectionId } = req.body
  const userId = req.user.id

  console.log("tutorialId=",tutorialId," subsectionId=",subsectionId," userId=",userId);

  try {
    // Check if the subsection is valid
    const subsection = await SubSection.findById(subsectionId)
    if (!subsection) {
      return res.status(404).json({ error: "Invalid subsection" })
    }

    // Find the Tutorial progress document for the user and Tutorial
    let tutorialProgress = await TutorialProgress.findOne({
      tutorialId: tutorialId,
      userId: userId,
    })

    if (!tutorialProgress) {
      // If tutorial progress doesn't exist, create a new one
      return res.status(404).json({
        success: false,
        message: "Tutorial progress Does Not Exist",
      })
    } else {
      // If tutorial progress exists, check if the subsection is already completed
      if (tutorialProgress.completedTutorials.includes(subsectionId)) {
        return res.status(400).json({ error: "Subsection already completed" })
      }

      // Push the subsection into the completedVideos array
      tutorialProgress.completedVideos.push(subsectionId)
    }

    // Save the updated Tutorial progress
    await tutorialProgress.save()

    return res.status(200).json({ message: "Tutorial progress updated" })
  } catch (error) {
    console.error("tutorial error",error)
    return res.status(500).json({ error: "Internal server error" })
  }
}

exports.getProgressPercentage = async (req, res) => {
  const { tutorialId } = req.body
  const userId = req.user.id

  if (!tutorialId) {
    return res.status(400).json({ error: "Tutorial ID not provided." })
  }

  try {
    // Find the tutorial progress document for the user and tutorial
    let tutorialProgress = await TutorialProgress.findOne({
      tutorialId: tutorialId,
      userId: userId,
    })
      .populate({
        path: "tutorialId",
        populate: {
          path: "tutorialContent",
        },
      })
      .exec()

    if (!tutorialProgress) {
      return res
        .status(400)
        .json({ error: "Can not find Tutorial Progress with these IDs." })
    }
    console.log(tutorialProgress, userId)

    let lectures = 0
    tutorialProgress.tutorialId.tutorialContent?.forEach((sec) => {
        lectures += sec.subSection.length || 0
    })

    let progressPercentage =(tutorialProgress.completedTutorials.length / lectures) * 100

    // To make it up to 2 decimal point
    const multiplier = Math.pow(10, 2)

    progressPercentage =Math.round(progressPercentage * multiplier) / multiplier

    return res.status(200).json({
      data: progressPercentage,
      message: "Succesfully fetched Tutorial progress",
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: "Internal server error" })
  }
}