<template>
	<div class="freedomTour">
		<FreedomTour_header></FreedomTour_header>
		<FreedomTour_goods></FreedomTour_goods>
	</div>
</template>

<script>
	import Vuex from "vuex";
	import FreedomTour_header from "./freedomTourComponents/freedomTour_header";
	import FreedomTour_goods from "./freedomTourComponents/freedomTour_goods";
	
	export default{
		components:{
			"FreedomTour_header":FreedomTour_header,
			"FreedomTour_goods":FreedomTour_goods
		},
		created(){
			this.handleGetFreedomGoodsData()
		},
		methods:{
			...Vuex.mapActions({
				handleGetFreedomGoodsData:"home/handleGetFreedomGoodsData"
			})
		}
	}
</script>

<style>
</style>