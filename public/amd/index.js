define(['exports', 'text!./view.html', 'vue', 'vue-router', './apps/home/index', './components/notFound/index'], function (exports, _view, _vue, _vueRouter, _index, _index3) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _view2 = _interopRequireDefault(_view);

    var _vue2 = _interopRequireDefault(_vue);

    var _vueRouter2 = _interopRequireDefault(_vueRouter);

    var _index2 = _interopRequireDefault(_index);

    var _index4 = _interopRequireDefault(_index3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    _vue2.default.use(_vueRouter2.default); /**
                                             * App根组件
                                             * 功能: 负责主视图的切换，错误页面处理
                                             * @author: lzhbupt@163.com
                                             * @time: 2017年03月02日17:21:58
                                             */

    // import 'css!./commons/reset.min';

    var app = new _vue2.default({

        el: '#app',

        router: new _vueRouter2.default({
            mode: 'history',
            routes: [{ path: '/', component: _index2.default }, { path: '/home', component: _index2.default }, { path: '*', component: _index4.default }
            // { path: '/bar', component: Bar }
            ]
        }),

        data: function data() {
            return {
                a: 1
            };
        },


        template: _view2.default,

        created: function created() {
            console.log(this.a);
        },
        mounted: function mounted() {
            console.log('b');
        }
    });

    exports.default = app;
});
//# sourceMappingURL=map/index.js.map
