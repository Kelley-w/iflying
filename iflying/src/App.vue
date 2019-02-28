<template>
  <div id="app">
    
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/common/footer'
export default {
  name: 'App',
  components:{
  	Footer
  }
}
</script>

<style>
#app{
	height: 100%;
}
</style>
