/**
 * 首页视图
 * 功能: 文章页面
 * @author: lzhbupt@163.com
 * @time: 2017年05月26日15:15:35
 */

import template from 'text!./view.html';
import 'css!./style.min';
import marked from 'marked';
import moment from 'moment';

export default {

    template,

    data() {
        return {
            id: this.$route.params.id,
            title: '',
            createTime: '',
            modifyTime: '',
            category: '',
            content: ''
        };
    },

    created() {
        let self = this;

        $.get('/api/getArticle', {id: this.id}, (res) => {
            if (res.status == 200) {
                let data = res.data;
                self.title = data.title;
                self.createTime = moment(data.createTime).format('YYYY-MM-DD HH:mm:ss');
                self.category = data.category;
                self.content = marked(data.content);
            }
        });
    },

    mounted() {
    }

};