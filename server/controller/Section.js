const Section = require("../model/Section");
const Tutorial = require("../model/Tutorial");
const SubSection = require("../model/SubSection");

exports.createSection = async (req, res) => {
	try {
		// Extract the required properties from the request body
		const { sectionName, TutorialId } = req.body;

		// Validate the input
		if (!sectionName || !TutorialId) {
			return res.status(400).json({
				success: false,
				message: "Missing required properties",
			});
		}

		// Create a new section with the given name
		const newSection = await Section.create({ sectionName });

		// Add the new section to the Tutorial's content array
		const updatedTutorial = await Tutorial.findByIdAndUpdate(
			TutorialId,
			{
				$push: {
					tutorialContent: newSection._id,
				},
			},
			{ new: true }
		)
        .populate({
            path: "tutorialContent",
            populate: {
                path: "subSection",
            },
        })
        .exec();

		// Return the updated tutorial object in the response
		res.status(200).json({
			success: true,
			message: "Section created successfully",
			updatedTutorial,
		});
	} catch (error) {
		// Handle errors
		res.status(500).json({
			success: false,
			message: "Internal server error",
			error: error.message,
		});
	}
}

// UPDATE a section
exports.updateSection = async (req, res) => {
	try {
		const { sectionName, sectionId,tutorialId } = req.body;
		const section = await Section.findByIdAndUpdate(
			sectionId,
			{ sectionName },
			{ new: true }
		);

		const tutorial = await Tutorial.findById(tutorialId)
		.populate({
			path:"tutorialContent",
			populate:{
				path:"subSection",
			},
		})
		.exec();

		res.status(200).json({
			success: true,
			message: section,
			data:tutorial,
		});
	} catch (error) {
		console.error("Error updating section:", error);
		res.status(500).json({
			success: false,
			message: "Internal server error",
		});
	}
}

// DELETE a section
exports.deleteSection = async (req, res) => {
	try {
		const { sectionId, tutorialId }  = req.body;
		await Tutorial.findByIdAndUpdate(tutorialId, {
			$pull: {
				tutorialContent: sectionId,
			}
		})
		const section = await Section.findById(sectionId);
		console.log(sectionId, tutorialId);

		if(!section) {
			return res.status(404).json({
				success:false,
				message:"Section not Found",
			})
		}

		//delete sub section
		await SubSection.deleteMany({_id: {$in: section.subSection}});

		await Section.findByIdAndDelete(sectionId);

		//find the updated tutorial and return 
		const tutorial = await Tutorial.findById(tutorialId).populate({
			path:"tutorialContent",
			populate: {
				path: "subSection"
			}
		})
		.exec();

		res.status(200).json({
			success:true,
			message:"Section deleted",
			data:tutorial
		});
	} catch (error) {
		console.error("Error deleting section:", error);
		res.status(500).json({
			success: false,
			message: "Internal server error",
            error:error.message
		});
	}
}   