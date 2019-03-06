//axios的二次封装
import axios from 'axios';
import qs from 'qs';
import {getCookie} from './utils';

const http = axios.create({
	//baseURL:"xxx"
	timeout:5000
})


//请求拦截  拦截是把传递的参数转为json形式
http.interceptors.request.use((config)=>{
//	if(method === 'post'){
//		config.data = qs.stringify(config.data)
//	}
	const token = getCookie("session");//获取cookie
	config.data = JSON.stringify(config.data);
	config.headers = {
		'Content-Type':'application/x-www-form-urlencoded'//设置跨域头部
	};
	if(token){
		config.params = {'token':token};
	};
	return config;
},(err)=>{
	return Promise.reject(err);
})


//响应拦截  拦截是把传递的参数转为json形式
http.interceptors.response.use((res)=>{
	return res.data;
},(err)=>{
	return Promise.reject(err);
})


//导出一个函数，并判断请求接口的方式  http就是axios，axios返回promise API 
export default (method,url,data=null)=>{
	if(method == 'post'){
		console.log(data)
		return http.post(url,data);  //就是axios.post方法  返回的是promise对象
	}else if(method == 'get'){
		return http.get(url,{params:data});
	}else{
		return;
	}
}
