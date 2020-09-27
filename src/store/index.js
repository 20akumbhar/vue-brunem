import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dotd: [],
    categories: {},
    offers: [],
    offers_loading: true,
    dotd_loading: true
  },


  mutations: {
    setDotd(state) {
      if (!state.dotd.length) {
        axios
          .get('https://cors-anywhere.herokuapp.com/https://affiliate-api.flipkart.net/affiliate/offers/v1/dotd/json',
            {
              headers: {
                "Fk-Affiliate-Id": "yugandhale",
                "Fk-Affiliate-Token": "2e8adba7e4854c8384d72129cc8d9ee2",
              }
            })
          .then(response => {
            state.dotd = response.data.dotdList;
            state.dotd_loading = false;
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    setCategories(state) {
      axios
        .get('https://cors-anywhere.herokuapp.com/https://affiliate-api.flipkart.net/affiliate/api/yugandhale.json',
          {
            headers: {
              "Fk-Affiliate-Id": "yugandhale",
              "Fk-Affiliate-Token": "2e8adba7e4854c8384d72129cc8d9ee2"
            }
          })
        .then(response => {
          console.log("mut :\n ", response);
          state.categories = response.data.apiGroups.affiliate.apiListings;
        })
        .catch(error => {
          console.log(error)
        })
    },
    setOffers(state) {
      if (!state.offers.length) {
        axios
          .get('https://cors-anywhere.herokuapp.com/https://affiliate-api.flipkart.net/affiliate/offers/v1/all/json',
            {
              headers: {
                "Fk-Affiliate-Id": "yugandhale",
                "Fk-Affiliate-Token": "2e8adba7e4854c8384d72129cc8d9ee2",
              }
            })
          .then(response => {
            console.log(response);
            state.offers = response.data.allOffersList;
            state.offers_loading = false
          })
          .catch(error => {
            console.log(error)
          })
      }
    },

  },





  getters: {
    getDotd: (state) => () => {
      return state.dotd;
    },
    getCategories: (state) => () => {
      return state.categories;
    },
    getOffers: (state) => () => {
      return state.offers;
    }
  },





  actions: {
    async GetDotd(context) {
      await context.commit('setDotd')
    },
    async GetCategories(context) {
      await context.commit('setCategories')
    },
    async GetOffers(context) {
      await context.commit('setOffers')
    }
  },



  modules: {
  }
})
