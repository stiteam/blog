/**
 * 首页视图
 * 功能: 展示首页视图
 * @author: lzhbupt@163.com
 * @time: 2017年03月03日15:07:00
 */

import template from 'text!./view.html';
import infiniteScroll from 'vue-infinite-scroll';

export default {

    template,

    directives: {
        infiniteScroll
    },

    data() {
        return {
            data: [],
            busy: false,
            count: 0
        }
    },

    methods: {
        loadMore: function() {
            this.busy = true;

            setTimeout(() => {
                for (var i = 0, j = 10; i < j; i++) {
                    this.data.push({ name: this.count ++ });
                }
                this.busy = false;
            }, 1000);
        }
    }

};