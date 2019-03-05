<template>
	<div id="city">
		<div class="geography-city">
			<ul id="hotBourn">
				
				<li v-for="(item,index) in partCity" @click="handleClickDestination(item.id,item.city)">
					<a>{{item.city}}</a>
				</li>
				<router-link to="/destination">
					<li>
						<a>更多目的地</a>
					</li>
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				partCity:[
					{
						id:"000000000000000000000579",
						city:"桂林"
					},
					{
						id:"000000000000000000000003",
						city:"欧洲"
					},
					{
						id:"000000000000000000000703",
						city:"日本"
					},
					{
						id:"000000000000000000003536",
						city:"普吉岛"
					},
					{
						id:"000000000000000000000008",
						city:"北京"
					}
				]
			}
		},
		methods:{
			handleClickDestination(id,name){
				this.$router.push({
					name:"destinationDetails",
					query:{id:id,key:name}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.geography-city{
	_margin-bottom: 1rem;
	width: 100%;
	height: 2.3rem;
	padding: 0.2rem;
	li{
		float: left;
		width: 2.27rem;
		height: 0.83rem;
		border: 0.01rem solid white;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 0.12rem;
		margin-right: 0.09rem;
		border-radius: 0.01rem;
		a{
			color: white;
			font-size: 0.26rem;
			font-weight: bold;
		}
	}
	li:nth-of-type(1){
		background: url("https://m.iflying.com/images/index/b1.png") no-repeat;
		background-size: 100% 100%;
	}
	li:nth-of-type(2){
		background: url("https://m.iflying.com/images/index/b2.png") no-repeat;
		background-size: 100% 100%;
	}
	li:nth-of-type(3){
		background: url("https://m.iflying.com/images/index/b3.png") no-repeat;
		background-size: 100% 100%;
	}
	li:nth-of-type(4){
		background: url("https://m.iflying.com/images/index/b4.png") no-repeat;
		background-size: 100% 100%;
	}
	li:nth-of-type(5){
		background: url("https://m.iflying.com/images/index/b5.png") no-repeat;
		background-size: 100% 100%;
	}
	li:nth-of-type(6){
		background: url("https://m.iflying.com/images/index/b6.png") no-repeat;
		background-size: 100% 100%;
	}
}
</style>