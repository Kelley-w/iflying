<template>
	<div class="dest_right wrapper tabWrapper" ref="wrapper">
		<div class="content">
			<div class="dest_box" v-for="data in addressList.nb[addrId].mdd">
				<p>{{data.Title}}</p>
				<ul>
					<li v-for="list in data.Childen" :dataId="list.ID" @click="handleAddress(list.Title)">{{list.Title}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import Vuex from 'vuex';
import BScroll from 'better-scroll';
export default{
	data(){
		return{
			
		}
	},
	props:['addrId'],
	computed:{
		...Vuex.mapState({
			addressList:state=>state.destination.addressList
		}),
		
	},
	created(){
		this.handleDestData();
		var scroll = new BScroll(this.$refs.wrapper,{
	            scrollY:true,
	            tap:false
	        });
	},
	methods:{
		...Vuex.mapActions({
			handleDestData:"destination/handleDestData"
		}),
		handleAddress(key){
			this.$router.push({
				name:'destinationDetails',
				query:{
//					id:id,
					key:key
				}
			})
		}
	}
}
</script>

<style scoped lang="scss">
.dest_right{
	flex: 1;
	padding:0 0.3rem;
	margin-left: 1.8rem;
	margin-bottom: 1rem;
	height: max-content;
	.content{
		height:max-content;;
		.dest_box{
			margin:0.3rem auto 0.2rem;
			p{
				height: 0.4rem;
				border-left:4px solid #ff7632;
				padding-left: 0.15rem;
				line-height: 0.4rem;
				font-size: 34px;
			}
			ul{
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				li{
					width: 2.4rem;
					height: 0.9rem;
					background:#f3f4f7;
					margin-top: 0.2rem;
					line-height:0.9rem;
					text-align: center;
					font-size: 34px;
				}
			}
		}
	}
}
</style>