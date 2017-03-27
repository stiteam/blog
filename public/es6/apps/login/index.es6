/**
 * 登录
 * 功能: 登录页面
 * @author: lzhbupt@163.com
 * @time: 2017年03月22日10:57:36
 */

import template from 'text!./view.html';
import 'css!./style.min';
import {User} from '../../commons/user';

export default {

    template,

    data() {
        return {
            username: '',
            password: ''
        }
    },

    created() {
        User.getLoginInfo().then( (res) => {
            console.log(res, 1);
        })
    },

    mounted() {
        $('#username').focus();
    },

    methods: {
        login() {
            let postData = {
                username: this.username,
                password: this.password
            };

            $.post('/api/login', postData, (res) => {
                if (res.status == -1) {
                    this.$parent.$emit('alert', res.message, 'danger');
                } else if (res.status == 200) {
                    this.$router.push('/admin');
                    this.$parent.$emit('alert', res.message, 'success');
                } else {
                    this.$parent.$emit('alert', res.message, 'danger');
                }
            });
        }
    }

}