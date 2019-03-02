<template>
	<div id="groupTour">
		<GroupTour_search></GroupTour_search>
		<GroupTour_tabBar></GroupTour_tabBar>
		
	</div>
</template>

<script>
	import Vuex from "vuex";
	import GroupTour_search from "./groupTourComponents/groupTour_search";
	import GroupTour_tabBar from "./groupTourComponents/groupTour_tabBar";
	export default {
		
		components:{
			"GroupTour_search":GroupTour_search,
			"GroupTour_tabBar":GroupTour_tabBar,
			
		},
		created(){
			this.handleGroupTourRecmmdData();
			this.handleGroupTourRecmmdAbroadData();
			this.handleGroupTourRecmmdDomesticData();
			this.handleGroupTourRecmmdArroundData();
			this.handleGroupTourGoodsListData();
			this.handleGroupTourGoodsListAbroadData();
			this.handleGroupTourGoodsListDomesticData();
			this.handleGroupTourGoodsListArroundData();
		},
		methods: {
			...Vuex.mapActions({
				//组团游推荐商品热销
				handleGroupTourRecmmdData: "home/handleGroupTourRecmmdData",
				//组团游推荐商品出境
				handleGroupTourRecmmdAbroadData:"home/handleGroupTourRecmmdAbroadData",
				//组团游推荐商品周边
				handleGroupTourRecmmdDomesticData:"home/handleGroupTourRecmmdDomesticData",
				//组团游推荐商品周边
				handleGroupTourRecmmdArroundData:"home/handleGroupTourRecmmdArroundData",
				//组团游飞扬自组商品列表
				handleGroupTourGoodsListData:"home/handleGroupTourGoodsListData",
				//出境跟团商品列表
				handleGroupTourGoodsListAbroadData:"home/handleGroupTourGoodsListAbroadData",
				//国内跟团商品列表
				handleGroupTourGoodsListDomesticData:"home/handleGroupTourGoodsListDomesticData",
				//周边跟团商品列表
				handleGroupTourGoodsListArroundData:"home/handleGroupTourGoodsListArroundData"
			})
		},
	}
</script>

<style scoped lang="scss">

</style>