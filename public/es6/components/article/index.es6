/**
 * 首页视图
 * 功能: 文章页面
 * @author: lzhbupt@163.com
 * @time: 2017年05月26日15:15:35
 */

import template from 'text!./view.html';
import marked from 'marked';

export default {

    template,

    data() {
        return {
            id: this.$route.params.id,
            md: marked('i am a ~~tast~~ **test**.')
        };
    },

    created() {
    },

    mounted() {
    }

};