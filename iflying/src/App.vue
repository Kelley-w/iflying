<template>
  <div id="app">
    
    <router-view/>
    <Footer v-if="$route.meta.Auth"></Footer>
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
  	}
  }
}
</script>

<style>
#app{
	height: 100%;
}
</style>
