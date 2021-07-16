import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import Distpicker from 'v-distpicker'

// createApp().component('v-distpicker', Distpicker);





createApp(App).use(store).use(router).mount('#app')
