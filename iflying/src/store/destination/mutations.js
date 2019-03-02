export default{
	//目的地主页
	handleDestData(state,data){
		state.addressList = data;
	},
	//热门
	handleDestHotOne(state,data){
		state.addressHot.push(data);
	},
	handleDestHotTwo(state,data){
		state.addressHot.push(data);
	},
	handleDestHotThree(state,data){
		state.addressHot.push(data);
	}
}