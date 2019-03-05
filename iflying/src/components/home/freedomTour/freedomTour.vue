<template>
	<div class="freedomTour">
		<FreedomTour_header></FreedomTour_header>
		<FreedomTour_goods></FreedomTour_goods>
	</div>
</template>

<script>
	import FreedomTour_header from "./freedomTourComponents/freedomTour_header";
	import FreedomTour_goods from "./freedomTourComponents/freedomTour_goods";
	
	export default{
		components:{
			"FreedomTour_header":FreedomTour_header,
			"FreedomTour_goods":FreedomTour_goods
		}
	}
</script>

<style>
</style>