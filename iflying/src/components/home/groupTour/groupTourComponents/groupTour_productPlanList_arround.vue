<template>
	<div class="tab">
		<div class="tabBox" v-for="(item,index) in productPlanListArround"  @click="handleToDetails(item.ProductID.$id)">
			<div class="imgBox">
				<img :src="item.DefaultPic" />
				<p class="tabAddress">{{item.ProductGADDR.Title}}|{{item.StartGADDR.Title}}出发|新产品上线</p>
			</div>
			<div class="tabTxt">
				<p class="tabName">{{item.WebTitle}}</p>
				<div class="tabPrice">
					<p class="tabData">
						<span>03/17</span><span>03/17</span>
					</p>
					<p class="price"><span>￥{{item.MinPrice}}</span>起/人</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default{
		computed:{
			...Vuex.mapState({
				productPlanListArround: state => state.home.productPlanListArround
			})
		},
		methods:{
			handleToDetails(id){
				this.$router.push({
					name:"details",
       				query:{id:id}
				})
			}
		}
	}

</script>

<style scoped lang="scss">
.tab{
	width: 100%;
	margin-bottom: 1.2rem;
	.tabBox{
		width: 100%;
		display: flex;
		flex-direction: column;
		.imgBox{
			height: 2.9rem;
			position: relative;
			img{
				width: 100%;
				height: 100%;
			}
			.tabAddress{
				width: 100%;
				text-align: center;
				position: absolute;
				bottom: 0;
				background: rgba(61,72,89,0.8);
				height: 0.5rem;
				line-height: 0.5rem;
				color: #fff;
			}
		}
		.tabTxt{
			padding:0.2rem 0.2rem 0.32rem;
			font-size: 32px;
			border-bottom: 0.2rem solid #C9C9C9;
			.tabPrice{
				margin-top: 0.2rem;
				display: flex;
				justify-content: space-between;
				font-size: 28px;
				color: #999;
				.tabData{
					background: url(../../../../assets/home-img/groupTourGoodsList.png) no-repeat;
					padding-left: 0.4rem; 
					background-size: 0.32rem 0.32rem;
					
				}
				.price{
					span{
						color: #ff6315;
						font-size: 38px;
						margin-right: 0.1rem;
					}
				}
			}
		}
	}
}
</style>