import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/main.css'



// Import all of Bootstrap's JS
import 'bootstrap/dist/js/bootstrap.bundle'


createApp(App).use(store).use(router).mount('#app')
