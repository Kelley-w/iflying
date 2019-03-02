import http from '../utils/http';
//注册
export const handleRegister = (params)=>http("post","http://localhost:3000/data",params)
export const getRegisters = (params)=>http("get","http://localhost:3000/data",params)
