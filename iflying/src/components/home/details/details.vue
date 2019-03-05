<template>
	<div class="details">
		<!--轮播图-->
		<Details_swiper :sendToSwiper="goodsDetails.BigPic"></Details_swiper>
		<Details_top :sendToTop="goodsDetails"></Details_top>
		<DetailsProduct :sendPro="goodsDetails.ProductFeatures"></DetailsProduct>
		<DetailsTrips :sendTrips="goodsDetails.LineTrip"></DetailsTrips>
	</div>
</template>

<script>
	//	import Vuex from 'vuex';
	import { GoodsDetails } from "@/apis/home";
	import Details_swiper from "./details_swiper";
	import Details_top from "./details_top";
	import DetailsProduct from './details_product';
	import DetailsTrips from './details_trips';
	export default {

		data() {
			return {
				goodsDetails: {}
			}
		},
		async created() {
			let {
				id
			} = this.$route.query;

			let data = await GoodsDetails(id)
			//console.log(data.data)
			this.goodsDetails = data.data
		},
		components: {
			"Details_swiper": Details_swiper,
			"Details_top": Details_top,
			DetailsProduct,
			DetailsTrips
		}

	}
</script>

<style>

</style>