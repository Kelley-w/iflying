import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home';
import Destination from '@/components/destination/destination';
import DestDetails from '@/components/destination/components/dest_details';
import Plan from '@/components/plan/plan';
import My from '@/components/my/my';
import Login from '@/components/my/components/login'
import Register from '@/components/my/components/register'



Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path:'/',
  		redirect:"/home"
  	},
    {
      path: '/home',
      name: 'home',
      component: Home
//    conponent:(resolve)=>require("../components/home/home",resolve)
    },
    {
      path: '/destination',
      name: 'destination',
      component: Destination
    },
    {
      path: '/plan',
      name: 'plan',
      component: Plan
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
    	path:"/login",
    	name:'login',
    	component:Login
    },
    {
    	path:"/register",
    	name:'register',
    	component:Register
    },
    {
    	path:'/destDetails',
    	name:'destDetails',
    	component:DestDetails
    }
  ]
})
