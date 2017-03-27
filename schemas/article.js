var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
    title: String,
    author: String,
    time: {
        create: {
            type: Date,
            default: Date.now()
        },
        update: {
            type: Date,
            default: Date.now()
        }
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
        this.meta.create = this.meta.update = Date.now();
    } else {
        this.meta.update = Date.now();
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