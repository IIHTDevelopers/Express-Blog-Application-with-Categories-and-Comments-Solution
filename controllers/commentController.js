// controllers/commentController.js
const Comment = require('../models/comment');

exports.create = (req, res) => {
  const { postId, author, content } = req.body;
  Comment.create(postId, author, content);  // Create the comment
  res.redirect(`/post/${postId}`);  // Redirect to the post page where the comment was added
};
