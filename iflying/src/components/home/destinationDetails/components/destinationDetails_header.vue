<template>
	<div class="destinationDetails_header">
		<div class="back" @click="handleBack()">
				<
		</div>
		<div class="search" @click="handleToSearch()">
			<img src="../../../../assets/home-img/search1.png"/>
			<span>
				{{sendToHeader}}
			</span>
		</div>
		<div class="home" @click="handleBackHome()">
			<img src="../../../../assets/home-img/home.png"/>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			sendToHeader:String
		},
		methods:{
			handleBack(){
				this.$router.go(-1)
			},
			handleBackHome(){
				this.$router.push({
					name:"home"
				})
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
	.destinationDetails_header{
		width: 100%;
		height: 0.88rem;
		background: #ff7632;
		display: flex;
		justify-content: space-around;
		padding-right: 0.25rem;
		padding-left: 0.25rem;
		align-items: center;
		.back{
			font-size: 0.5rem;
			color: white;
		}
		.search{
			width: 5.62rem;
			height: 0.65rem;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			background: #ff944d;
			img{
				margin-left: 0.14rem;
				width: 0.3rem;
				height: 0.3rem;
			}
			span{
				margin-left: 0.08rem;
				font-size: 0.32rem;
				color: white;
			}
		}
		.home{
			width:0.53rem;
			height: 0.53rem;
			img{
				width: 100%;
				height: 100%;
			}
		}
	}
	
</style>