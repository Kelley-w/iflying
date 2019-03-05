<template>
	<div class="freedomTour_goods">
		<div class="freedomTourTitle">
			<h2>
				为你精选
			</h2>
		</div>
		<div class="freedomGoodsList">
			<div class="freedomGoods">
				<div class="item-top">
					<div class="freedomProduct-image">
						<img src="http://img1.iflying.com/prd/201705/7/20170507163218983.jpg">
						<div class="image-gra"></div>
					</div>
					<div class="sati-peo">
						<div class="peo">2702人游玩过</div>
						<div class="sati">满意度：90%</div>
					</div>
					<div class="product-extra">
						<span>自由行</span>
						<span class="separator">|</span>
						<span>新加坡</span></div>
					<span class="tour_price price">
							<dfn>¥</dfn>
							<strong>2799</strong>起</span>
				</div>
				<div class="item-bottom">
					<div class="product-title">【漫享狮城】2019年新加坡自由行6日游</div>
					<p class="product-describe">宁波直飞、六天来回，机票含税含20kg行李</p>
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
</script>

<style scoped lang="scss">
	.freedomTourTitle {
		width: 100%;
		height: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background: pink;
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
				    bottom: 0.6rem;
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
					
				}
			}
		}
	}
</style>