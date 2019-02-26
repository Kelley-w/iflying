import http from '../utils/http';


//HomeData(params){
//	http(method,url,params)
//}
export const HomeData=(params)=>http("get","/api/Public/GetAdList?posid=5aa2268db0ae1c9477023056&stationid=1&typeid=&randomnumber=0.44789286418879515&fystid=nb",params)  //返回一个promise对象
