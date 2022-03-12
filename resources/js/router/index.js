import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);
import Home from '../pages/Home.vue'

import CategoryList from '../pages/category/Index.vue'

import CreateCategory from '../pages/category/CreateCategory.vue'
const routes =new VueRouter({


    mode:'history',
    routes:[

        {

            path:'/',
            name:'home',
            component:Home,
        },
        {

            path:'/category',
            name:'category-list',
            component:CategoryList,
        },
        {

            path:'/category/create',
            name:'create-category',
            component:CreateCategory,
        },
    ]
} );

export default routes;
