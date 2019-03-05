import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home';
import Destination from '@/components/destination/destination';
import Plan from '@/components/plan/plan';
import My from '@/components/my/my';
import GroupTour from '@/components/home/groupTour/groupTour';
import Details from '@/components/home/details/details';
<<<<<<< HEAD
import Login from '@/components/my/components/login'
import Register from '@/components/my/components/register'
import store from '../store';
import {getCookie,setCookie} from '@/utils/utils';

=======
import Login from '@/components/my/components/login';
import Register from '@/components/my/components/register';
import DestinationDetails from'@/components/home/destinationDetails/destinationDetails'
import Search from "@/components/home/search/search"
import FreedomTour from "@/components/home/freedomTour/freedomTour"
>>>>>>> zhangyue

Vue.use(Router)

const router = new Router({
  routes: [
  	{
  		path:'/',
  		redirect:"/home",
  		meta:{
				Auth:true
			}
  	},
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta:{
				Auth:true
			}
      
    },
    {
      path: '/destination',
      name: 'destination',
      component: Destination,
      meta:{
				Auth:true
			}
    },
    {
      path: '/plan',
      name: 'plan',
      component: Plan,
      meta:{
				Auth:true
			}
    },
    {
      path: '/my',
      name: 'my',
      component: My,
      meta:{
				Auth:true
			}
    },
    //home中组团游的页面
    {
    	path:'/groupTour',
    	name: 'groupTour',
    	component:GroupTour,
    	meta:{
				Auth:false
			}
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
    	component:Details,
    	meta:{
				Auth:false
			}
    },
    {
    	path:"/login",
    	name:'login',
    	component:Login,
    	meta:{
				Auth:false
			}
    },
    {
    	path:"/register",
    	name:'register',
    	component:Register,
    	meta:{
				Auth:false
			}
    },
<<<<<<< HEAD
    
=======
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
>>>>>>> zhangyue
 ]
})

router.beforeEach((to,from,next)=>{
	let flag = to.meta.Auth;
	setCookie("state",flag);
	next();
//	if(to.meta.Auth){
//		if(getCookie("X-token")){
//			next();
//		}else{
//			next("/login",()=>{
//				
//			});
//		}
//	}else{
//		next();
//	}
})

export default router;