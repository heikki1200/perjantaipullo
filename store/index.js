import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      players: [],
      counter: 1
    },
    mutations: {
      addPlayer (state, data) {
        if (data !== '') {
          state.players.push({
            id: state.counter++,
            data
          })
        }
      },
      removePlayer (state, id) {
        state.players.splice(id, 1)
      }
    },
    getters: {
      getPlayersData (state) {
        return state.players
      }
    }
  })
}

export default createStore
