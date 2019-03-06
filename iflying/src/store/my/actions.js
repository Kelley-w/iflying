import { handleRegister } from '@/apis/my';
import { getRegisters } from '@/apis/my';
//import jwt from 'jsonwebtoken';
import axios from 'axios';
export default {
	//注册
	async handleRegisters({
		commit
	}, obj) {
		let {
			username,
			password
		} = obj;

		let str;
		if(!(/^1[34578]\d{9}$/.test(username))) {
			return false;
		} else {
			let json = await getRegisters();
			console.log(json)
			var userArr = []
			for(var i = 0; i < json.length; i++) {
				userArr.push(json[i].username)
			}
			if(userArr.indexOf(username) != -1) {
				str = "您的账号已注册！";
			} else {
				var reg = /^([a-z0-9\.\@\!\#\$\%\^\&\*\(\)]){6,20}$/i
				if(reg.test(password)) {
					axios({
						method: "post",
						url: "http://localhost:3000/data",
						data: obj
					}).then(() => {})

					str = "注册成功";
					
				} else {
					str = "账号或密码不符合条件,注册失败";
				}
			}
		}
		return str;
	},
	//登录
	async handleLogin({
		commit
	}, obj) {
		let {
			username,
			password
		} = obj;
		let json = await getRegisters();
		console.log(json)
		let str;
		for(var i = 0; i < json.length; i++) {
			console.log(username, json[i].username)
			if(username == json[i].username) {
				if(password == json[i].password) {
					str = '登录成功';
					break;
				} else {
					str = '账号或密码错误';
					break;
				}
			} else {
				str = '您的账号没有注册';
			}

		}
		return str;
	}

}