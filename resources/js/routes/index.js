import { createRouter, createWebHistory } from 'vue-router';
import store from '../store/index.js';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/schedule'},
        { path: '/login', component: () => import('../pages/login/Login.vue'), meta: {requiresUnauth: true}},
        { path: '/register', component: () => import('../pages/login/Register.vue'), meta: {requiresUnauth: true}},
        { path: '/schedule', component: () => import('../pages/server-page/ServerDashboard.vue'), meta: {requiresAuth: true}},
        { path: '/schedule/:slug', component: () => import('../pages/server-page/ServerDetail.vue'), meta: {requiresAuth: true}},
        { path: '/schedule/create', component: () => import('../pages/server-page/ServerCreate.vue'), meta: {requiresAuth: true}},
        { path: '/schedule/:slug/edit', component: () => import('../pages/server-page/ServerCreate.vue'), meta: {requiresAuth: true}},
        { path: '/:pathMatch(.*)*', component: () => import('../components/PageNotFound.vue'), meta: {requiresAuth: true} },
        // need delete example pop up dialog
        { path: '/dialog', component: () => import('../components/LoadingAndAlert.vue')},
    ]
})

router.beforeEach(function(to, _, next) {
    const getUser = JSON.parse(localStorage?.getItem('user'));
    const getToken = getUser?.token;

    const auth = to.meta.requiresAuth; 
    const unauth = to.meta.requiresUnauth; 

    if (auth && !getToken) {
      next('/login');
    } else if (unauth && getToken) {
      next('/schedule');
    } else {
      next();
    }
});

export default router;