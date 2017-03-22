/**
 * alerts组件
 * 功能: alerts组件
 * @author: lzhbupt@163.com
 * @time: 2017年03月22日16:05:04
 */

import template from 'text!./view.html';
import 'css!./style.min';

export default {

    template,

    props: {
        alertShow: false,
        max: {
            type: Number,
            default: 5
        }
    },

    data() {
        return {
            alertList: []
        }
    },


    methods: {

        alert(message, type) {
            if (this.alertList.length >= this.max) {
                this.alertList.splice(0, this.alertList.length - this.max + 1);
            }
            this.alertList.push({'message': message, 'type': this.typeFormatter(type ||'success')});
        },

        typeFormatter(type) {
            return 'alert-' + type;
        },

        remove(index) {
            this.alertList.splice(index, 1);
        }

    },

    computed : {

        empty() {
            return this.alertList.length > 0;
        }
        
    }

}
