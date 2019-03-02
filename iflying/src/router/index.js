import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home';
import Destination from '@/components/destination/destination';
import Plan from '@/components/plan/plan';
import My from '@/components/my/my';
import GroupTour from '@/components/home/groupTour/groupTour';
//import Details from '@/components/home/details/details';
import Details from '@/components/home/details/details';
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
    }
    
 ]
})
