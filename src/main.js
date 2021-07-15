import { createApp,Vue } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// Vue.prototype.$bus =new  Vue()
createApp(App).use(store).use(router).mount('#app')
