var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
    title: String,
    author: String,
    createTime: {
        type: Date,
        default: Date.now()
    },
    updateTime: {
        type: Date,
        default: Date.now()
    },
    tags: [String],
    type: {
        type: String,
        // 默认值为markdown，也可以为text
        default: 'markdown'
    },
    content: String
});

articleSchema.pre('save', function (next) {
    if (this.isNew) {
        this.createTime = this.updateTime = Date.now();
    } else {
        this.createTime = Date.now();
    }
    next();
});

articleSchema.statics = {
    fetch: function (cb) {
        return this
            .find({})
            .exec(cb)
    },
    findById: function (id, cb) {
        return this
            .findOne({_id: id})
            .exec(cb)
    }
};

module.exports = articleSchema;