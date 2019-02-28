<template>
	<div class="hello">
		<Index_search></Index_search>

		<div class="wrapper homeWrapper" ref="homeWrapper">
			<div class="content">
				<Banner_swiper></Banner_swiper>
				<Index_nav></Index_nav>
				<Index_content></Index_content>
				<Index_littleAd></Index_littleAd>
				<Index_city></Index_city>
				<Index_goods></Index_goods>
			</div>
		</div>

	</div>
</template>

<script>
	import Vuex from 'vuex';
	import Index_search from "./components/index_search";
	import Banner_swiper from "./components/banner_swiper";
	import Index_nav from "./components/index_nav";
	import Index_content from "./components/index_content";
	import Index_littleAd from "./components/index_littleAd";
	import Index_city from "./components/index_city";
	import Index_goods from "./components/index_goods";
	import BScroll from "better-scroll";
	export default {
		components: {
			"Index_search": Index_search,
			"Banner_swiper": Banner_swiper,
			"Index_nav": Index_nav,
			"Index_content": Index_content,
			"Index_littleAd": Index_littleAd,
			"Index_city": Index_city,
			"Index_goods": Index_goods
		},
		created() {
			this.handleHomeDataSwiper();
			this.handleHomeDataRecommendContent();
			this.handleHomeDataLittleAd();
			this.handleHomeDataGoodsList();
		},
		computed: {
			...Vuex.mapState({
				state: state => state.home
			})
		},
//		watch: {
//			state: {
//				handler() {
//					if(!this.scroll) {
//						this.scroll = new BScroll(this.$refs.homeWrapper,{
//							tap:true
//						});
//						console.log(this.scroll)
//					}
//
//				},
//				deep: true
//			}
//		},
		methods: {
			...Vuex.mapActions({
				//首页轮播
				handleHomeDataSwiper: "home/handleHomeDataSwiper",
				//推荐产品
				handleHomeDataRecommendContent: 'home/handleHomeDataRecommendContent',
				//首页小广告
				handleHomeDataLittleAd: "home/handleHomeDataLittleAd",
				//商品列表
				handleHomeDataGoodsList: "home/handleHomeDataGoodsList"
			})
		},
	}
</script>

<style scoped>

</style>