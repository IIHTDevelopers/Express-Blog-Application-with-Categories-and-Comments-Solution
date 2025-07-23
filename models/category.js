class Category {
    constructor() {
        this.categories = [];
        this.currentId = 1;
    }

    create(name) {
        const newCategory = {
            id: this.currentId++,
            name: name,
        };
        this.categories.push(newCategory);
        return newCategory;
    }

    getAll() {
        return this.categories;
    }

    getById(id) {
        return this.categories.find(category => category.id === parseInt(id));
    }
}

module.exports = new Category();
