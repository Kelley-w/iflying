<template>
	<div id="index_search">
		<div class="header">
			<div class="position">
				<span>
					宁波
				</span>
			</div>
			<div class="search" @click="handleToSearch()">
				<span>
					目的地/关键词
				</span>
			</div>
			<div class="messageImg">
				<img src="../../../assets/home-img/message.png"/>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			handleToSearch(){
				this.$router.push({
					name:'search'
				})
			}
		}
	}
</script>

<style scoped>
	#index_search{
		width: 100%;
		height: 1.04rem;
	}
	#index_search .header{
		width: 100%;
		height: 1.04rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background: #ff6600;
		padding-left: 0.075rem;
		padding-right: 0.075rem;
		position: fixed;
		z-index: 5;
		top: 0;
	}
	#index_search .header .messageImg{
		width: 0.46rem;
		height: 0.46rem;
	}
	#index_search .header .messageImg img{
		width: 100%;
		height: 100%;
	}
	#index_search .header .search{
		width: 5.25rem;
		height: 0.67rem;
		background: white;
		display: flex;
		align-items: center;
		padding-left: 0.6rem;
	}
	#index_search .header .search span{
		color: #CBCBCB;
		font-size: 0.32rem;
	}
	#index_search .header .position span{
		color: white;
		font-size: 0.32rem;
	}
</style>