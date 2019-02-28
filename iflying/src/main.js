// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '@/common/css/reset.css'
import '@/common/js/flexble.js'


import { Button,Tabbar, TabItem,Search} from 'mint-ui'
import '@/common/css/footer.scss';
import '@/common/css/destination.scss'


Vue.component(Button.name, Button)
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Search.name, Search);

Vue.prototype.observer = new Vue();


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
store,
  components: { App },
  template: '<App/>'
})
