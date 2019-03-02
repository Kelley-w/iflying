import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home';
import Destination from '@/components/destination/destination';
import DestDetails from '@/components/destination/components/dest_details';
import Plan from '@/components/plan/plan';
import My from '@/components/my/my';
import GroupTour from '@/components/home/groupTour/groupTour';
import Details from '@/components/home/details/details';
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
      component: Home,
      
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
    //home中组团游的页面
    {
    	path:'/groupTour',
    	name: 'groupTour',
    	component:GroupTour	
    },
    {
    	path:'/details',
    	name: 'details',
    	component:Details	
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
