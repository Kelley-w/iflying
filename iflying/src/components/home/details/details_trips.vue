<template>
	<div>
		<div class="trips-top">
			<p>行程安排</p>
		</div>
		<div class="trips-arrange">
			<h3>详细行程</h3>
			<div class="trips-box" v-for="(item,index) in sendTrips">
				<div class="trips-arrange-day">
					<span class="tday">D{{item.Day}}</span>
					<p class="trips-addr">{{item.Title}}</p>
					<div class="trips-time">
						<p class="timeSum">集合时间：<span>另行通知</span></p>
						<p>地点:<span class="addr">{{}}</span></p>
					</div>
					<div class="hotel">
						<p class="trips-hotel">酒店信息</p>
						<div v-for="info in item.HotelInfo">
							<p>{{info.Title}}</p>
							<p>参考星级:{{info.PdfIcon}}</p>
						</div>
					</div>
					<div class="lunch">
						<div class="lunchInfo">用餐信息</div>
						<div class="lunchAll">
							<p>早餐:{{item.BreakfastType}}</p>
							<p>中餐:{{item.LunchType}}</p>
							<p>晚餐:{{item.DinnerType}}</p>
						</div>
					</div>
					<div class="goodsDetails">购物详情<span>无购物信息</span></div>
					<div>
						<p class="trips-describe">行程概述</p>
						<p class="trips-destxt">{{item.Notes}}</p>
					</div>
					<div class="trips-view">
						<p class="view">景点解析</p>
						<div v-for="view in item.ScenicInfo">
							<p class="viewName">{{view.Title}}</p>
							<ul>
								<li v-for="pic in view.ScenicPic">
									<img :src="pic.PicPath" />
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--底部-->
		<div class="footer">
			<ul>
				<li v-for="item in foot">
					<img :src="item.img" />
					<p>{{item.name}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default{
	props:{
		sendTrips:Array
	},
	data(){
		return{
			foot:[
				{
					img:require("../../../assets/home-img/hert.png"),
					name:"关注"
				},
				{
					img:require("../../../assets/home-img/manage.png"),
					name:"在线咨询"
				},
				{
					img:"",
					name:"去下单"
				}
			]
		}
	}
}
</script>

<style scoped lang="scss">
.trips-top{
	width: 100%;
	display: flex;
	justify-content:space-around;
	align-items: center;
	border-bottom: 2px solid #999;
	height: 0.9rem;
	p{
		width: 33.33%;
		font-size: 0.34rem;
		text-align: center;
	}
}
.trips-arrange{
	padding: 0.4rem;
	h3{
		font-size:0.4rem;
		text-align: center;
		margin-bottom: 0.2rem;
	}
	.trips-box{
		position: relative;
		width: 100%;
		margin-top: 0.2rem;
		.trips-arrange-day{
			padding:0 0.2rem;
			margin: 0 0.2rem;
			padding-left: 0.3rem;
			border-left: 2px solid #999;
			font-size:0.3rem;
			.tday{
				width: 0.48rem;
				height: 0.6rem;
				background: url(../../../assets/home-img/location.png) no-repeat;
				position: absolute;
				left:0;
				top: 0;
				color: #fff;
				text-align: center;
				line-height: 0.4rem;
			}
			.trips-addr{
				font-size: 0.34rem;
				margin-bottom: 0.2rem;
				span:nth-of-type(2){
					background:url(../../../assets/home-img/pro-plane.png) no-repeat left top;
					background-size:0.45rem 0.49rem;
					padding-left:0.45rem;
				}
			}
			.trips-time{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 0.4rem;
				.timeSum{
					background: url(../../../assets/home-img/pro-time.png) no-repeat;
					background-size: 0.36rem 0.36rem;
					padding-left: 0.4rem;
					span{
						color: #ff6600;
						font-weight: 900;
					}
				}
			}
			.addr{
				color: #ff6600;
				font-weight: 900;
			}
			.hotel{
				display: flex;
				justify-content: flex-start;
				.trips-hotel{
					background: url(../../../assets/home-img/pro-hotel.png) no-repeat;
					background-size:0.36rem 0.4rem;
					padding-left: 0.4rem;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					margin-bottom: 0.2rem;
						
				}
				div{
					p{
						margin-left: 0.2rem;
						color: #666;
					}
				}
			}
			.lunch{
				display: flex;
				justify-content: flex-start;
				margin-bottom: 0.2rem;
				.lunchInfo{
					background: url(../../../assets/home-img/pro-fork.png) no-repeat;
					background-size:0.36rem 0.4rem;
					padding-left: 0.4rem;
					margin-right: 0.2rem;
				}
				.lunchAll{
					color: #666;
					line-height: 0.5rem;
				}
			}
			.goodsDetails{
				background: url(../../../assets/home-img/pro-cart.png)no-repeat;
				background-size: 0.36rem 0.4rem;
				padding-left: 0.4rem;
				display: flex;
				justify-content: flex-start;
				margin-bottom: 0.2rem;
				span{
					color: #666;
					margin-left: 0.2rem;
				}
			}
			div{
				.trips-describe{
					background: url(../../../assets/home-img/pro-flag.png)no-repeat;
					background-size: 0.36rem 0.4rem;
					padding-left: 0.4rem;
					margin-bottom: 0.2rem;
				}
				.trips-destxt{
					line-height: 0.4rem;
					color: #666;
				}
			}
			.trips-view{
				.view{
					background: url(../../../assets/home-img/pro-view.png) no-repeat;
					background-size: 0.36rem 0.4rem;
					padding-left: 0.4rem;
					margin-bottom: 0.2rem;
					margin-top: 0.4rem;
				}
				.viewName{
					line-height: 0.6rem;
				}
				ul{
					display: flex;
					justify-content: space-around;
					li{
						width:2.1rem;
						height: 1.25rem;
						margin-right: 0.05rem;
						img{
							width: 100%;
							height: 100%;
						}
					}
				}
			}
		}
	}
}
.footer{
	height:1rem;
	border-top: 1px solid #999;
	background: #fff;
	margin-bottom: 2rem;
	ul{
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 100%;
		li{
			width: 33.33%;
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			p{
				font-size: 0.3rem;
			}
			img{
				width: 0.33rem;
				height: 0.4rem;
				margin-bottom: 0.1rem;
			}
		}
		li:last-of-type{
			background: #ff7a3b;
			color: #fff;
			font-weight: 900;
			img{
				display: none;
			}
		}
	}
	
}
</style>