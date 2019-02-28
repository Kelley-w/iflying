<template>
	<div>
		<div class="swiper-container" ref="swiperWrapper">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,index) in bannerImgs">
					<img :src="item.PicUrl">
				</div>
			</div>

			<div class="swiper-pagination"></div>
		</div>
	</div>
</template>

<script>
	import Swiper from "swiper";
	import Vuex from "vuex";
	import "swiper/dist/css/swiper.min.css";
	export default {
		computed: {
			...Vuex.mapState({
				bannerImgs: state => state.home.bannerImgs
			})
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
	}
</script>

<style>
	.swiper-container {
		width: 100%;
	}
	
	img {
		width: 100%;
	}
</style>