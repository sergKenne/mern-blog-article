const express = require('express');
const router = express.Router();
const Article = require("../models/Article");

// GET ALL ARTICLES
router.get("/", async (req, res) => {
    try {
        const articles = await Article.find().sort({ date: -1 });
            if(!articles) throw error("no articles");
            res.status(200).json(articles);
    } catch(err) {
        res.status(400).json({message: err.message})
    }
});

//GET ONE ARTICLE
router.get("/:id", async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        if(!article) throw error("Article no found");
        res.status(200).json(article);
    } catch(err) {
        res.status(400).json({msg: err.message});
    }
})

// POST ARTICLE
router.post("/add", async (req, res) => {
    const newArticle = new Article({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description            
    });

    try {
        const article = await newArticle.save();
        if(!article) throw error("Something went wrong saving the article");
        res.status(200).json(article)
    } catch(err) {
        res.status(400).json({msg: err.message});
    }
});

//UPDATE ARTICLE
router.put("/update/:id", async (req, res) => {
    try {
        
        const article = await Article.findById(req.params.id);
        if(!article) throw error ("article not founded")

        article.title = req.body.title;
        article.author = req.body.author;
        article.description = req.body.description;

        const updated = await article.save();
        if(!updated) throw error("fail updated")
        res.status(200).json(updated);
    } catch(err) {
        res.status(400).json({msg: err.message});
    }
});

//DELETE ARTICLE

router.delete("/delete/:id", async (req, res) => {
    try {
        const removed = await Article.findByIdAndDelete(req.params.id);
        if(!removed) throw error("Something went wrong while trying to delete the item");
        res.status(200).json(removed)
    } catch(err) {
        res.status(400).json({msg: err.message, success: false});
    }
})



module.exports = router;