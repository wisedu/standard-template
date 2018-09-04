import route from './private-router.js';

var router = window.TG_MergePublicRouter(route.routes);

let config = {
    data() {
        return {};
    },
    created() {
    },
    mounted() {

    },
    router
};
console.log(config)
var app = new Vue(config).$mount('#page');
document.querySelector('#page').classList.remove('__hide')
document.querySelector('.app-loading').classList.remove('app-loading-show')
