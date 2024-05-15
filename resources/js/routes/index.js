import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: () => import('../components/ExampleComponent.vue')},
        { path: '/dashboard', component: () => import('../components/ExampleComponent.vue')},
        { path: '/:pathMatch(.*)*', component: () => import('../components/PageNotFound.vue')},
    ]
})
export default router;