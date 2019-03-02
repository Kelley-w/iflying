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


//组团游页面推荐商品热销接口
export const GroupTourRecmmdData=(params)=>http("get","/api/Public/GetProductRecmd?stationid=1&recmdid=5ab84a28b0ae1cb939023067&ptypeid=1&randomnumber=0.8059921336103775&fystid=nb",params)
//组团游页面推荐商品出境接口
export const GroupTourRecmmdAbroadData=(params)=>http("get","/api/Public/GetProductRecmd?stationid=1&recmdid=5ab84a32b0ae1cd5490232c0&ptypeid=1&randomnumber=0.3577937708009493&fystid=nb",params)
//组团游页面推荐商品国内接口
export const GroupTourRecmmdDomesticData=(params)=>http("get","/api/Public/GetProductRecmd?stationid=1&recmdid=5ab84a3bb0ae1cec35023089&ptypeid=1&randomnumber=0.48745121792006807&fystid=nb",params)
//组团游页面推荐商品周边接口
export const GroupTourRecmmdArroundData=(params)=>http("get","/api/Public/GetProductRecmd?stationid=1&recmdid=5ab84a43b0ae1ca5450232c9&ptypeid=1&randomnumber=0.07468775473860245&fystid=nb",params)
//组团游飞扬自组商品列表
export const GroupTourGoodsListData=(params)=>http("get","/api/line/list?Page=1&Size=10&Sort=4&AttributionIDS=000000000000000000000003&LineType=&randomnumber=0.5655889805619032&fystid=nb",params)
//出境跟团商品列表
export const GroupTourGoodsListAbroadData=(params)=>http("get","/api/line/list?Page=1&Size=10&Sort=4&AttributionIDS=&LineType=3&randomnumber=0.6304022369602813&fystid=nb",params)
//国内跟团商品列表
export const GroupTourGoodsListDomesticData=(params)=>http("get","/api/line/list?Page=1&Size=10&Sort=4&AttributionIDS=&LineType=2&randomnumber=0.007134680809815164&fystid=nb",params)
//周边跟团商品列表
export const GroupTourGoodsListArroundData=(params)=>http("get","/api/line/list?Page=1&Size=10&Sort=4&AttributionIDS=&LineType=1&randomnumber=0.8780938975830073&fystid=nb",params)


//商品详情的接口
export const GoodsDetails=(params)=>http("get","/api/line/detail?ProductID="+params+"&MobileUserToken=d14482cb9b74f39fe589ecf3138a47767686d6e80a42a3e77794d393f674912ca2b60bfb&randomnumber=0.7382405351265917&fystid=nb")
