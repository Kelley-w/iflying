import http from '../utils/http';
//注册
//export const handleRegister = (params)=>{
//	axios({
//		method:"post",
//		url:"http://localhost:3000/data",
//		data:params
//	}).then(()=>{
//		
//	})
//}

export const getRegisters = (params)=>http("get","http://localhost:3000/data",params)
