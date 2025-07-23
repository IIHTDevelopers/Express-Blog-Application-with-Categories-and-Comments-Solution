// routes/index.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const commentController = require('../controllers/commentController');
const Category = require('../models/category');  // Import the Category model

// Post Routes
router.get('/', postController.index);  // Display all posts and categories
router.get('/post/:id', postController.show);  // Display a single post with comments
router.get('/create', postController.createForm);  // Form for creating a new post
router.post('/create', postController.create);  // Handle the form submission for a new post
router.get('/edit/:id', postController.editForm);  // Form for editing an existing post
router.post('/edit/:id', postController.edit);  // Handle form submission to edit post
router.get('/delete/:id', postController.delete);  // Delete a post

// Comment Routes
router.post('/comment', commentController.create);  // Handle adding a new comment

// Category Routes
router.get('/createCategory', (req, res) => {
  res.render('createCategory');  // Show category creation form
});
router.post('/createCategory', (req, res) => {
  const { name } = req.body;
  Category.create(name);  // Handle the creation of a new category
  res.redirect('/');  // Redirect back to homepage after creating category
});

module.exports = router;
