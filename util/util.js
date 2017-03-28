/**
 * 常用工具函数
 * @author: lzhbupt@163.com
 * @time: 2017年03月27日18:39:16
 */

var express = require('express');
var router = express.Router();

module.exports = {

    // 检查权限接口
    checkPrivilege: function (req, res, next) {
        if (!req.session.uid) {
            res.json({
                status: -1,
                message: '请登录'
            });
        }
    }

}