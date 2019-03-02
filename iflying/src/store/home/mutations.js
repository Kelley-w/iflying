export default {
	handleHomeDataSwiper(state, data) {
		state.bannerImgs = data
	},
	HomeDataRecmmdContent(state, data) {
		state.contentProduct = data
	},
	handleHomeDataLittleAd(state, data) {
		state.littleAdImg = data
	},
	handleHomeDataGoodsList(state, data) {
		state.goodsList = data
	},
	
	//组团游页面推荐商品的数据
	handleGroupTourRecmmdData(state,data){
		state.groupTourRecmmd = data
	},
	handleGroupTourRecmmdAbroadData(state,data){
		state.groupTourRecmmd_abroad = data
	},
	handleGroupTourRecmmdDomesticData(state,data){
		state.groupTourRecmmd_domestic = data
	},
	handleGroupTourRecmmdArroundData(state,data){
		state.groupTourRecmmd_arround = data
	},
	handleGroupTourGoodsListData(state,data){
		state.productPlanList = data
	},
	handleGroupTourGoodsListAbroadData(state,data){
		state.productPlanListAbroad = data
	},
	handleGroupTourGoodsListDomesticData(state,data){
		state.productPlanListDomestic = data
	},
	handleGroupTourGoodsListArroundData(state,data){
		state.productPlanListArround = data
	}
}