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
            title: '',
            createTime: 1495872890000,
            modifyTime: 1495872890000,
            content: 'i am a ~~tast~~ **test**.'
        };
    },

    created() {
        let self = this;

        // this.content = marked(this.content);
        $.get('/api/getArticle', {id: this.id}, (res) => {
            if (res.status == 200) {
                let data = res.data;
                self.title = data.title;
                self.createTime = data.createTime;
                self.content = marked(data.content);
            }
        });
    },

    mounted() {
    }

};