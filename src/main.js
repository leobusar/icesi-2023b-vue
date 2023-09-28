import { createApp } from 'vue'
import  {createRouter, createWebHashHistory} from 'vue-router';
import { createPinia } from 'pinia'
import  piniaPersist from 'pinia-plugin-persistedstate'
import './style.css'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import routes from './config/routes';


const router =  createRouter({
    history: createWebHashHistory(),
    routes
})

const  pinia = createPinia()
pinia.use(piniaPersist)

createApp(App).use(vuetify).use(router).use(pinia).mount('#app')
