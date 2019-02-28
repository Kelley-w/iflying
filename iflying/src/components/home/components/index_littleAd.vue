<template>
	<div id="index_littleAd">
		<section class="promote">
			<a href="##" v-for="(item,index) in littleAdImg">
				<img :src="item.PicUrl">
			</a>
		</section>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default{
		computed:{
			...Vuex.mapState({
				littleAdImg:state=>state.home.littleAdImg
			})
		}
	}
</script>

<style scoped>
.promote {
    display: flex;
    align-items: flex-start;
    box-sizing: border-box;
    _padding: 0.133rem;
    background: #fff;
    overflow: hidden;
   	justify-content: space-around;
   	_margin-bottom: 1rem;
}
.promote a{
	display: block;
	flex: 1 1 0;
	margin-left: 0.04rem;
}
.promote img {
    width: 100%;
    vertical-align: top;
}
</style>