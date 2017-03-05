/**
 * App根组件
 * 功能: 负责主视图的切换，错误页面处理
 * @author: lzhbupt@163.com
 * @time: 2017年03月02日17:21:58
 */

import 'css!./commons/reset.min';
import 'css!./style.min';

import template from 'text!./view.html';
import Vue from 'vue';
import VueRouter from 'vue-router';
import home from './apps/home/index';
import archives from './apps/archives/index';
import tags from './apps/tags/index';
import about from './apps/about/index';
import board from './apps/board/index';
import article from './components/article/index';
import notFound from './components/notFound/index';

Vue.use(VueRouter);

let app = new Vue({

    el: '#app',

    router: new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '/',
                component: home
            }, {
                path: '/home',
                component: home
            }, {
                path: '/archives',
                component: archives
            }, {
                path: '/tags',
                component: tags
            }, {
                path: '/about',
                component: about
            }, {
                path: '/board',
                component: board
            }, {
                path: '/article/:id',
                component: article
            }, {
                path: '*',
                component: notFound
            }
        ]
    }),

    data() {
        return {
            a: 'created'
        }
    },

    template,

    created() {
        console.log(this.a);
    },

    mounted() {
        console.log('mounted');
    }

});

export default app;