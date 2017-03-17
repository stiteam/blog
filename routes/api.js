var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/getArticle/:id', function(req, res, next) {
    // res.render('index', { title: 'STI team' });
    // res.render('index');
    res.json({
        code: req.params.id
    })
});

module.exports = router;
