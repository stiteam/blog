var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Article = require('../models/article');
var User = require('../models/user');

router.get('/addUser', function () {
    var _user = new User({
        username: 'admin',
        password: 'admin123',
        privilege: 1
    })
    _user.save((err, article) => {
        if (err) {
            console.log(err);
        } else {
            res.json({
                data: 1
            })
        }
    })
});

router.get('/login', function (req, res, next) {
    User.check('admin', 'admin123', (err, user) => {
        if (err) {
            console.log(err);
            res.json({
                status: 500,
                message: 'server wrong'
            })
        } else {
            if (user) {
                req.session.uid = user._id;
                res.json({
                    status: 200,
                    // data: user,
                    message: 'login success'
                })
            } else {
                res.json({
                    status: -1,
                    msg: 'login failed'
                })
            }
        }
    })
});

router.get('/logout', function (req, res, next) {
    req.session.destroy(function(err) {
        if (err) {
            console.log(err);
        }
    })
    res.json({
        data: 'success'
    })
})

router.get('/loginInfo', function (req, res, next) {
    if (req.session.uid) {
        res.json({
            code: 200,
            data: {
                uid: req.session.uid
            },
            message: '已登录'
        })
    } else {
        res.json({
            code: -1,
            message: '未登录'
        })
    }
});

router.get('/getArticle/:id', function (req, res, next) {
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
            Article.fetch((err, article) => {
                if (err) {
                    console.log(err);
                } else {
                    res.json({
                        data: article
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
