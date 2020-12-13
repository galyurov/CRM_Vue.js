import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NewEstimate from "@/views/NewEstimate";
import Login from "@/views/Login";
import Calendar from "@/views/Calendar";
import store from "../store/index"
import Charges from "@/views/Charges";
import Inventory from "@/views/Inventory";
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        meta:{layout:'main',auth:true,title:'Home'},
        name: 'Home',
        component: Home
    },
    {
        path: '/new',
        meta:{layout:'main',auth:true,title:'New Estimate'},
        name: 'NewEstimate',
        component: NewEstimate
    },
    {
        path: '/charges',
        meta:{layout:'main',auth:true,title:'Charges'},
        name: 'Charges',
        component: Charges
    },
    {
        path: '/inventory',
        meta:{layout:'main',auth:true,title:'Inventory'},
        name: 'Inventory',
        component: Inventory
    },
    {
        path: '/auth',
        meta:{layout:'empty',title: 'Login'},
        name: 'auth',
        component: Login

    },
    {
        path: '/calendar',
        meta:{layout:'main',auth:true,title:'Calendar'},
        name: 'About',
        component: Calendar
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next)=> {
    const auth = store.state.auth || localStorage.apHash === '8472518'
    const requireAuth = to.matched.some(record => record.meta.auth )

    if(requireAuth && !auth){
        next('/auth')
    } else {
        next()
    }
})
router.beforeEach(async (to, from, next) => {
    const { title } = to.meta;
    const brand = "CRM";
    document.title = `${title ? title + " | " : ""}${brand}`;
    next();
});
export default router
