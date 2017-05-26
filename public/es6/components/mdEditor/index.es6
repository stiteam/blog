/**
 * markdown文章编辑器
 * 功能: 添加markdown文章
 * @author: lzhbupt@163.com
 * @time: 2017年05月26日15:20:20
 */

import template from 'text!./view.html';
import SimpleMDE from 'simplemde';
import 'css!simplemde/dist/simplemde.min';

export default {

    template,

    data() {
        return {
            id: this.$route.params.id,
            // md: marked('i am a ~~tast~~ **test**.')
        };
    },

    created() {
        // console.log(this.id, 1);
    },

    mounted() {
        let t = new SimpleMDE({
            element: $('#a')[0],
            // toolbarTips: false
        });
        t.value('i am a ~~tast~~ **test**.');
        // console.log($);
    }

};