const BlogPost = require("../models/post");

const createPost = async (req, res) => {
  try {
    const { title, content, categories, tags } = req.body;

    const blogPost = new BlogPost({
      title,
      content,
      author: req.user.userId,
      categories,
      tags,
    });
    await blogPost.save();

    res.status(201).json(blogPost);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const blogPosts = await BlogPost.find();
    res.status(200).json(blogPosts);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createPost,
  getAllPosts,
};
