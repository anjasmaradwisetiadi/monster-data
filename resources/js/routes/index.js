import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: () => import('../components/ExampleComponent.vue')},
        { path: '/login', component: () => import('../pages/login/Login.vue')},
        { path: '/register', component: () => import('../pages/login/Register.vue')},
        { path: '/dashboard', component: () => import('../pages/server-page/ServerDashboard.vue')},
        { path: '/dashboard/:slug', component: () => import('../pages/server-page/ServerDetail.vue')},
        { path: '/dashboard/create', component: () => import('../pages/server-page/ServerCreate.vue')},
        { path: '/dashboard/:slug/edit', component: () => import('../pages/server-page/ServerCreate.vue')},
        { path: '/:pathMatch(.*)*', component: () => import('../components/PageNotFound.vue')},
    ]
})
export default router;