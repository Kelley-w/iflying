import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home';
import Destination from '@/components/destination/destination';
import Plan from '@/components/plan/plan';
import My from '@/components/my/my';
import GroupTour from '@/components/home/groupTour/groupTour';
import Details from '@/components/home/details/details';
import Login from '@/components/my/components/login';
import Register from '@/components/my/components/register';
import DestinationDetails from'@/components/home/destinationDetails/destinationDetails'
import Search from "@/components/home/search/search"
import FreedomTour from "@/components/home/freedomTour/freedomTour"

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
    //home中自助游的页面
    {
    	path:"/freedomTour",
    	name:"freedomTour",
    	component:FreedomTour
    },
    //每个商品详情页面
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
    //目的地一些商品列表
    {
    	path:'/destinationDetails',
    	name:'destinationDetails',
    	component:DestinationDetails
    },
    //搜索页面
    {
    	path:'/search',
    	name:'search',
    	component:Search
    }
 ]
})
