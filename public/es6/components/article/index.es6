/**
 * 首页视图
 * 功能: 文章页面
 * @author: lzhbupt@163.com
 * @time: 2017年03月05日18:20:20
 */

import template from 'text!./view.html';

export default {

    template,

    data() {
        return {
            id: this.$route.params.id,
        };
    },

    created() {
        console.log(this.id, 1);
    },

    mounted() {
        console.log(this.id);
    }

};