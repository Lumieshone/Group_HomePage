import Vue from 'vue'
import loading from './loading.vue';
//使用extend创建的是一个组件构造器
const loadingConstructor = Vue.extend(loading);
//实例化组并创建一个div
let instance= new loadingConstructor({
    el:document.createElement('div')
});
const newLoading ={
    show() { // 接受传递过来的问题，调用此方法时同事显示弹窗
        instance.show = true;
        document.body.appendChild(instance.$el);
    },
    hide() { // 隐藏方法
        instance.show = false
    }
}
const install= function(){
    if (!Vue.$loading) {
        Vue.$loading = newLoading;
    }
    Vue.mixin({
        created() {
            this.$loading = Vue.$loading
        }
    })
}
export default install;
