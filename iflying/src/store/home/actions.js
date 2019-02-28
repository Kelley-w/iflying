import {HomeDataSwiper} from '@/apis/home';
import {HomeDataRecmmdContent} from '@/apis/home';
import {HomeDataLittleAd} from '@/apis/home';
import {HomeDataGoodsList} from '@/apis/home'
export default{
	//首页轮播的数据
	async handleHomeDataSwiper({commit}){
//		let params = {posid:5aa2268db0ae1c9477023056,stationid:1,typeid:,randomnumber:0.44789286418879515,fystid:nb}
<<<<<<< HEAD
		let data = await HomeDataSwiper();
		//console.log(data.data);
		commit("handleHomeDataSwiper",data.data);
	},
	//推荐产品的数据
	async handleHomeDataRecommendContent({commit}){
		let data = await HomeDataRecmmdContent()
		//console.log(data.data);
		commit("HomeDataRecmmdContent",data.data);
	},
	//首页小广告数据
	async handleHomeDataLittleAd({commit}){
		let data = await HomeDataLittleAd()
		//console.log(data.data);
		commit("handleHomeDataLittleAd",data.data);
	},
	//商品列表数据
	async handleHomeDataGoodsList({commit}){
		let data = await HomeDataGoodsList()
		console.log(data.data.LineList);
		commit("handleHomeDataGoodsList",data.data.LineList)
=======
		let data = await HomeData();
>>>>>>> wangdan
	}
}
