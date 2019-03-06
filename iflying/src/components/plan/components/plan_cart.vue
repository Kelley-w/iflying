<template>
	<div class="plan_cart">
		<div class="cartList">
			<div class="tab-content">
				<div class="tab-contents" v-for="(item,index) in goodsList">
					<div class="checkbox">
						<input type="checkbox" :checked="item.goodsFlag" @click="handleToggle(index)" />
					</div>
					<div class="tab-lefts">
						<img :src="item.goodsImg">
						<p class="tab-text">{{item.goodsStartPlace}}出发</p>
					</div>
					<div class="tab-right">
						<h6>{{item.goodsName}}</h6>
						<div class="tab-tags">
							<p>
								<span>￥{{item.goodsPrice}}</span>起
								<span @click="handleToDetails(item.goodsId)">详情</span>
								<span @click="handleDel(item.id)">删除</span>
							</p>
						</div>
					</div>
				</div>
				<div class="totalSeletor">
					<div class="input">
						<input type="checkbox" :checked="flag" @click="handleSelectAll()" />全选
					</div>
					<div class="littleCount">
						计划个数:<span>{{goodsCount.goodsNum}}</span>
					</div>
					<div class="sumCount">
						总计:<span>{{goodsCount.goodsPrice}}</span>元
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex";
	import axios from "axios";
	export default {
		data() {
			return {

				flag: true,
			}
		},
		computed: {
			...Vuex.mapState({
				goodsList: state => state.plan.goodsList
			}),
			...Vuex.mapGetters({
				goodsCount: "plan/goodsCount"
			})
		},
		created() {
			this.handleGetPlanData();
		},

		methods: {
			handleToDetails(id) {
				this.$router.push({
					name: "details",
					query: {
						id: id
					}
				})
			},
			handleDel(id) {
				axios({　　　　　　　　
					method: "delete",
					url: "http://localhost:3000/cart/" + id　　　　　　　　
				})
				this.$router.go(0)
			},
			handleToggle(index) {
				this.goodsList[index].goodsFlag = !(this.goodsList[index].goodsFlag)
				for(var i = 0; i < this.goodsList.length; i++) {
					if(!this.goodsList[i].goodsFlag) {
						this.flag = false
						break;
					} else {
						this.flag = true
					}
				}
			},
			...Vuex.mapActions({
				handleGetPlanData: "plan/handleGetPlanData"
			}),
			//全选
			handleSelectAll() {
				this.flag = !this.flag;
				for(var i = 0; i < this.goodsList.length; i++) {

					this.goodsList[i].goodsFlag = this.flag
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.totalSeletor {
		/*position: absolute;
		bottom: 0;*/
		background: #ff7a3b;
		height: 1rem;
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		.input {
			font-size: 0.3rem;
			color: white;
			input {
				width: 0.24rem;
				height: 0.24rem;
			}
		}
		.littleCount {
			color: white;
			font-size: 0.3rem;
			span {
				font-size: 0.4rem;
			}
		}
		.sumCount {
			color: white;
			font-size: 0.3rem;
			span {
				font-size: 0.4rem;
			}
		}
	}
	
	.cartList {
		margin-bottom: 1rem;
		margin-top: 0.9rem;
	}
	
	.checkbox {
		width: 0.4rem;
		height: 0.4rem;
		margin-right: 0.2rem;
		input {
			width: 100%;
			height: 100%;
			border-radius: 50%;
		}
	}
	
	.tab-contents {
		width: 100%;
		height: 2.3rem;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		border-bottom: 1px solid #e5e5e5;
		padding: 0.16rem 0.14rem;
		.tab-lefts {
			width: 2rem;
			height: 1.8rem;
			position: relative;
			img {
				width: 100%;
				height: 100%;
			}
			.tab-text {
				width: 1.8rem;
				position: absolute;
				bottom: 0;
				color: white;
				font-size: 0.2rem;
				text-align: center;
				background: #000000;
			}
		}
		.tab-right {
			width: 5rem;
			height: 1.8rem;
			margin-left: 0.2rem;
			position: relative;
			h6 {
				font-size: 0.3rem;
			}
			.tab-tags {
				position: absolute;
				bottom: 0;
				span {
					color: #ff6600;
					font-size: 0.4rem;
				}
			}
		}
	}
</style>