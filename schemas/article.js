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
    /**
     * 根据文章id获取文章数据
     * @param  {[type]}   id [description]
     * @param  {Function} cb [description]
     * @return {[type]}      [description]
     */
    findById: function (id, cb) {
        return this
            .find({id: id})
            .exec(cb)
    },
    /**
     * 根据page和limit获取分页文章数据
     * @param  {[type]}   page  [description]   
     * @param  {[type]}   limit [description]
     * @param  {Function} cb    [description]
     * @return {[type]}         [description]
     */
    fetch: function (page, limit, cb) {
        return this
            .find()
            .sort({createTime: -1})
            .skip(page * limit)
            .limit(limit)
            .exec(cb)
    },

    findAll: function (cb) {
        return this
            .find({})
            .exec(cb)
    }
};

module.exports = articleSchema;