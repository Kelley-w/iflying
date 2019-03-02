<template>
	<div class="loveProduct">
		<section class="product-card" v-for="(item,index) in goodsList" :data-id="item.ProductID.$id" @click="handleToDetails(item.ProductID.$id)">
			<div class="card-avatar">
				<img :src="item.DefaultPic">
			</div>
			<div class="card-content">
				<div class="card-header two-line">
					{{item.WebTitle}}
				</div>
				<div class="card-body">
					<div>
						<span class="price">￥{{item.MinPrice}}</span>起/人
					</div>
					<div>
						03/20,04/16,04/28,05/10
					</div>
				</div>
				<div class="card-footer">
					<div class="location">
						{{item.GADDRs[0].Title}}
					</div>
					<div class="type">{{item.ProductType.name}}</div>
					<div class="start">{{item.StartGADDR.Title}}出发</div>
					<div class="fr">{{item.Score != 100?"满意度:"+item.Score+"%":"新产品上线"}}</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default{
		computed:{
			...Vuex.mapState({
				goodsList:state=>state.home.goodsList,
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
	.loveProduct {
		width: 100%;
		height: 100%;
		margin-bottom: 1rem;
		background: #E9E9E9;
		.product-card {
			padding-top: 0.1rem;
			.card-avatar {
				width: 7.3rem;
				height: 3rem;
				padding: 0 0.13rem;
				display: flex;
				align-items: center;
				justify-content: center;
				img {
					width: 7.2rem;
					height: 3rem;
					display: block;
				}
			}
			.card-content {
				position: relative;
				padding: 0.213rem 0.4rem;
				box-shadow: 0 -0.107rem 0.267rem #333;
				z-index: 1;
				background: #fff;
				.card-header {
				    font-weight: bold;
				    margin-bottom: 0.16rem;
				    font-size: 0.3rem;
				    color: #353535;
				    min-height: 0.12rem;
				}
				.card-body {
				    display: flex;
				    align-items: center;
				    margin-bottom: 0.16rem;
				    font-weight: bold;
				    font-size: 0.3rem;
				    min-height: 0.64rem;
				    div:first-child {
					    flex: 1 0 0;
					    white-space: nowrap;
					    .price {
						    font-size: 0.36rem;
						    font-family: "Helvetica Neue",Arial;
						}
					}
					div:last-child {
					    flex: 0 1 60%;
					    text-align: right;
					    font-family: "Helvetica Neue",Arial;
					    text-overflow: ellipsis;
					    overflow: hidden;
					    white-space: nowrap;
					}
				}
				.card-footer {
				    padding: 0.2rem 0;
				    border-top: 1px dashed #ddd;
				    overflow: hidden;
				    font-size: 0.3rem;
				    min-height: 0.1rem;
				    .location{
				    	float: left;
				    }
				    .type {
					    float: left;
					    padding: 0.02rem 0.107rem;
					    border-radius: 5px;
					    background: #fc3a7f;
					    color: #fff;
					    margin-top: 0.01rem;
					    margin-left: 0.1rem;
					}
					 .start {
					    float: left;
					    margin-top: 0.01rem;
					    padding: 0.02rem 0.107rem;
					    border-radius: 0.107rem;
					    background: #3ac260;
					    margin-left: 0.1rem;
					    color: #fff;
					}
					.fr {
					    float: right;
					}
				}
			}
		}
	}
</style>