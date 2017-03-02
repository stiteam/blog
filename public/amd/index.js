define(['exports', 'text!./view.html', 'vue'], function (exports, _view, _vue) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _view2 = _interopRequireDefault(_view);

    var _vue2 = _interopRequireDefault(_vue);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    /**
     * App根组件
     * 功能: 负责主视图的切换，错误页面处理
     * @author: lzhbupt@163.com
     * @time: 2017年03月02日17:21:58
     */

    var app = new _vue2.default({

        el: '#wrap',

        template: _view2.default,

        created: function created() {
            console.log('a');
        }
    });

    exports.default = app;
});
//# sourceMappingURL=map/index.js.map
