<template>
	<div id="destination">
		<div class="dest-top">
			<div class="search">
				<div class="searchImg">
					<img src="../../assets/destination/search.png" />
				</div>
				<span>搜索目的地，关键词</span>
			</div>
			<div class="dest_content">
				<img src="../../assets/my/myinfo.jpg" />
			</div>
		</div>
		<div class="dest-bot">
			<destLeft></destLeft>
			<destRight></destRight>
		</div>
	</div>
</template>

<script>
<<<<<<< HEAD
	export default {
		
	}
=======
import Vuex from 'vuex';
import destLeft from '@/components/destination/components/dest_left'
import destRight from '@/components/destination/components/dest_right'
export default{
	data(){
		return{
			value:'123'
		}
	},
	computed:{
		
	},
	created(){
		
	},
	methods:{
		
	},
	components:{
		destLeft,
		destRight
	}
}
>>>>>>> wangdan
</script>

<style scoped lang="scss">
/*通过路由懒加载解决单页面缺点
首次加载出现白屏,加载速度慢*/
</style>