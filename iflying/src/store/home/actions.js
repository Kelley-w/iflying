import {HomeDataSwiper} from '@/apis/home';
import {HomeDataRecmmdContent} from '@/apis/home';
import {HomeDataLittleAd} from '@/apis/home';
import {HomeDataGoodsList} from '@/apis/home';
import {GroupTourRecmmdData} from '@/apis/home';
import {GroupTourRecmmdAbroadData} from '@/apis/home';
import {GroupTourRecmmdDomesticData} from '@/apis/home';
import {GroupTourRecmmdArroundData} from '@/apis/home';
import {GroupTourGoodsListData} from "@/apis/home";
import {GroupTourGoodsListAbroadData} from "@/apis/home";
import {GroupTourGoodsListDomesticData} from "@/apis/home";
import {GroupTourGoodsListArroundData} from "@/apis/home";
import {GetFreedomGoodsData} from "@/apis/home";
export default{
	//首页轮播的数据
	async handleHomeDataSwiper({commit}){
//		let params = {posid:5aa2268db0ae1c9477023056,stationid:1,typeid:,randomnumber:0.44789286418879515,fystid:nb}

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
		//console.log(data.data.LineList);
		commit("handleHomeDataGoodsList",data.data.LineList)
	},
	//组团游推荐商品热销数据
	async handleGroupTourRecmmdData({commit}){
		let data = await GroupTourRecmmdData();
		//console.log(data.data)
		commit("handleGroupTourRecmmdData",data.data)
	},
	//推荐商品出境数据
	async handleGroupTourRecmmdAbroadData({commit}){
		let data = await GroupTourRecmmdAbroadData();
		//console.log(data.data);
		commit("handleGroupTourRecmmdAbroadData",data.data);
	},
	//推荐商品国内数据
	async handleGroupTourRecmmdDomesticData({commit}){
		let data = await GroupTourRecmmdDomesticData();
		//console.log(data.data);
		commit("handleGroupTourRecmmdDomesticData",data.data);
	},
	//推荐商品周边数据
	async handleGroupTourRecmmdArroundData({commit}){
		let data = await GroupTourRecmmdArroundData();
		//console.log(data.data);
		commit("handleGroupTourRecmmdArroundData",data.data);
	},
	//飞扬自组商品列表数据
	async handleGroupTourGoodsListData({commit}){
		let data = await GroupTourGoodsListData();
		//console.log(data.data);
		commit("handleGroupTourGoodsListData",data.data.LineList)
	},
	//出境跟团商品列表数据
	async handleGroupTourGoodsListAbroadData({commit}){
		let data = await GroupTourGoodsListAbroadData();
		//console.log(data.data);
		commit("handleGroupTourGoodsListAbroadData",data.data.LineList)
	},
	async handleGroupTourGoodsListDomesticData({commit}){
		let data = await GroupTourGoodsListDomesticData();
		//console.log(data.data);
		commit("handleGroupTourGoodsListDomesticData",data.data.LineList)
	},
	async handleGroupTourGoodsListArroundData({commit}){
		let data = await GroupTourGoodsListArroundData();
		//console.log(data.data);
		commit("handleGroupTourGoodsListArroundData",data.data.LineList)
	},
	//首页自助游的数据
	async handleGetFreedomGoodsData({commit}){
		let data = await GetFreedomGoodsData();
		//console.log(data.data);
		commit("handleGetFreedomGoodsData",data.data.LineList)
	},
}
