import {createRouter, createWebHistory} from "vue-router";
import Exercices from "../views/Exercices.vue";
import Informations from "../views/Informations.vue";

const routes = [
    {
        path: '/exercises',
        name: 'Exercises',
        component: Exercices,
        meta: {
            keepalive: true
        }
    },
    {
        path: '/infos',
        name: 'Infos',
        component: Informations
    },
    {
        path: '/',
        redirect: '/exercises'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router