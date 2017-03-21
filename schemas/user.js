var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: String,
    privilege: {
        type: Number,
        default: 0
    }
});

userSchema.statics = {

    check: function (username, password, cb) {
        return this
            .findOne({username: username, password: password})
            .exec(cb)
    }

}

module.exports = userSchema;