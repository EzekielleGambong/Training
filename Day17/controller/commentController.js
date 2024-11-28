const express = require("express");
const Comment = require("../models/comment");
const BlogPost = require("../models/post");

const addComment = async (req, res) => {
  try {
    const { blogPostId, content } = req.body;

    const blogPost = await BlogPost.findById(blogPostId);
    if (!blogPost) {
      return res.status(404).json({ error: "Blog post not found" });
    }

    const comment = new Comment({
      author: req.user.userId,
      content,
      post: blogPostId,
    });

    await comment.save();

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// const addComment = async (req, res) => {
//   // try {
//   const { blogPostId, content } = req.body;

//   const userId = req.user.userId; // Assuming `req.user` is populated by authentication middleware

//   const blogPost = await BlogPost.findById(blogPostId);
//   if (!blogPost) {
//     return res.status(404).json({ error: "Blog post not found" });
//   }

//   const newComment = {
//     author: userId,
//     content,
//     post: blogPostId,
//   };
//   console.log(blogPost);

//   blogPost.comments.push(newComment);

//   return res.status(201).json({ comment: newComment });
//   // } catch (error) {
//   //   res.status(500).json({ error: "Internal server error" });
//   // }
// };

const getAllComments = async (req, res) => {
  try {
    const { blogPostId } = req.query;

    // Validate the existence of the blog post
    const blogPost = await BlogPost.findById(blogPostId);
    if (!blogPost) {
      return res.status(404).json({ error: "Blog post not found" });
    }

    // Retrieve all comments related to the blog post
    const comments = await Comment.find({ post: blogPostId });

    return res.status(200).json({ comments });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  addComment,
  getAllComments,
};
