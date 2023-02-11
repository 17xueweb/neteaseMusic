import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    topListIds: [],
    nextId: ''
  },
  mutations: {
    INIT_TOPLISTIDS(state, payload) {
      state.topListIds = payload
    },
    NEXT_ID(state, payload) {
      for(var i = 0; i < state.topListIds.length; i++) {
        // 传入当前id 获取下一首歌曲id
        if(state.topListIds[i].id == payload) {
          state.nextId = state.topListIds[i+1].id
        }
      }
    }
  }
})