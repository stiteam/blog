/**
 * App根组件
 * 功能: 负责主视图的切换，错误页面处理
 * @author: lzhbupt@163.com
 * @time: 2017年03月02日17:21:58
 */

import 'css!./commons/reset.min';

import template from 'text!./view.html';
import Vue from 'vue';

let app = new Vue({

    el: '#wrap',

    data() {
        return {
            a: 1
        }
    },

    template,

    created() {
        console.log(this.a);
    },

    mounted() {
        console.log('b');
    }

});

export default app;