<template>
	<div id="plan">
		<Plan_header></Plan_header>
		<Plan_cart :sendToCart="goodsInfo"></Plan_cart>
	</div>
</template>

<script>
	import Plan_header from "./components/plan_header";
	import Plan_cart from "./components/plan_cart";
	export default {
		data(){
			return{
				goodsInfo:{}
			}
		},
		components:{
			"Plan_header":Plan_header,
			"Plan_cart":Plan_cart
		},
		created(){
			let{id,name,img,price,startPlace} = this.$route.query;
			this.goodsInfo = this.$route.query;
			//console.log(this.goodsInfo)
		}
	}
</script>

<style>
</style>