const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;