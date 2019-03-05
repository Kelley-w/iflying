<template>
	<div class="login">
		<div class="login_box">
			<div class="headImg">
				<img src="../../../assets/my/logo.png"/>
			</div>
			<div class="formBox">
				<label></label>
				<input type="text" placeholder="请填写手机号" v-model="username"/>
			</div>
			<div class="formBox">
				<label></label>
				<input type="password" placeholder="密码" v-model="password"/>
			</div>
			<div class="formBox forget">
				<p>密码由6-20位英文字母、数字或符合组成</p>
			</div>
			<mt-button size="large" @click="handleRegister()">注册</mt-button>
			<p class="agreement">登录即代表您同意我们的服务协议</p>
		</div>
		
	</div>
</template>

<script>
import Vuex from 'vuex';
export default{
	data(){
		return{
			username:'',
			password:'',
		}
	},
	computed:{
	},
	created(){
	},
	methods:{
		handleRegister(){
			let obj = {
				username:this.username,
				password:this.password
			}
			let str = this.Register(obj);
			str.then(function(rs){
				if(rs == '注册成功'){
					alert(rs);
					this.$router.push({
						name:"login"
					});
				}else{
					alert(rs);
				}
				
			})
		},
		...Vuex.mapActions({
			Register:"my/handleRegisters"
		})
	}
}
</script>

<style scoped lang="scss">
.login{
	width: 100%;
	height: 100%;
	background: url("../../../assets/my/loginBg.jpg")no-repeat left top;
	background-size: 100% 100%;
}
.login_box{
	width: 60%;
	margin: 0 auto;
	padding-top: 1.4rem;
	height: 100%;
	position: relative;
	.headImg{
		width: 1.4rem;
		height: 1.4rem;
		border-radius: 50%;
		background: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		margin:0 auto 1rem;
		img{
			width:0.6rem;
			height:1rem;
		}
	}
	.formBox{
		border-bottom:2px solid #fff;
		height: 0.9rem;
		background:transparent;
		display: flex;
		justify-content:flex-start;
		align-items: center;
		margin-top: 0.3rem;
		label{
			width:0.9rem;
			height: 100%;
			background: url(../../../assets/my/username.png) no-repeat center center;
			background-size:0.45rem 0.45rem;
		}
		input{
			height:0.36rem;
			width:3.6rem;
			border: none;
			border-left:2px solid #fff;
			outline: none;
			background: transparent;
			line-height: 0.36rem;
			padding-left:0.2rem;
			font-size: 34px;
			color: #fff;
		}
		input::-webkit-input-placeholder{
			color: #fff;
			font-size:30px;
		}
	}
	.formBox:last-of-type{
		label{
			background: url(../../../assets/my/loingm.png) no-repeat center center;
			background-size:0.45rem 0.45rem;
			width: 0.9rem;
		}
	}
	.forget{
		border-bottom: 0;
		color: #fff;
		display: flex;
		justify-content: flex-end;
		margin-top: 0;
		.fenge{
			margin: 0 0.1rem;
		}
	}
	.agreement{
		position: fixed;
		bottom: 0;
		color: #fff;
		height: 0.3rem;
		text-align: center;
		margin: 0 auto;
	}
}
</style>