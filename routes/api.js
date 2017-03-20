var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Article = require('../models/article');

/* GET home page. */
router.get('/getArticle/:id', function(req, res, next) {
    // res.render('index', { title: 'STI team' });
    // res.render('index');
    var _article = new Article({
        name: 'lizhenghua'
    });
    _article.save((err, article) => {
        if (err) {
            // console.log(err);
        } else {
            // console.log(article);
            Article.fetch((err, articles) => {
                if (err) {
                    console.log(err);
                } else {
                    res.json({
                        data: articles
                    })
                }
            })
        }
    })
    // res.json({
    //     code: req.params.id
    // })
});

module.exports = router;
