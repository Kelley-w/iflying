<template>
	<div id="tab-bar">
	    <mt-tabbar v-model="selected" v-show="isShow" fixed>
	      <mt-tab-item id="home">
	        <img :src="img1" slot="icon">首页
	      </mt-tab-item>
	      <mt-tab-item id="destination">
	        <img :src="img2" slot="icon">目的地
	      </mt-tab-item>
	      <mt-tab-item id="plan">
	        <img :src="img3" slot="icon">出游计划
	      </mt-tab-item>
	      <mt-tab-item id="my">
	        <img :src="img4" slot="icon">我的
	      </mt-tab-item>
	    </mt-tabbar>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				isShow:true,
				selected:'home',
		        img1: "https://m.iflying.com/images/index/travel_hover.png",
		        img2: "https://m.iflying.com/images/index/destina.png",
		        img3: "https://m.iflying.com/images/index/tourPlan.png",
		        img4: "https://m.iflying.com/images/index/home.png",
			}
		},
		watch:{
			selected:{
				handler(){
					if(this.selected === 'home'){
						this.$router.push("/home");
						this.img1 = 'https://m.iflying.com/images/index/travel_hover.png'
					}else{
						this.img1 = 'https://m.iflying.com/images/index/travel.png';
					}
					if(this.selected === 'destination'){
						this.$router.push("/destination");
						this.img2 = 'https://m.iflying.com/images/index/destina_hover.png';
					}else{
						this.img2 = 'https://m.iflying.com/images/index/destina.png';
					}
					if(this.selected === 'plan'){
						this.$router.push("/plan");
						this.img3 = 'https://m.iflying.com/images/index/tourPlan_hover.png';
					}else{
						this.img3 = 'https://m.iflying.com/images/index/tourPlan.png'
					}
					if(this.selected === 'my'){
						this.$router.push("/my");
						this.img4 = 'https://m.iflying.com/images/index/home_hover.png';
					}else{
						this.img4 = 'https://m.iflying.com/images/index/home.png'
					}
				}
			}
		}
	}
</script>

<style scoped>
#tab-bar{
    width: 100%;
    height:1rem;
    background: #fff;
    border-top:1px solid #868686;
    position: fixed;
    left: 0;
    bottom: 0;
}
	
    

    
</style>