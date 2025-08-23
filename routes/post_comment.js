const express = require("express");
const comment = require("../models/comment_model.js");
const router = express.Router();

router.post("/", (req, res) => {
    console.log(req.body);
    const { postId, author, text } = req.body;
    const newcomment ={
         blogId: postId,
          body: text,
          author: author
    }
    const tempcomment = new comment(newcomment);
    tempcomment.save()
        .then(() => {
            res.redirect(`/blogs/${postId}`);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: "Error posting comment" });
        });
});

module.exports = router;