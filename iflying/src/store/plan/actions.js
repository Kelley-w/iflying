import axios from "axios";
export default {
	handleGetPlanData({commit}) {
		axios({
			methods: "get",
			url: "http://localhost:3000/cart",
		}).then((data) => {
			commit("handleGetPlanData",data);
		})
	}
}