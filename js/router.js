import Vue from 'vue';
import VueRouter from 'vue-router';

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const routes = [
    { path: '/', component: require('home')},
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
];

Vue.use(VueRouter); // This makes all the magic hapen and Vue recognizes the router-view and router-link

const router = new VueRouter({
    routes,
});

new Vue({
    el: '#app',
    router,
});