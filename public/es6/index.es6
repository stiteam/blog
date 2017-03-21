/**
 * App根组件
 * 功能: 负责主视图的切换，错误页面处理
 * @author: lzhbupt@163.com
 * @time: 2017年03月02日17:21:58
 */

import 'css!./commons/reset.min';
import 'css!./style.min';
import 'css!../node_modules/bootstrap/dist/css/bootstrap.min';

import template from 'text!./view.html';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

// import home from './apps/home/index';
// import archives from './apps/archives/index';
// import tags from './apps/tags/index';
// import about from './apps/about/index';
// import board from './apps/board/index';
// import admin from './apps/admin/index';

// import article from './components/article/index';
// import notFound from './components/notFound/index';

import $ from 'jQuery';

Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({

    state: {
    },

    mutations: {
    }
    
});

function asyncLoad(url) {
    return (resolve) => {
        require([url], function (comp) {
            resolve(comp.default);
        });
    }
}

const app = new Vue({

    el: '#app',

    router: new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '/',
                component: asyncLoad('amd/apps/home/index')
            }, {
                path: '/home',
                component: asyncLoad('amd/apps/home/index')
            }, {
                path: '/archives',
                component: asyncLoad('amd/apps/archives/index')
            }, {
                path: '/tags',
                component: asyncLoad('amd/apps/tags/index')
            }, {
                path: '/about',
                component: asyncLoad('amd/apps/about/index')
            }, {
                path: '/board',
                component: asyncLoad('amd/apps/board/index')
            }, {
                path: '/admin',
                component: asyncLoad('amd/apps/admin/index'),
                children: [
                    {
                        path: 'article',
                        component: asyncLoad('amd/apps/article/index')
                    }
                ]
            }, {
                path: '/article/:id',
                component: asyncLoad('amd/components/article/index')
            }, {
                path: '*',
                component: asyncLoad('amd/components/notFound/index')
            }
        ]
    }),

    data() {
        return {
            isAdmin: true,
            showMenu: false,
            appState: [
                {
                    name: '日志',
                    count: 0,
                    url: '/archives'
                }, {
                    name: '分类',
                    count: 0,
                    url: 'javascript:;'
                }, {
                    name: '标签',
                    count: 0,
                    url: '/tags'
                }
            ]
        }
    },

    template,

    watch: {
        $route(val, oldval) {
            if (val.path == '/admin') {
                this.isAdmin = true;
            } else {
                this.isAdmin = false;
            }
        }
    },

    created() {

        if (this.$route.path == '/admin') {
            this.isAdmin = true;
        }

        this.appMenu = [
            {
                name: '首页',
                url: '/home'
            }, {
                name: '归档',
                url: '/archives'
            }, {
                name: '标签',
                url: '/tags'
            }, {
                name: '关于',
                url: '/about'
            }, {
                name: '留言',
                url: '/board'
            }
        ]
    },

    methods: {

        collapse() {
            this.showMenu = !this.showMenu;
        }

    },

    mounted() {
    }

});

export default app;