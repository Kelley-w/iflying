import {HomeData} from '@/apis/home'
export default{
	async handleHomeData(){
//		let params = {posid:5aa2268db0ae1c9477023056,stationid:1,typeid:,randomnumber:0.44789286418879515,fystid:nb}
		let data = await HomeData();
		console.log(data)
	}
}
