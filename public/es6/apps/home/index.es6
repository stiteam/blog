/**
 * 首页视图
 * 功能: 展示首页视图
 * @author: lzhbupt@163.com
 * @time: 2017年03月03日15:07:00
 */

import template from 'text!./view.html';
import articleComp from '../../components/article/index';
import infiniteScroll from 'vue-infinite-scroll';

export default {

    template,

    directives: {
        infiniteScroll
    },

    components: {
        'sti-article': articleComp
    },

    data() {
        return {
            articles: [],
            busy: false,
            page: 0,
            limit: 10,
            count: 0
        };
    },

    methods: {
        loadMore: function() {
            this.busy = true;
            let self = this;

            $.get('/api/getArticle', {page: this.page, limit: this.limit}, (res) => {
                if (res.status == 200) {
                    self.articles = self.articles.concat(res.data);
                    if (self.articles.length == 10) {
                        self.page ++;
                        self.busy = false;
                    } else {
                        // 没有数据了
                    }
                } else {
                    console.log(res.message);
                }
                console.log(self.articles);
            });
        }
    },

    created() {
    }

};