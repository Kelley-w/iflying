<template>
	<div class="plan_header">
		<div class="header">
			<div class="back" @click="handleBack">
				<span>
					<
				</span>
			</div>
			<div class="title">
				我的出游计划
			</div>
			<div class="search" @click="handleToSearch">
				<img src="../../../assets/home-img/search.png"/>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default{
		methods:{
			handleBack(){
				 this.$router.go(-1)
			},
			handleToSearch(){
				this.$router.push({
					name:"search"
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	
	.header{
		width: 100%;
		height: 0.9rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #ff7a3b;
		position: fixed;
		top: 0;
		z-index: 5;
		padding: 0 0.2rem;
		.back{
			font-size: 0.38rem;
			color: white;
		}
		.title{
			font-size: 0.36rem;
			color: white;
		}
		.search{
			width:0.45rem;
			height: 0.45rem;
			img{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>