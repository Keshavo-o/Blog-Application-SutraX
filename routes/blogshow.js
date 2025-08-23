const express = require("express");
const router = express.Router();
const path = require("path");
const blog = require("../models/blog_model.js");
router.get("/",async (req,res)=>{
    const blogs = await blog.find({});
    if (!blogs) {
        return res.status(404).render("not_found");
    }
    res.render("show_all_blogs", { blogs });
})
router.get("/:id",async (req,res)=>{
    const blogPost = await blog.findById(req.params.id);
    if (!blogPost) {
        return res.status(404).render("not_found");
    }
    res.render("show_single_blog", { blog: blogPost });
})
module.exports = router;