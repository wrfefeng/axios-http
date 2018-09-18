// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import * as httpHandle from './http/index'

Vue.config.productionTip = false
Vue.prototype.$get = httpHandle.getHandle
Vue.prototype.$post = httpHandle.postHandle
Vue.prototype.$delete = httpHandle.deleteHandle
Vue.prototype.$patch = httpHandle.patchHandle
Vue.prototype.$all = httpHandle.allHandle

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
