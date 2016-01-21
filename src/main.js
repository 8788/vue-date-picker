import Vue from 'vue';
import App from './demo';

Vue.config.debug = true;

/* eslint-disable no-new */
new Vue({
    el: 'body',
    components: { App }
});
