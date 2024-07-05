import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import './style.css'
import App from './App.vue'

const base_url = import.meta.env.BASE_URL
const router = createRouter({
    history: createWebHistory(base_url),
    routes: [
      { path: '/', name: 'Home', component: () => import('./views/Home.vue') },
      { path: '/about', name: 'About', component: () => import('./views/About.vue') },
      { path: '/courses', name: 'Courses', component: () => import('./views/Courses.vue') },
      { path: '/contact', name: 'Contact', component: () => import('./views/Contact.vue') },
      { path: '/team', name: 'Team', component: () => import('./views/Team.vue') },
      { path: '/testimonials', name: 'Testimonials', component: () => import('./views/Testimonials.vue') },
      { path: '/404', name: 'NotFound', component: () => import('./views/NotFound.vue') },
    ]
  });
  
  const app = createApp(App);
  
  app.use(router);
  app.mount('#app');