// controllers/postController.js
const Post = require('../models/post');
const Category = require('../models/category');
const Comment = require('../models/comment');

exports.index = (req, res) => {
    const posts = Post.getAll();
    const categories = Category.getAll();  // Fetch all categories
    res.render('index', { posts, categories });  // Render all posts along with categories
};

exports.show = (req, res) => {
    const post = Post.getById(req.params.id);
    const comments = Comment.getByPostId(req.params.id);
    // Fetch comments by post ID
    if (post) {
        res.render('show', { post, comments });  // Pass the post and comments to the view
    } else {
        res.status(404).send('Post not found');
    }
};

exports.createForm = (req, res) => {
    const categories = Category.getAll();  // Fetch all categories for the form
    res.render('create', { categories });
};

exports.create = (req, res) => {
    const { title, content, categoryId } = req.body;
    Post.create(title, content, categoryId);  // Create the new post with category
    res.redirect('/');
};

exports.editForm = (req, res) => {
    const post = Post.getById(req.params.id);
    const categories = Category.getAll();  // Fetch all categories for editing
    if (post) {
        res.render('edit', { post, categories });
    } else {
        res.status(404).send('Post not found');
    }
};

exports.edit = (req, res) => {
    const { title, content, categoryId } = req.body;
    const post = Post.update(req.params.id, title, content, categoryId);  // Edit post
    if (post) {
        res.redirect(`/post/${post.id}`);
    } else {
        res.status(404).send('Post not found');
    }
};

exports.delete = (req, res) => {
    const success = Post.delete(req.params.id);
    if (success) {
        res.redirect('/');
    } else {
        res.status(404).send('Post not found');
    }
};
