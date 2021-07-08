import Vue from 'vue';
import App from './App.vue';
import Antd, {message, Modal} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import moment from 'moment';
import * as utils from '@mono/common-utils';
import '@/assets/common.less';

Vue.config.productionTip = false;

Vue.use(Antd);

// window.utils = utils;

utils.utilsConfig.moment = moment;
utils.utilsConfig.modal = Modal;
utils.utilsConfig.message = {
    1: (msg) => message.success(msg),
    2: (msg) => message.warning(msg),
    3: (msg) => message.error(msg),
};

utils.ajaxConfig.domain.apiUrl = '';
utils.ajaxConfig.handleUnauthorized = (info) => {
    console.log(info);
};
utils.ajaxConfig.interceptParams = () => ({});
utils.ajaxConfig.interceptHeaders = () => ({});
utils.ajaxConfig.loadBefore = () => ({});
utils.ajaxConfig.loadAfter = () => ({});

// utils.showLoad();
// utils.apiGet();
// console.log(utils);


// 对 vi8n 进行二次封装
(Vue as IOBJ).prototype.$t2 = (str1: string, str2: string) => str2;

new Vue({
    render: h => h(App)
}).$mount('#app');
