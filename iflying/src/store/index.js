import Vue from 'vue';
import Vuex from 'vuex';
import home from './home';
<<<<<<< HEAD
import destination from './destination'
=======
import destination from './destination';
>>>>>>> zhangyue
import my from './my';
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
		destination,
		my
	}
})

export default store;
