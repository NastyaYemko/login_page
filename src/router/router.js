import {createRouter, createWebHistory} from "vue-router";
import App from "../App";

const routes = [
    {
        path: '/',
        component: App
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router
