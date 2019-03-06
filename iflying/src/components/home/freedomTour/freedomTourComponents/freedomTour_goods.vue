<template>
	<div class="freedomTour_goods">
		<div class="freedomTourTitle">
			<h2>
				为你精选
			</h2>
		</div>
		<div class="freedomGoodsList" v-for="(item,index) in FreedomGoodsData" @click="handleToDetails(item.ID)">
			<div class="freedomGoods">
				<div class="item-top">
					<div class="freedomProduct-image">
						<img :src="item.DefaultPic">
						<div class="image-gra"></div>
					</div>
					<div class="sati-peo">
						<div class="peo">{{item.TotalCount}}人游玩过</div>
						<div class="sati">{{item.Scores == 100? "新产品上线":"满意度:"+item.Scores+"%" }}</div>
					</div>
					<div class="product-extra">
						<span>{{item.ProductType.name}}</span>
						<span class="separator">|</span>
						<span>{{item.Destination}}</span></div>
					<span class="tour_price price">
							<dfn>¥</dfn>
							<strong>{{item.DefaultPrice}}</strong>起</span>
				</div>
				<div class="item-bottom">
					<div class="product-title">{{item.Title}}</div>
					<p class="product-describe">{{item.FTitle}}</p>
					<div class="product-tags">
						<span class="label">热卖</span>
						<span class="label">海外航线</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex"
	export default{
		computed:{
			...Vuex.mapState({
				FreedomGoodsData: state => state.home.FreedomGoodsData
			})
		},
		methods:{
			handleToDetails(id){
				//console.log(id)
				this.$router.push({
					name:"details",
					query:{id:id}
				})
				
			}
		}
	}
	
	
</script>

<style scoped lang="scss">
	.freedomTour_goods{
		margin-bottom: 1rem;
	}
	.freedomTourTitle {
		width: 100%;
		height: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		_background: pink;
		h2 {
			font-size: 0.3rem;
		}
	}
	
	.freedomGoodsList {
		background: #f0f0f0;
		.freedomGoods {
			margin-bottom: 0.15rem;
			background: #fff;
			.item-top {
				position: relative;
				.freedomProduct-image {
					width: 100%;
					height: 3rem;
					position: relative;
					overflow: hidden;
					img {
						width: 100%;
					}
					.image-gra {
						position: absolute;
						bottom: 0;
						height: 0.45rem;
						width: 100%;
						background: -webkit-linear-gradient(transparent, rgba(0, 0, 0, 0.5));
					}
				}
				.sati-peo{
					position: absolute;
				    bottom: 0.1rem;
				    left: 3.5rem;
				    display: inline;
				    color: #fff;
				    font-size: 0.3rem;
				    .peo {
					    float: left;
					}
					.sati{
						float: left;
						margin-left: 0.2rem;
					}
				}
				.product-extra{
					position: absolute;
				    top: 0.267rem;
				    left: 0.3rem;
				    background: rgba(0, 0, 0, 0.7);
				    color: #fff;
				    height: 0.48rem;
				    line-height: 0.48rem;
				    font-size: 0.24rem;
				    border-radius: 24px;
				    padding: 0 0.3rem;
				}
				.tour_price {
				    position: absolute;
				    left: 0.2rem;
				    bottom: 0.1rem;
				    width: 1.8rem;
				    text-align: center;
				    font-size: 0.32rem;
				    color: #fff;
				    background: #ff7a3b;
				    border-radius: 5px;
				    padding: 0.053rem 0.133rem;
				}
			}
			.item-bottom {
			    padding: 0.2rem 0.3rem;
			    .product-title {
				    color: #222;
				    font-size: 0.34rem;
				    line-height: 0.36rem;
				    margin-bottom: 0.05rem;
				    font-weight: 700;
				}
				.product-describe {
				    color: #999;
				    font-size: 0.24rem;
				    line-height: 0.4rem;
				    text-overflow: ellipsis;
				    overflow: hidden;
				    white-space: nowrap;
				}
				.product-tags {
				    margin-bottom: 0.06rem;
				    overflow: hidden;
				    .label {
					    float: left;
					    padding: 0.04rem 0.06rem;
					    margin-top: 0.1rem;
					    font-size: 0.24rem;
					    line-height: 0.3rem;
					    color: #ff7a3b;
					    border: solid 0.012rem #ff7a3b;
					    border-radius: 4px;
					    margin-right: 0.1rem;
					}
				}
				
			}
		}
	}
</style>