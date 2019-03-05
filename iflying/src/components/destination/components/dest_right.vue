<template>
	<div>
		<Component :is="com" :addrId="list"></Component>
	</div>
</template>

<script>
import destHot from '@/components/destination/components/rig_hot';
import address from '@/components/destination/components/rig_address'
export default{
	components:{
		'hot':destHot,
		'addr':address
	},
	data(){
		return{
			com:'hot',
			list:''
		}
	},
	methods:{
	},
	created(){
		this.observer.$on("handleAddressHot",(params)=>{
			//console.log(params)
			
			if(params.index!=0){
				this.com = 'addr';
				this.list = params.list;
			}else{
				this.com = 'hot';
			}
		})
	}
}
</script>

<style>
</style>