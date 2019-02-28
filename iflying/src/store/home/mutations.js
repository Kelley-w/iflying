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
		
	}
}