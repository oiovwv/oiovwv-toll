import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import Cookie from 'js-cookie'


Vue.use(Vuex)

const store=new Vuex.Store({
	state:{
		token:'1111afasf'
	},
	getters:{
		// getToken(){

		// }
	},
	mutations:{
		getToken(state){
			let token=Cookie.get('Token')
			state.token=token
		}
	},
	actions:{
		getToken({commit}){
			commit('getToken')
		}
	},
	modules:{
		user
	}
})


export default store