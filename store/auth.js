export const state = () =>({
  token : null
})


export const mutations ={
  setToken(state,token){
    state.token = token
  },
  clearToken(state){
    state.token = null
  }
}

export const actions = {
  async login({commit,dispatch}, formData){
    try {
      const token = await new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('mock-token'),2000)
      })
      dispatch('setToken',token)
    } catch (e) {
      commit('setError',e,{root:true})
      throw e
    }
   

  },
  async createUser({commit},formData){
try {
  console.log('create user');
  
} catch (e) {
  
}
  },
  setToken({commit},token){
    commit('setToken',token)
    console.log('token123 ',token)
  },

  logout({commit}){
    commit('clearToken')
  }
}


export const getters = {
  isAuthenticated: state =>!!state.token
}
