import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dotd: []
  },
  mutations: {
    setDotd(state) {
      axios
        .get('http://192.168.43.85:8080/affiliate/offers/v1/dotd/json',
          {
            headers: {
              "Fk-Affiliate-Id": "yugandhale",
              "Fk-Affiliate-Token": "2e8adba7e4854c8384d72129cc8d9ee2"
            }
          })
        .then(response => {
          state.dotd = response.data.dotdList;
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  getters: {
    getDotd: (state) => () => {
      return state.dotd;
    }
  },
  actions: {
    async GetDotd(context) {
      await context.commit('setDotd')
    }
  },
  modules: {
  }
})
