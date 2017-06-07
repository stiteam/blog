var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var articleSchema = require('../schemas/article');

articleSchema.plugin(autoIncrement.plugin, {
    model: 'article',
    field: 'id',
    startAt: 1,
});

var Article = mongoose.model('article', articleSchema);

module.exports = Article;