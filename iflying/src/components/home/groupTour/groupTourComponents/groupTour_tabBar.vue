<template>
	<div class="groupTour_tabBar">
		<ul>
			<li :class="index==activeHover?'active':''" v-for="(item,index) in tabBar" @click="handleClickHover(index)">
				{{item}}
			</li>
			
		</ul>
		<div>
      		<Component :is="com"></Component>
		</div>
		<GroupTour_tabBar_Follow></GroupTour_tabBar_Follow>
		
	</div>
</template>

<script>
	import GroupTour_productRecmmd from "./groupTour_productRecmmd";
	import GroupTour_productRecmmd_abroad from "./groupTour_productRecmmd_abroad";
	import GroupTour_productRecmmd_domestic from "./groupTour_productRecmmd_domestic";
	import GroupTour_productRecmmd_arround from "./groupTour_productRecmmd_arround";
	import GroupTour_tabBar_Follow from "./groupTour_tabBar_Follow"
	export default{
		data(){
			return{
				tabBar:["热门","出境","国内","周边"],
				activeHover:0,
				com:"GroupTour_productRecmmd"
			}
		},
		methods:{
			handleClickHover(index){
				this.activeHover = index
				switch(index){
	           		case 0:this.com = "GroupTour_productRecmmd";break;
	           		case 1:this.com = "GroupTour_productRecmmd_abroad";break;
	           		case 2:this.com = "GroupTour_productRecmmd_domestic";break;
	           		case 3:this.com = "GroupTour_productRecmmd_arround";break;
	           }
			}
		},
		components:{
			"GroupTour_productRecmmd":GroupTour_productRecmmd,
			"GroupTour_productRecmmd_abroad":GroupTour_productRecmmd_abroad,
			"GroupTour_productRecmmd_domestic":GroupTour_productRecmmd_domestic,
			"GroupTour_productRecmmd_arround":GroupTour_productRecmmd_arround,
			"GroupTour_tabBar_Follow":GroupTour_tabBar_Follow
		}
	}
</script>

<style scoped lang="scss">
	.groupTour_tabBar{
		width: 100%;
		height: 0.88rem;
		border-bottom: 0.016rem solid rgba(0, 0, 0, 0.1);
		padding: 0 0.24rem;
		margin-top: 0.9rem;
		ul{
			height: 100%;
			display: flex;
			justify-content: space-around;
			align-items: center;
			li{
				line-height: 0.88rem;
				font-size: 0.32rem;
				color: #666666;
			}
			.active{
				border-bottom: 0.053rem solid #ff7632;
    			color: #ff7632;
			}
		}
	}
</style>