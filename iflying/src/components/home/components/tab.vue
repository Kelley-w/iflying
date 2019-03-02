<template>
	<div class="tab">
		<div class="tabBox">
			<div class="imgBox">
				<img src="http://img1.iflying.com/prd/201706/30/20170630190427335.jpg" />
				<p class="tabAddress">台湾|宁波出发|新产品上线</p>
			</div>
			<div class="tabTxt">
				<p class="tabName">中远之星台湾+厦门超值7日游</p>
				<div class="tabPrice">
					<p class="tabData">
						<span>03/17</span><span>03/17</span>
					</p>
					<p class="price"><span>￥2399</span>起/人</p>
				</div>
			</div>
		</div>
		<div class="tabBox">
			<div class="imgBox">
				<img src="http://img1.iflying.com/prd/201706/30/20170630190427335.jpg" />
				<p class="tabAddress">台湾|宁波出发|新产品上线</p>
			</div>
			<div class="tabTxt">
				<p class="tabName">中远之星台湾+厦门超值7日游</p>
				<div class="tabPrice">
					<p class="tabData">
						<span>03/17</span><span>03/17</span>
					</p>
					<p class="price"><span>￥2399</span>起/人</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

</script>

<style scoped lang="scss">
.tab{
	width: 100%;
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
					background:url(../../../assets/data.png) no-repeat;
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