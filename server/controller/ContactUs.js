const mailSender = require("../utils/mailSender")

exports.contactUsController = async (req, res) => {
    const { email, name, message, phoneNo } = req.body
    console.log(req.body)
    try {
        const emailRes = await mailSender(
            email,
            "Your Data send successfully",
            `${message}`
        )
        return res.json({
            success: true,
            message: "Email send successfully",
            emailRes
        })
    } catch (e) {
        return res.json({
            success: false,
            message: "Something went wrong...",
            error:e.message
        })
    }
}