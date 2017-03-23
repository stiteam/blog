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
            alertList: [],
            alertCnt: 0
        }
    },


    methods: {

        alert(message, type) {
            console.log(this.alertList)
            if (this.alertList.length >= this.max) {
                this.alertList.splice(0, this.alertList.length - this.max + 1);
            }
            let num = this.alertCnt ++;
            this.alertList.push({'message': message, 'number': num, 'type': this.typeFormatter(type ||'success')});
            // this.remove();
            setTimeout( () => {
                this.remove(num);
            }, 2000)
        },

        typeFormatter(type) {
            return 'alert-' + type;
        },

        remove(cnt) {
            // console.log(cnt, 'cnt');
            // console.log(this.alertList, 'alertList');
            for (let i in this.alertList) {
                if (this.alertList[i].number == cnt) {
                    this.alertList.splice(i, 1);
                }
            }
            // console.log(this.alertList);
            // this.alertList.splice(0, 1);
        }

    },

    computed : {

        // empty() {
        //     return this.alertList.length > 0;
        // }
        
    }

}
