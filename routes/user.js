const express = require("express");
const login_user = require("../controllers/login_controller.js");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("login_page");
});
router.post("/", login_user);
module.exports = router;