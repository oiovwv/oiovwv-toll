import Cookies from 'js-cookie'
const user={
	state:{
		userName:'',
		status:'',
		uid:undefined,
		token:''
	},
	getters:{

	},
	mutations:{
		SET_USER_NAME:(state,userName)=>{
			state.userName=userName
		},
		SET_STATUS:(state,status)=>{
			state.status=status
		},
		SET_UID:(state,uid)=>{
			state.uid=uid
		},
		SET_TOKEN:(state,token)=>{
			state.token=token
		}
	},
	actions:{
		LoginById({commit},userInfo){
			const uid=userInfo.userId.trim()
			// this.$http(this.Api.query,uid,userInfo.userPwd)
			// .then(res=>{
			// 	Cookies.set('Token',res.data.token)
			// 	commit('SET_USER_NAME',res.data.name)
			// 	this.$router.push('/toll')
			// }).catch(error=>{
			// 	console.log(error)
			// })
		}
	}
}

export default{
    user
}