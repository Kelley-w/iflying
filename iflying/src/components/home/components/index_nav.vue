<template>
	<div id="index_nav">
		<section class="nav" id="navTop">
			<ul>
				<router-link to="/groupTour">
					<li class="team">
						<span>组团游</span><br>
						<span class="small">跟着飞扬一起出发</span>
					</li>
				</router-link>
				<li class="ship right">邮轮游</li>
				<router-link to="/freedomTour">
					<li>自助游</li>
				</router-link>
				
				<li class="right">周末度假</li>
				
				<router-link to="/groupTour">
					<li>出境游</li>
				</router-link>
				
				<router-link to="/groupTour">
					<li>国内游</li>
				</router-link>
				
				<router-link to="/groupTour">
					<li class="right">周边游</li>
				</router-link>
				
			</ul>
			<ul>
				<li>签证</li>
				<li>导游领队</li>
				<li class="right lastRight">定制旅行</li>
			</ul>
		</section>
	</div>
</template>

<script>
	
</script>

<style scoped>
	.nav {
		box-sizing: border-box;
		padding: 0.133rem;
		background: #DBDBDB;
	}
	
	.nav ul:first-child {
		border-top-left-radius: 0.107rem;
		border-top-right-radius: 0.107rem;
		overflow: hidden;
		background-image: url(../../../assets/home-img/tourBg.png), linear-gradient(to right, #fa5b57, #fb9b4e);
		background-repeat: no-repeat;
		background-size: 100% auto;
	}
	
	.nav .team {
		height: 1.9rem;
	}
	
	.nav li {
		box-sizing: border-box;
		float: left;
		width: 33.33%;
		height: 0.95rem;
		padding: 0.3rem 0;
		border-right: 0.027rem solid #f6f6f6;
		border-bottom: 0.027rem solid #f6f6f6;
		font-size: 0.3rem;
		text-align: center;
		color: #fff;
	}
	
	.nav .right {
		border-bottom: 0.027rem solid #f6f6f6;
		border-right: none;
	}
	
	.nav .ship {
		width: 66.66%;
	}
	.nav ul:last-child {
	    margin-top: 0.107rem;
	    border-bottom-left-radius: 0.107rem;
	    border-bottom-right-radius: 0.107rem;
	    overflow: hidden;
	    background-image: linear-gradient(to right, #4b90ed, #51bbed);
	}
	.nav ul:last-child li {
	    border-bottom: none;
	}
	.nav .right {
	    border-bottom: 0.027rem solid #f6f6f6;
	    border-right: none;
	}
</style>