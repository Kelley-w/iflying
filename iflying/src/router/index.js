import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home';
import Destination from '@/components/destination/destination';
import Plan from '@/components/plan/plan';
import My from '@/components/my/my';
import GroupTour from '@/components/home/groupTour/groupTour';
import Details from '@/components/home/details/details';

import Login from '@/components/my/components/login';
import Register from '@/components/my/components/register'
import store from '../store';
import {getCookie,setCookie} from '@/utils/utils';
import DestinationDetails from'@/components/home/destinationDetails/destinationDetails'
import Search from "@/components/home/search/search"
import FreedomTour from "@/components/home/freedomTour/freedomTour"


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
    	component:FreedomTour,
    	meta:{
				Auth:false
			}
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
    //目的地一些商品列表
    {
    	path:'/destinationDetails',
    	name:'destinationDetails',
    	component:DestinationDetails,
    	meta:{
				Auth:false
			}
    },
    //搜索页面
    {
    	path:'/search',
    	name:'search',
    	component:Search,
    	meta:{
				Auth:false
			}
    }

 ]
})

router.beforeEach((to,from,next)=>{
	const nextRoute = ['plan'];  //需要登录的页面
	let isLogin = getCookie("username");   //根据本地是否存储用户名来判断是否登录，
	if(nextRoute.indexOf(to.name)>=0){  //检测为需要登录的页面
		if(!isLogin){ //如果未登录(本地存储无用户名)，跳到登录页面
//			if(from.name === '')
			router.push({
				name:'login',
				params:{redirect:to.fullPath}
			})
		}else{   //已登录状态，正常跳转
			 next()
			 return
		}
	}
	next()
})

export default router;