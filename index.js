const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const user_router = require("./routes/user.js");
const user_auth = require("./middlewares/user_auth.js");
const signup_controller = require("./controllers/signup_controller.js");
const staticRouter = require("./routes/staticRouter.js");

const app = express();
const PORT = 8000;

//mongoDB connection
mongoose.connect("mongodb://localhost:27017/SutraX").then(() => {
  console.log("MongoDB connected");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/profile_pics', express.static('profile_pics'));//middleware for parsing profile pictures


app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));




app.get("/logout", (req, res) => {
  if (req.cookies.uid) {
    res.clearCookie("uid");
  }
  res.redirect("/login");
});
app.get("/signup", (req, res) => {
  res.render("signup");
});
app.post("/signup", (req, res) => {
  signup_controller(req, res);
  
});

app.use("/login", user_router);

app.use("/", user_auth);

app.use("/", staticRouter);
app.get('/*splat',(req,res)=>{
    res.render("not_found");
})


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
