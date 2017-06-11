var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Article = require('../models/article');
var User = require('../models/user');
var $util = require('../util/util');

router.get('/addUser', function (req, res, next) {
    $util.checkPrivilege(req, res, next);
    // var _user = new User({
    //     username: 'admin',
    //     password: 'admin123',
    //     privilege: 1
    // })
    // _user.save((err, article) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         res.json({
    //             data: 1
    //         })
    //     }
    // })
});

// 登录
router.post('/login', function (req, res, next) {
    User.check(req.body.username, req.body.password, (err, user) => {
        if (err) {
            console.log(err);
            res.json({
                status: 500,
                message: '服务器出错了！'
            })
        } else {
            if (user) {
                req.session.uid = user._id;
                req.session.privilege = user.privilege;
                res.json({
                    status: 200,
                    // data: user,
                    message: '登录成功！'
                })
            } else {
                res.json({
                    status: -1,
                    message: '用户名或密码错误！'
                })
            }
        }
    })
});

// 登出
router.get('/logout', function (req, res, next) {
    req.session.destroy(function(err) {
        if (err) {
            console.log(err);
        }
    })
    res.json({
        status: 200,
        message: '注销成功'
    })
})

// 查询登录信息
router.get('/loginInfo', function (req, res, next) {
    // var privilege = $util.checkPrivilege(req);
    if ($util.checkPrivilege(req) == -1) {
        res.json({
            status: -1,
            data: {
            },
            message: '未登录'
        });
    } else {
        res.json({
            status: 200,
            data: {
                uid: req.session.uid
            },
            message: '已登录'
        });
    }
});

router.get('/addArticle', function (req, res, next) {
    // res.render('index', { title: 'STI team' });
    // res.render('index');
    var privilege = $util.checkPrivilege(req);

    if (privilege == 1) {
        var _article = new Article({
            title: '测试',
            author: '李政华',
            tags: ['test'],
            content: 'I am a ~~tast~~ **test**.'
        });
        _article.save((err, article) => {
            if (err) {
                // console.log(err);
            } else {
                // console.log(article);
                Article.findAll((err, article) => {
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
    } else {
        res.json({
            status: -1,
            data: {
            },
            message: '没有权限'
        });
    }
});

/**
 * 获取文章的接口，仅有id时获取单篇文章，有id和limit的时候，获取从id开始之后的limit篇文章
 */
router.get('/getArticle', function (req, res, next) {
    console.log(req.query.page);
    if (req.query.id) {
        Article.findById(parseInt(req.query.id), (err, article) => {
            if (err) {
                console.log(err);
            } else {
                res.json({
                    status: 200,
                    data: article,
                    message: 'success'
                });
            }
        })
    } else if (req.query.page) {
        var limit = parseInt(req.query.limit) || 10;
        Article.fetch(parseInt(req.query.page), limit, (err, articles) => {
            if (err) {
                console.log(err);
            } else {
                res.json({
                    status: 200,
                    data: articles,
                    message: 'success'
                })
            }
        })
    } else {
        res.json({
            status: -1,
            data: {
            },
            message: '参数错误'
        })
    };
});

module.exports = router;
