import { createRouter, createWebHistory, RouterView } from 'vue-router';
import Trans from '@/translation.js'


const routes = [
    {
        path: "/:locale?",
        component: RouterView,
        beforeEnter: Trans.routeMiddleware,
        children: [
        {
        path: '',
        name: 'home',
        component: () => import('./components/HomePage.vue'),
    },
    {
        path: 'about',
        name: 'about',
        component: () => import('./components/AboutPage.vue'),
    },
    {
        path: 'portfolio',
        name: 'portfolio',
        component: () => import('./components/PortfolioPage.vue'),
    },
    {
        path: 'skills',
        name: 'skills',
        component: () => import('./components/SkillsPage.vue'),
    },
    {
        path: 'contact',
        name: 'contact',
        component: () => import('./components/ContactPage.vue'),
    },
        ]
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes,
    scrollBehavior() {
        return { top: 0, left: 0, behavior: 'smooth' };
    },
});

export default router;