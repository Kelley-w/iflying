<template>
  <div id="app">
    
    <router-view/>
    <Footer v-if="flags"></Footer>
  </div>
</template>

<script>
import Footer from '@/components/common/footer';
import {getCookie,setCookie} from '@/utils/utils';
export default {
  name: 'App',
  components:{
  	Footer
  },
  data(){
  	return{
  		flags:true
  	}
  },
  updated(){
  	let flag = getCookie("state");
  	this.flags = flag;
  }
}
</script>

<style>
#app{
	height: 100%;
}
</style>
