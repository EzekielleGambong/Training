const express = require("express");
const BlogPost = require("../models/post");
const PostController = require("../controllers/postController");
const authMiddleware = require("./authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, PostController.createPost);
router.get("/", PostController.getAllPosts);

module.exports = router;
