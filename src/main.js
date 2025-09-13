import { createApp } from 'vue'
import App from './App.vue'
// import the router
import router from './router'
import './assets/main.css'

// create App variable
const app = createApp(App)
// user the router
app.use(router)
app.mount('#app')

