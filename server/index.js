const express = require('express')
const app = express()

const totutorialRoutes=require("./routes/Tutorials");
const userRoutes=require("./routes/User")
const contactUs=require("./routes/Contact")
const profileRoutes=require("./routes/Profile")

const cookieParser=require("cookie-parser");
const cors=require("cors");
const fileUpload=require("express-fileupload");
const {cloudinaryConnect } = require("./config/cloudinary");
const database=require("./config/database")
require("dotenv").config();

//PORT declaration
const PORT=process.env.PORT || 4000;
//database connect
database.connect();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(
	fileUpload({
		useTempFiles:true,
		tempFileDir:"/tmp",
	})
)
//connect to cloudinary
cloudinaryConnect();

//routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/tutorial", totutorialRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/contact", contactUs);


app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});


app.listen(PORT, () => {
  console.log(`APP started on port ${PORT}`)
})