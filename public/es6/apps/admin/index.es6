/**
 * 后台管理视图
 * 功能: 展示后台管理视图
 * @author: lzhbupt@163.com
 * @time: 2017年03月20日17:00:18
 */

import template from 'text!./view.html';
import 'css!./style.min';

export default {

    template,

    created() {

        this.adminMenu = [
            {
                name: '首页',
                url: '/admin/login'
            }, {
                name: '归档',
                url: '/admin/archives'
            }, {
                name: '标签',
                url: '/admin/tags'
            }, {
                name: '关于',
                url: '/admin/about'
            }, {
                name: '留言',
                url: '/admin/board'
            }
        ]

    }

}