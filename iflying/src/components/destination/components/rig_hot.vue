<template>
	<div class="dest_right wrapper tabWrapper">
		<div class="content">
			<div class="dest_box" v-for="(item,index) in addressHot">
				<p class="hot">{{hotInfo[index]}}</p>
				<ul class="hotlist">
					<li v-for="list in item" :data-id="list.Notes" @click="handleHotDetails(list.Notes,list.Title)">
						<div class="hotOne">
							<div>
								<img :src="list.PicUrl" />
							</div>
							<p>{{list.Title}}</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
import Vuex from 'vuex';
export default{
	data(){
		return{
			hotInfo:["出境热门","国内热门","周边热门"]
		}
	},
	computed:{
		...Vuex.mapState({
			addressHot:state=>state.destination.addressHot
		})
	},
	created(){
		this.handleDestHotOne();
		this.handleDestHotTwo();
		this.handleDestHotThree();
	},
	methods:{
		...Vuex.mapActions({
			handleDestHotOne:"destination/handleDestHotOne",
			handleDestHotTwo:"destination/handleDestHotTwo",
			handleDestHotThree:"destination/handleDestHotThree",
		}),
		handleHotDetails(id,key){
			this.$router.push({
				name:'destinationDetails',
				query:{
					id:id,
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
			p.hot{
				height: 0.4rem;
				border-left:4px solid #ff7632;
				padding-left: 0.15rem;
				line-height: 0.4rem;
				font-size: 34px;
				margin-bottom: 0.4rem;
			}
			.hotOne{
				border-radius: 0.1rem;
				overflow: hidden;
				margin-bottom: 0.2rem;
				width: 100%;
				div{
					width: 100%;
					img{
						width: 100%;
					}
				}
				p{
					border:1px solid #dfdfdf;
					border-bottom-right-radius: 0.1rem;
					border-bottom-left-radius: 0.1rem;
					height: 0.7rem;
					line-height: 0.7rem;
					text-align: center;
					font-size: 34px;
				}
			}
			.hotlist{
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				li{
					width: 49%;
				}
				li:first-of-type{
					width: 100%;
				}
			}
		}	
	}
}	
</style>