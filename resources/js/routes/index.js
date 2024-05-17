import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: () => import('../components/ExampleComponent.vue')},
        { path: '/login', component: () => import('../pages/login/Login.vue')},
        { path: '/register', component: () => import('../pages/login/Register.vue')},
        { path: '/schedule', component: () => import('../pages/server-page/ServerDashboard.vue')},
        { path: '/schedule/:slug', component: () => import('../pages/server-page/ServerDetail.vue')},
        { path: '/schedule/create', component: () => import('../pages/server-page/ServerCreate.vue')},
        { path: '/schedule/:slug/edit', component: () => import('../pages/server-page/ServerCreate.vue')},
        // need delete example pop up dialog
        { path: '/dialog', component: () => import('../components/LoadingAndAlert.vue')},
        { path: '/:pathMatch(.*)*', component: () => import('../components/PageNotFound.vue')},
    ]
})
export default router;