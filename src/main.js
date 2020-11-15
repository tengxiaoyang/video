import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import './style/common'
import './config/rem'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

import Swiper2, { Navigation, Pagination, Autoplay } from "swiper"; 
Swiper2.use([Autoplay, Navigation, Pagination]);

Vue.use(VueAwesomeSwiper)

Vue.use(VueRouter)
const router = new VueRouter({
	routes
})

new Vue({
	router,
	store,
}).$mount('#app')