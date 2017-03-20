var express = require('express');
var mongoose = require('mongoose');
var Article = require('../models/article');
var router = express.Router();

/* GET home page. */
router.get('/getArticle/:id', function(req, res, next) {
    var m = new Article({
        author: 'STI',
        title: '测试文章',
        content: '',
        meta: {
            createTime: {
                type: Date,
                default: Date.now()
            },
            updateTime: {
                type: Date,
                default: Date.now()
            }
        }
    })
    // res.render('index', { title: 'STI team' });
    // res.render('index');
    res.json({
        code: req.params.id
    })
});

module.exports = router;
