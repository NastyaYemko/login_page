import {createRouter, createWebHistory} from "vue-router";
import LogInPage from "../pages/LogInPage";
import RegistrationPage from "../pages/RegistrationPage";

const routes = [
    {
        path: '/',
        component: LogInPage
    },
    {
        path: '/registration',
        component: RegistrationPage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router
