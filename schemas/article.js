var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
    name: String
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
}

module.exports = articleSchema;