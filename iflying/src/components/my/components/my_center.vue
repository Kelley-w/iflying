<template>
	<div class="my_center">
		<ul>
			<li v-for="(item,index) in myStatusInfo" @click="handleToPlan(index)">
				<div class="imgBox">
					<img :src="item.img" />
				</div>
				<p>{{item.txt}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	props:['myStatusInfo'],
	data(){
		return{
			
		}
	},
	methods:{
		handleToPlan(index){
			if(index==2){
				this.$router.push({
					name:"plan"
				})
			}
		}
	}
}
</script>

<style>
.my_center{
	background: #fff;
	width: 100%;
	height: 100%;
}
.my_center ul{
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-wrap: wrap;
	background: #f1f1f1;
}
.my_center ul li{
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items:center;
	justify-content:center;
	width: 33.33%;
	background: #fff;
}
.my_center ul li .imgBox{
	width: 0.6rem;
	height: 0.6rem;
	vertical-align: middle;
	text-align: center;
}
.my_center ul li .imgBox img{
	vertical-align:middle;
}
.my_center ul li p{
	margin: 0.16rem;
	font-size: 0.28rem;
}
.goodsStatus  ul li{
	width:33.33%;
}
.myMember ul li{
	width: 25%;
	height:2rem;
	border-right:1px solid #999;
	border-bottom:1px solid #999;
}
</style>