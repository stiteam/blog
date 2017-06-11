/**
 * 文章组件
 * 功能: 文章组件
 * @author: lzhbupt@163.com
 * @time: 2017年05月26日15:15:35
 */

import template from 'text!./view.html';
import 'css!./style.min';
import marked from 'marked';
import moment from 'moment';

export default {

    template,

    props: {
        id: {
            type: Number,
            required: true,
            validator: (value) => value >= 0
        },
        hasTitleLink: {
            type: Boolean,
            required: false,
            default: false
        },
        data: {
            type: Object,
            required: false
        }
    },

    data() {
        return {
            // id: this.$route.params.id,
            title: '',
            createTime: '',
            updateTime: '',
            category: '',
            content: ''
        };
    },

    created() {
        let self = this;

        if (this.data) {
            let data = this.data;

            this.title = data.title;
            this.createTime = moment(data.createTime).format('YYYY-MM-DD HH:mm:ss');
            this.category = data.category;
            this.content = marked(data.content);
        } else {
            $.get('/api/getArticle', {id: this.id}, (res) => {
                if (res.status == 200) {
                    let data = res.data;

                    self.title = data.title;
                    self.createTime = moment(data.createTime).format('YYYY-MM-DD HH:mm:ss');
                    self.category = data.category;
                    self.content = marked(data.content);
                }
            });
        }
    },

    mounted() {
    }

};