<template>
	<div>
		<div class="swiper-container" ref="swiperWrapper">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,index) in sendToSwiper">
					<img :src="item.PicPath">
				</div>
			</div>
			<div class="pic_backBtn" @click="handleBack()">
				<img class="backBtn" src="../../../assets/home-img/backBtn.png"/>
			</div>
		</div>
	</div>
</template>

<script>
	import Swiper from "swiper";
	import "swiper/dist/css/swiper.min.css";
	export default {
		props:{
			sendToSwiper:Array
		},
		updated() {
			if(!this.swiper) {
				this.swiper = new Swiper(this.$refs.swiperWrapper, {
					autoplay: {
						disableOnInteraction: false
					},
					loop:true
				})
			}

		},
		methods:{
			handleBack(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped lang="scss">
	.swiper-container img{
		width: 100%;
		height: 4.41rem;
	}
	.pic_backBtn{
		position: absolute;
		top: 0.3rem;
		left: 0.2rem;
		width: 0.5rem;
		height: 0.5rem;
		z-index: 5;
		img{
			width: 100%;
			height: 100%;
		}
	}
</style>