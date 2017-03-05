define(['exports', 'text!./view.html', 'vue', 'vue-router', './apps/home/index', './apps/archives/index', './apps/tags/index', './apps/about/index', './apps/board/index', './components/article/index', './components/notFound/index', 'css!./commons/reset.min', 'css!./style.min'], function (exports, _view, _vue, _vueRouter, _index, _index3, _index5, _index7, _index9, _index11, _index13) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _view2 = _interopRequireDefault(_view);

    var _vue2 = _interopRequireDefault(_vue);

    var _vueRouter2 = _interopRequireDefault(_vueRouter);

    var _index2 = _interopRequireDefault(_index);

    var _index4 = _interopRequireDefault(_index3);

    var _index6 = _interopRequireDefault(_index5);

    var _index8 = _interopRequireDefault(_index7);

    var _index10 = _interopRequireDefault(_index9);

    var _index12 = _interopRequireDefault(_index11);

    var _index14 = _interopRequireDefault(_index13);

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

    _vue2.default.use(_vueRouter2.default);

    var app = new _vue2.default({

        el: '#app',

        router: new _vueRouter2.default({
            mode: 'history',
            routes: [{
                path: '/',
                component: _index2.default
            }, {
                path: '/home',
                component: _index2.default
            }, {
                path: '/archives',
                component: _index4.default
            }, {
                path: '/tags',
                component: _index6.default
            }, {
                path: '/about',
                component: _index8.default
            }, {
                path: '/board',
                component: _index10.default
            }, {
                path: '/article/:id',
                component: _index12.default
            }, {
                path: '*',
                component: _index14.default
            }]
        }),

        data: function data() {
            return {
                a: 'created'
            };
        },


        template: _view2.default,

        created: function created() {
            console.log(this.a);
        },
        mounted: function mounted() {
            console.log('mounted');
        }
    });

    exports.default = app;
});
//# sourceMappingURL=map/index.js.map
