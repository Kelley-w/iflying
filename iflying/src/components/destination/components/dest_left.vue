<template>
	<div class="content_left">
		<ul>
			<li v-for="(item,index) in leftInfo" :data-id="item.dataId" @click="handleAddress(item.dataId,index)" :class="index==activeIndex?'active':''">
				{{item.name}}
			</li>
		</ul>
	</div>
</template>

<script>
import Vuex from 'vuex';
export default{
	data(){
		return{
			activeIndex:'',
			leftInfo:[
				{
					dataId:'hotDestina',
					name:'热门1'
				},
				{
					dataId:'aroundMddData',
					name:'周边'
				},
				{
					dataId:'domesticMddData',
					name:'国内'
				},
				{
					dataId:'gatMddData',
					name:'港澳台'
				},
				{
					dataId:'hdMddData',
					name:'海岛'
				},
				{
					dataId:'dnyMddData',
					name:'东南亚'
				},
				{
					dataId:'rhcMddData',
					name:'日韩朝'
				},
				{
					dataId:'ozMddData',
					name:'欧洲'
				},
				{
					dataId:'zdfMddData',
					name:'中东非'
				},
				{
					dataId:'mzMddData',
					name:'美洲'
				},
				{
					dataId:'axMddData',
					name:'澳新'
				}
			]
		}
	},
	computed:{
	},
	methods:{
		handleAddress(list,index){
			this.observer.$emit("handleAddressList",list)
			this.activeIndex = index;
		}
	}
}
</script>

<style scoped lang="scss">
.content_left{
	width:1.8rem;
	height:calc(100% - 0.9rem);
	background:#f3f4f7;
	position: fixed;
	left: 0;
	ul{
		width: 100%;
		li{
			height:0.9rem;
			border-bottom:1px solid #e9e9ea;
			line-height: 0.9rem;
			background:#f3f4f7;
			font-size: 36px;
			padding-left:0.2rem;
		}
		.active{
			color: #ff7632;
			background: #fff;
		}
	}
}	
</style>