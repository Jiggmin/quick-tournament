import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  itemList: [],
  survivingItemList: [],
  page: 'registration'
}

const mutations = {
  addItem (state, item) {
    state.itemList.push(item)
  },
  removeItem (state, itemToRemove) {
    state.itemList = remove(state.itemList, itemToRemove)
  },
  removeAllItems (state) {
    state.itemList = []
  },
  beginTournament (state) {
    state.page = 'tournament'
    state.survivingItemList = [...state.itemList]
  },
  beginRegistration (state) {
    state.page = 'registration'
  },
  battle (state, {winner, loser}) {
    state.survivingItemList = remove(state.survivingItemList, loser)
    state.survivingItemList = remove(state.survivingItemList, winner)
    state.survivingItemList.push(winner)
  }
}

const actions = {
}

const getters = {
}

const remove = (arr, itemToRemove) => arr.filter(item => item !== itemToRemove)

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
