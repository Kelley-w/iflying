<template>
	<div class="destinationDetails">
		<DestinationDetails_header :sendToHeader="destinationName"></DestinationDetails_header>
		<DestinationDetails_tabBar></DestinationDetails_tabBar>
		<DestinationDetails_goods :sendToGoods="destinationDetails.LineList"></DestinationDetails_goods>
	</div>
</template>

<script>
	import {DestinationDetails} from '@/apis/home';
	import {SearchResultData} from '@/apis/home';
	import DestinationDetails_header from "./components/destinationDetails_header";
	import DestinationDetails_tabBar from "./components/destinationDetails_tabBar";
	import DestinationDetails_goods from "./components/destinationDetails_goods";
	export default{
		data() {
			return {
				destinationDetails: {},
				destinationName:""
			}
		},
		async created() {
			let {
				id,
				key
			} = this.$route.query;

			let data = await DestinationDetails(id)
			let searchData = await SearchResultData(key)
			this.destinationName = key
			//console.log(this.destinationName)
			//console.log(key)
			//console.log(data.data)
			//console.log(searchData)
			if(data.data){
				this.destinationDetails = data.data
			}else{
				
				this.destinationDetails = searchData.data
			}
		},
		components:{
			"DestinationDetails_header":DestinationDetails_header,
			"DestinationDetails_tabBar":DestinationDetails_tabBar,
			"DestinationDetails_goods":DestinationDetails_goods
		}
	}
</script>

<style>
</style>