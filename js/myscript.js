const routes = [
    { path: '/poll', component: httpVueLoader('pollindex.vue'), props: true },
    { path: '/poll/create', component: httpVueLoader('pollcreate.vue'), props: { create: true } },
    { path: '/poll/:id', component: httpVueLoader('polldetails.vue'), props: { show: true } },
    { path: '/busqueda', component: httpVueLoader('pollsearch.vue'), props: true },
    { path: '/participacion', component: httpVueLoader('pollparticipacion.vue'), props: true },
    { path: '/help', component: httpVueLoader('pollhelp.vue'), props: true },
    { path: '/login', component: httpVueLoader('pollLogin.vue'), props: true }
]

const router = new VueRouter({
    routes: routes
})

const app = new Vue({
    router,
    el: "#app",
    data: {
        titulo: "Proyecto2: Esteban Espinoza & Marco Murillo"
    }
}).$mount('#app')