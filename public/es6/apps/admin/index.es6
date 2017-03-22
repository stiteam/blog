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

        $.getJSON('/api/loginInfo', (res) => {
            console.log(res);
            if (res.code == -1) {
                this.$router.push('/login');
            } else if (res.code == 200) {
                console.log('已登录');
            } else {
                console.log('出错了');
            }
        });

    }

}