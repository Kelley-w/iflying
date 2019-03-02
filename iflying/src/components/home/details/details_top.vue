<template>
	<div class="detail-top" id="detailTop">
		<div class="detail-title two-line">
			
			{{sendToTop.WebTitle}}
		</div>
		<div class="detail-describe two-line">
			{{sendToTop.SubTitle}}
		</div>
		<div class="detail-tag">
			<i v-for="(item,index) in sendToTop.LineAttribute">{{item.Name}}</i>
		</div>
		<div class="inland-price">
			<span class="m_dbi">
				起价说明
			</span>
			<span class="m_price">
				<dfn>¥</dfn>
				<span id="price">
					{{sendToTop.DefaultPrice}}
				</span>
			<em>/人起</em>
			</span>
			<span class="m_per_cite">
				加入对比
			</span>
		</div>
		<div class="detail-address">
			<span>{{sendToTop.Go_Traffic}}往/{{sendToTop.Go_Traffic}}返</span>
			<span class="detail-number">满意度：{{sendToTop.Scores}}%</span>
			<span>{{sendToTop.TotalCount}}人已出游</span>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			sendToTop:Object
		}
	}
</script>

<style scoped>
	.detail-top {
		background: #fff;
		border-radius: 0.3rem 0.3rem 0 0;
		margin: -0.42rem 0 0.4rem 0;
		position: relative;
		z-index: 3;
		padding: 0.15rem 0.21rem 0.24rem;
		box-shadow: 0px -30px 59px black
	}
	
	.detail-top .detail-title {
		font-size: 0.36rem;
		color: #222;
		margin-top: 0.2rem;
	}
	
	.two-line {
		overflow: hidden;
	}
	
	.detail-top .detail-describe {
		font-size: 0.3rem;
		color: #999999;
		margin-top: 0.15rem;
		margin-bottom: 0.075rem;
	}
	
	.detail-tag {
		line-height: 0.45rem;
	}
	
	.detail-tag i {
		font-size: 0.24rem;
		display: inline-block;
		line-height: 0.36rem;
		color: #ff7a3b;
		background: #fff;
		vertical-align: top;
		padding: 0.03rem 0.075rem;
		position: relative;
		margin: 0.1rem 0.1rem 0 0;
		border-radius: 4px;
		font-style: normal;
	}
	
	.detail-tag i:after {
		content: '';
		width: 200%;
		height: 200%;
		position: absolute;
		border: 0.027rem solid rgb(255, 122, 59);
		left: 0;
		top: 0;
		-webkit-transform: scale(0.5);
		transform: scale(0.5);
		-webkit-transform-origin: 0 0;
		transform-origin: 0 0;
		border-radius: 8px;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}
	
	.inland-price {
		margin: 0.15rem 0;
	}
	
	.inland-price .m_dbi {
		float: right;
		font-size: 0.24rem;
		line-height: 0.48rem;
	}
	
	.inland-price span {
		margin-right: 0.15rem;
		display: inline-block;
		font-size: 0.24rem;
		color: #ff7a3b;
	}
	
	dfn {
		font-style: normal;
		font-weight: 400;
		font-size: 0.24rem;
		font-family: arial;
	}
	
	#price {
		font-size: 0.32rem;
	}
	
	.inland-price .m_price em {
		font-weight: normal;
		font-style: normal;
		font-size: 0.24rem;
		color: #666;
		margin-left: -0.2rem;
	}
	
	.detail-top .detail-address {
		margin-top: 0.1rem;
		padding-top: 0.1rem;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;
		border-top: 0.012rem solid #e5e5e5;
	}
	
	.detail-top .detail-address span {
		color: #999;
		font-size: 0.24rem;
		font-family: "Arial";
	}
</style>