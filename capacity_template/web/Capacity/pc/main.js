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

var app = new Vue(config).$mount('#page');
$('#page').removeClass("__hide");
$('.app-loading').removeClass('app-loading-show');