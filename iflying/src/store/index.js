import Vue from 'vue';
import Vuex from 'vuex';
import home from './home';
<<<<<<< HEAD
=======
import destination from './destination'
>>>>>>> wangdan
Vue.use(Vuex);



let state ={};
let actions = {};
let mutations = {};
let getters = {};

const store = new Vuex.Store({
	state,
	actions,
	mutations,
	getters,
	modules:{
		home,
<<<<<<< HEAD
=======
		destination
>>>>>>> wangdan
	}
})

export default store;
