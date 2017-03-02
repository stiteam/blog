/**
 * App根组件
 * 功能: 负责主视图的切换，错误页面处理
 * @author: lzhbupt@163.com
 * @time: 2017年03月02日17:21:58
 */

import template from 'text!./view.html';
import Vue from 'vue';

let app = new Vue({

    el: '#wrap',

    template,

    created(){
        console.log('a');
    }

});

export default app;