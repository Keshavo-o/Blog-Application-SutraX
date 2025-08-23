const user = require("../models/user_model.js");
const multer = require("multer");
const { setUser, verifyUser } = require("../services/user_auth.js");
const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

// Multer storage config
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../profile_pics"));
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        cb(null, req.user.username + ext); // username + file extension
    }
});

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        // Accept only images
        const allowedTypes = /jpeg|jpg|png|gif/;
        const ext = path.extname(file.originalname).toLowerCase();
        const mime = file.mimetype;
        if (allowedTypes.test(ext) && allowedTypes.test(mime)) {
            cb(null, true);
        } else {
            cb(new Error("Only images are allowed"));
        }
    }
});

// Middleware to attach user data
async function attachUser(req, res, next) {
    const token = req.cookies.uid;
    const userData = verifyUser(token);
    if (!userData) {
        return res.redirect("/login");
    }
    req.user = await user.findOne({ username: userData.username });
    next();
}

router.get("/", (req, res) => {
    res.render("home");
});

router.get("/userprofile", attachUser, (req, res) => {
    res.render("user_profile", { user: req.user });
});

router.post("/update_profile", attachUser, async (req, res) => {
    req.user.email = req.body.email;
    req.user.bio = req.body.bio;
    await req.user.save();
    res.redirect("/userprofile");
});

router.post("/upload_profile_pic", attachUser, upload.single("profile_pic"), async (req, res) => {
    if (!req.file) {
        return res.status(400).send("No file uploaded.");
    }

    // Save file path to user's profile
    req.user.profilepic = "../profile_pics/" + req.file.filename;
    await req.user.save();

    res.redirect("/userprofile");
});
router.get("/users", async (req, res) => {
    res.render("users",);
});
router.get("/users/:username", async (req, res) => {
    const userDatatemp = await user.findOne({ username: req.params.username });
    if (!userDatatemp) {
        return res.render("users");
    }
    res.render("randomprofile", { user: userDatatemp });
});
router.get("/settings", attachUser, async (req, res) => {
    const token = req.cookies.uid;
    const userData = verifyUser(token);
    if (!userData) {
        return res.redirect("/login");
    }
    req.user = await user.findOne({ username: userData.username });
    res.render("settings", { user: req.user });
});
module.exports = router;
