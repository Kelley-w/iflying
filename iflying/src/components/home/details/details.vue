<template>
	<div class="details">
		<!--轮播图-->
		<Details_swiper :sendToSwiper="goodsDetails.BigPic"></Details_swiper>
		<Details_top :sendToTop="goodsDetails"></Details_top>
		<DetailsProduct :sendPro="goodsDetails.ProductFeatures"></DetailsProduct>
		<DetailsTrips :sendTrips="goodsDetails"></DetailsTrips>
	</div>
</template>

<script>
	//	import Vuex from 'vuex';
	import { GoodsDetails } from "@/apis/home";
	import {FreeGoodsDetails} from "@/apis/home";
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

			let data = await GoodsDetails(id);
			let dataFreedom = await FreeGoodsDetails(id)
			//console.log(data.data)
			if(data.data){
				this.goodsDetails = data.data
			}else{
				this.goodsDetails = dataFreedom.data
			}
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