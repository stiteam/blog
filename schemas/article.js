var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
    author: String,
    title: String,
    content: String,
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
});

articleSchema.pre('save', function (next) {
    if (this.isNew) {
        this.meta.createTime = this.meta.updateTime = Date.now();
    } else {
        this.meta.updateTime = Date.now();
    }
})

articleSchema.statics = {
    fetch: function (callback) {
        return this
            .find({})
            .sort('meta.updateTime')
            .exec(callback)
    },
    findById: function (id, callback) {
        return this
            .findOne({_id: id})
            .exec(callback)
    }
}

module.exports = articleSchema;