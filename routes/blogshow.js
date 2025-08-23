const express = require("express");
const router = express.Router();
const path = require("path");
const blog = require("../models/blog_model.js");
const comment = require("../models/comment_model.js");
router.get("/",async (req,res)=>{
    const blogs = await blog.find({});
    if (!blogs) {
        return res.status(404).render("not_found");
    }
    res.render("show_all_blogs", { blogs });
})
router.get("/:id",async (req,res)=>{
    let comments =[];
    //  console.log(req.params.id)
     comments = await comment.find({ blogId: req.params.id });
    //   console.log(comments[0].createdAt);
    const blogPost = await blog.findById(req.params.id);
    if (!blogPost) {
        return res.status(404).render("not_found");
    }
    res.render("show_single_blog", { blog: blogPost, comments });
})
module.exports = router;