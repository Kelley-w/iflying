<template>
	<div class="product">
		<p class="pro-special">产品特色</p>
		<div class="pro-manager">
			<div class="imgBox">
				<img src="../../../assets/home-img/Pro-Manager.png" />
			</div>
			<p>产品经理推荐</p>
		</div>
		<div class="pro-txt" v-for="item in info">{{item}}</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			info:[]
		}
	},
	props:{
		"sendPro":String
	},
	created(){
//		let arr =this.sendPro;
//		 this.info =  arr.split("！");
	}
}
</script>

<style scoped lang="scss">
.product{
	padding: 0.3rem 0.2rem;
	border-bottom: 0.4rem solid #e9e9e9;
	.pro-special{
		font-size: 36px;
	}
	.pro-manager{
		margin: 0.2rem 0 0.4rem 0.2rem;
		display:flex;
		align-items:center;
		font-size: 30px;
		.imgBox{
			width: 0.75rem;
			height: 0.75rem;
			border-radius: 50%;
			margin-right: 0.2rem;
			img{
				width: 100%;
				height: 100%;
			}
		}
	}
	.pro-txt{
		background: url(../../../assets/home-img/pro-star.png) no-repeat left top;
		padding-left:0.4rem;
		background-size: 0.36rem 0.4rem;
		font-size:0.3rem;
		line-height: 0.4rem;
		color: #666;
	}
}
</style>