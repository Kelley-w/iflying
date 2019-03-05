<template>
	<div id="index_littleAd">
		<section class="promote">
			<a v-for="(item,index) in littleAdImg" @click="handleClickDestination(index)">
				<img :src="item.PicUrl">
			</a>
		</section>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default{
		data(){
			return{
				destinationInfo:[],
				destinationId:"",
				destinationName:""
			}
		},
		computed:{
			...Vuex.mapState({
				littleAdImg:state=>state.home.littleAdImg
			})
		},
		created(){
			this.handleDestinationInfo()
		},
		methods:{
			handleDestinationInfo(){
				for(var i = 0; i < this.littleAdImg.length; i++){
					this.destinationInfo.push(this.littleAdImg[i].HttpUrl.split("?")[1])
				}
			},
			handleClickDestination(index){
				this.destinationId = this.destinationInfo[index].split('&')[0].split("=")[1];
				this.destinationName = this.destinationInfo[index].split('&')[1].split("=")[1];
				
				this.$router.push({
					name:'destinationDetails',
					query:{id:this.destinationId,key:this.destinationName}
				})
				//console.log(this.destinationName);
			}
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