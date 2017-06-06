/**
 * 首页视图
 * 功能: 文章页面
 * @author: lzhbupt@163.com
 * @time: 2017年06月06日10:29:02
 */

import template from 'text!./view.html';
import articleComp from '../../components/article/index';

export default {

    template,

    data() {
        return {
            id: this.$route.params.id
        }
    },

    components: {
        'ati-article': articleComp
    }

};
