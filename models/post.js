class Post {
    constructor() {
        this.posts = [];
        this.currentId = 1;
    }

    create(title, content, categoryId) {
        const newPost = {
            id: this.currentId++,
            title: title,
            content: content,
            createdAt: new Date(),
            categoryId: categoryId,
        };
        this.posts.push(newPost);
        return newPost;
    }

    getAll() {
        return this.posts;
    }

    getById(id) {
        return this.posts.find(post => post.id === parseInt(id));
    }

    getByCategory(categoryId) {
        return this.posts.filter(post => post.categoryId === parseInt(categoryId));
    }

    update(id, title, content) {
        const post = this.getById(id);
        if (post) {
            post.title = title;
            post.content = content;
            return post;
        }
        return null;
    }

    delete(id) {
        const index = this.posts.findIndex(post => post.id === parseInt(id));
        if (index !== -1) {
            this.posts.splice(index, 1);
            return true;
        }
        return false;
    }
}

module.exports = new Post();
