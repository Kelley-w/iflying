<template>
	<div class="destinationDetails_goods">
		<div class="details" v-for="(item,index) in sendToGoods" @click="handleToDetails(item.ProductID.$id)">
			<div class="details_pic">
				<img :src="item.DefaultPic" />
				<div class="pic_font">{{item.StartGADDR.Title}}出发</div>
			</div>
			<div class="details_right">
				<div class="right_top">
					{{item.WebTitle}}
				</div>
				<div class="right_center">
					<img src="../../../../assets/home-img/calendar.png"/>
					<span>03/20,06/10,05/20,05/10,04/10,04/20</span>
				</div>
				<div class="right_bottom">
					<span class="money">￥</span><span class="bottom_one">{{item.MinPrice}}</span>
					<span class="bottom_two">起</span>
					<span class="bottom_three">|</span>
					<span class="bottom_four">{{item.Score==100?"新产品上线":item.Score+"%满意度"}}</span>
					<div class="bottom_five">加入对比</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default{
		props:{
			sendToGoods:Array,
		},
		methods:{
			handleToDetails(id){
				this.$router.push({
					name:'details',
					query:{id:id}
				})
			}
		}
	}
</script>

<style scoped>
	.destinationDetails_goods{
		margin-bottom: 1rem;
	}
	.details {
		border-top: .2rem solid #f3f4f7;
		height: 2.4rem;
		display: flex;
		align-items: center;
	}
	
	.details>.details_pic {
		width: 1.5rem;
		height: 1.3rem;
		float: left;
		position: relative;
		margin-left: .26rem;
	}
	
	.pic_font {
		position: absolute;
		width: 1.5rem;
		bottom: 0;
		left: 0;
		text-align: center;
		color: #fff;
		height: .36rem;
		line-height: .35rem;
		font-size: .24rem;
		background: rgba(0, 0, 0, 0.7);
	}
	
	.details>.details_right {
		width: 5.3rem;
		height: 1.5rem;
		float: left;
		margin-left: .2rem;
		margin-top: .1rem;
	}
	
	.details>.details_right>.right_top {
		font-size: .29rem;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	
	.details>.details_right>.right_center>img {
		width: .3rem;
	}
	
	.details>.details_right>.right_center {
		display: flex;
		height: .4rem;
		align-items: center;
	}
	
	.details>.details_right>.right_center>span {
		font-size: .29rem;
		color: #999;
		width: 4rem;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
	
	.details>.details_pic>img {
		width: 1.5rem;
	}
	
	.right_bottom {
		position: relative;
	}
	
	.money {
		color: #ff7733;
		font-size: .2rem;
	}
	
	.bottom_one {
		color: #ff7733;
		font-size: .34rem;
		font-weight: 600;
	}
	
	.bottom_two {
		color: #999;
		font-size: .21rem;
	}
	
	.bottom_three {
		color: #666;
	}
	
	.bottom_four {
		font-size: .3rem;
	}
	
	.bottom_five {
		width: 1.6rem;
		color: #ff7733;
		text-align: center;
		line-height: .55rem;
		font-size: .29rem;
		height: .6rem;
		position: absolute;
		bottom: -0.2rem;
		right: 0;
		border: 0.02rem solid #ff7733;
	}
</style>