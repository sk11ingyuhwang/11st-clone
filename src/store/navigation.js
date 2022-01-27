export default {
  namespaced: true,
  state: () =>({
    // 데이터는 항상 팩토리 함수로 만들어야 한다.
    isSHow : false,
    isShowLNB: false,
    isShowRNB: false,
  }),
  mutations:{
      setState(state, payload){
        Object.keys(payload).forEach((key)=>{ 
          state[key] = payload[key]
      })
    }
  },
  actions:{
    onNav({commit}){
     
      // commit('toggleIsShow')
      commit('setState', {
        isShow: true
      })
    },
    offNav({commit}){
      commit('setState', {
        isShow: false
      })
    }
  },
  getters:{

  }
}
