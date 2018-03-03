import Vue from 'vue'
import store from './store/store'
import App from './App.vue'

/**
 * Project template render
 */
new Vue({
    el: '#App',
    store,
    render: t => t(App),
}); 