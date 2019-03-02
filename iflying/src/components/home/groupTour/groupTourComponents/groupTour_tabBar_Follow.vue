<template>
	<div class="groupTour_Follow">
		<ul class="nav">
			<li :class="index==activeHover?'active':''" v-for="(item,index) in followNav" @click="handleClickHover(index)">{{item}}</li>
		</ul>
		<div>
      		<Component :is="com"></Component>
		</div>
	</div>
</template>

<script>
	import GroupTour_ProductPlanList from "./groupTour_productPlanList";
	import GroupTour_ProductPlanList_abroad from "./groupTour_productPlanList_abroad";
	import GroupTour_ProductPlanList_domestic from "./groupTour_productPlanList_domestic";
	import GroupTour_ProductPlanList_arround from "./groupTour_productPlanList_arround";
	
	import Vuex from "vuex";
	export default{
		data(){
			return {
				followNav:["飞扬自组","出境跟团","国内跟团","周边跟团"],
				activeHover:0,
				com:"GroupTour_ProductPlanList"
			}
		},
		components:{
			"GroupTour_ProductPlanList":GroupTour_ProductPlanList,
			"GroupTour_ProductPlanList_abroad" : GroupTour_ProductPlanList_abroad,
			"GroupTour_ProductPlanList_domestic":GroupTour_ProductPlanList_domestic,
			"GroupTour_ProductPlanList_arround":GroupTour_ProductPlanList_arround
		},
		methods:{
			handleClickHover(index){
				this.activeHover = index
				switch(index){
	           		case 0:this.com = "GroupTour_ProductPlanList";break;
	           		case 1:this.com = "GroupTour_ProductPlanList_abroad";break;
	           		case 2:this.com = "GroupTour_ProductPlanList_domestic";break;
	           		case 3:this.com = "GroupTour_ProductPlanList_arround";break;
	           }
			},
		}
		
	}
</script>

<style scoped lang="scss">
	.groupTour_Follow{
		width: 100%;
		.nav{
			width: 100%;
			height: 0.88rem;
			display: flex;
			justify-content: space-around;
			align-items: center;
			margin-bottom: 0.04rem;
			li{
				line-height: 0.88rem;
				font-size: 0.28rem;
			}
			.active{
				border-bottom: 0.053rem solid #ff7632;
    			color: #ff7632;
			}
		}
	
	}
</style>