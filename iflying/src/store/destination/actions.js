import axios from 'axios';
import {handleHotOne,handleHotTwo,handleHotThree} from '@/apis/destination';
export default{
	//目的地主页数据
	handleDestData({commit}){
		axios({
			method:'get',
			url:"http://localhost:8080/static/mddSearch.json"
		}).then((res)=>{
			commit("handleDestData",res.data)
		})
	},
	//热门数据
	async handleDestHotOne({commit}){
		let data = await handleHotOne();
		commit("handleDestHotOne",data.data);
	},
	async handleDestHotTwo({commit}){
		let data = await handleHotTwo();
		commit("handleDestHotOne",data.data);
	},
	async handleDestHotThree({commit}){
		let data = await handleHotThree();
		commit("handleDestHotOne",data.data);
	}
}
