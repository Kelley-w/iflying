<template>
	<div class="search_header">
		<div class="back" @click="handleBack()">
			取消
		</div>
		
		<input class="search_search" type="text" placeholder="搜索目的地、关键词" v-model="place"/>
		
		<div class="search_img" @click="handleToDestinationDetails()">
			<img src="../../../../assets/home-img/search_searchpage.png"/>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				place:""
			}
		},
		methods:{
			handleBack(){
				this.$router.go(-1);
			},
			handleToDestinationDetails(){
				this.$router.push({
					name:'destinationDetails',
					query:{key:this.place}
				})
			}
		},
	}
	
</script>

<style scoped lang="scss">
	.search_header{
		width: 100%;
		height: 0.9rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
		.back{
			font-size: 0.3rem;
			color: #ff6600;
			width: 0.6rem;
		}
		.search_search{
			width: 5.55rem;
			height: 0.65rem;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			background: #f5f5f5;
			color: #666666;
			font-size: 0.32rem;
			border: none;
			padding-left: 0.3rem;
			
		}
		
		.search_img{
			width:0.53rem;
			height: 0.53rem;
			img{
				width: 100%;
				height: 100%;
			}
		}
		
	}
</style>