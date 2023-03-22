import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Main from './components/main.vue'
import Form from './components/form.vue'
import Facts from './components/facts.vue'


const app = createApp(App)

const router = createRouter({
    history: createWebHistory(), // il modo in cui salva i cambiamenti della pagina 
    routes: [
        { path : '/' , component : Main},
        { path : '/form' , component : Form},
        { path : '/facts' , component : Facts}
    ]
});

app.use(router);

app.mount('#app')