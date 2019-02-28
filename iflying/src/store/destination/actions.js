import axios from 'axios';
export default{
	handleDestData({commit}){
		axios({
			method:'get',
			url:"http://localhost:8080/static/mddSearch.json"
		}).then((res)=>{
			commit("handleDestData",res.data)
		})
	}
}
