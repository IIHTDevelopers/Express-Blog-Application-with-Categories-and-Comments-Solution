class Comment {
    constructor() {
        this.comments = [];
        this.currentId = 1;
    }

    create(postId, author, content) {
        const newComment = {
            id: this.currentId++,
            postId: postId,
            author: author,
            content: content,
            createdAt: new Date(),
        };
        this.comments.push(newComment);
        return newComment;
    }

    getByPostId(postId) {
        return this.comments.filter(comment => parseInt(comment.postId) === parseInt(postId));
    }
}

module.exports = new Comment();
