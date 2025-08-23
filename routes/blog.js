const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const blog = require("../models/blog_model.js");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, "../blog_images"));
    },
    filename: (req, file, cb) => {
        const fileName = Date.now() + path.extname(file.originalname);
        cb(null, fileName);
    }
});

const upload = multer({ storage }); 

const{ setUser, verifyUser } = require("../services/user_auth.js");

router.get("/", (req, res) => {
    const user = verifyUser(req.cookies.uid);
    if (!user) {
        return res.redirect("/login");
    }
    // console.log(user);
    return res.render("addbog", { user });
});
router.post("/",upload.single("image"), async (req, res) => {
    // console.log(req.body);
    // console.log(req.file);

    const img_link="../blog_images/"+req.file.filename;
    const newBlog = new blog({
        title: req.body.title,
        body: req.body.description,
        author: req.body.username,
        image: img_link
    });
    console.log(newBlog);
    try {
        await newBlog.save();
        return res.redirect("/");
    } catch (error) {
        console.error("Error adding blog:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;