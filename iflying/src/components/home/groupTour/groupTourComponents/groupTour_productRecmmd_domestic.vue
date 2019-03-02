<template>
	<div class="recom-product">
		<div class="recom-item" v-for="(item,index) in groupTourRecmmd_domestic" @click="handleToDetails(item.ProductID.$id)">
			<div class="recom-img">
				<img :src="item.DefaultPic">
				<span class="shadow">{{item.StartGADDR.Title}} | {{item.Score}}%满意度</span>
			</div>
			<div class="pro-tit two-line">
				{{item.WebTitle}}
			</div>
			<div class="pro-price price">
				<dfn>￥</dfn>
					{{item.MinPrice}}
				<span>起/人</span>
			</div>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default{
		computed: {
			...Vuex.mapState({
				groupTourRecmmd_domestic: state => state.home.groupTourRecmmd_domestic
			})
		},
		methods:{
			handleToDetails(id){
				this.$router.push({
					name:"details",
       				query:{id:id}
				})
			}
		},
	}
</script>

<style scoped>
	.recom-product {
		width: 100%;
	    display: flex;
	    align-content: center;
	    flex-flow: row wrap;
	    padding: 0 0.1rem 0.1rem;
	    background-color: #fff;
	    margin-bottom: 0.267rem;
	    justify-content: space-between;
	}
	.recom-item{
	    display: flex;
	    flex-flow: column wrap;
	    width: 48%;
	    box-sizing: border-box;
	    padding-top: 0.32rem;
	    
	}
	.recom-product .recom-img {
		width: 3.2rem;
	    position: relative;
	    height: 2.16rem;
	}
	.recom-product .recom-img img {
	    height: 100%;
	    width: 100%;
	    object-fit: cover;
	}
	.recom-product .shadow {
	    background-color: rgba(61,72,89,0.8);
	    position: absolute;
	    bottom: 0;
	    left: 0;
	    width: 100%;
	    color: #fff;
	    font-size: 0.2rem;
	    padding: 0.133rem 0 0.133rem 0.133rem;
	}
	.recom-product .pro-tit {
	    margin: 0.1rem 0;
	    color: #041a27;
	    font-size: 0.24rem;
	    overflow: hidden;
	}
	.recom-product .pro-price {
	    font-size: 0.34rem;
	    color: #ff6315;
	    font-family: "Helvetica Neue",Arial;
	}
	dfn {
	    font-size: 0.26rem;
	}
	.recom-product .pro-price span {
	    color: #999999;
	    font-size: 0.24rem;
	}
</style>