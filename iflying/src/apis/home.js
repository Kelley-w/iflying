import http from '../utils/http';


//HomeData(params){
//	http(method,url,params)
//}
//首页的轮播接口
export const HomeDataSwiper=(params)=>http("get","/api/Public/GetAdList?posid=5aa2268db0ae1c9477023056&stationid=1&typeid=&randomnumber=0.44789286418879515&fystid=nb",params)  //返回一个promise对象
//推荐产品接口
export const HomeDataRecmmdContent=(params)=>http("get","/api/Public/GetProductRecmd?stationid=1&recmdid=5ab849d9b0ae1c6d4e02324c&ptypeid=&randomnumber=0.6954293577426613&fystid=nb",params)
//首页小广告
export const HomeDataLittleAd=(params)=>http("get","/api/Public/GetAdList?posid=5aa226c9b0ae1c5c7702305a&stationid=1&typeid=&randomnumber=0.18589279981086926&fystid=nb",params)
//商品列表
export const HomeDataGoodsList=(params)=>http("get","/api/line/list?Page=1&Size=99&Sort=1&DestinationID=000000000000000000000029&randomnumber=0.4845947791192562&fystid=nb",params)
