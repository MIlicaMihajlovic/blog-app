import VueRouter from 'vue-router';
import Vue from 'vue';
import AppPosts from './components/AppPosts.vue';
import SinglePost from './components/SinglePost.vue'

Vue.use(VueRouter);

const routes = [
    {path: '/', redirect: '/posts'},
    {path: '/posts', component: AppPosts, name: 'posts'},
    {path: '/posts/:id', component: SinglePost, name: 'single-post'}
]

export const router = new VueRouter({
    mode: 'history',
    routes  
});