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
      },
      getPlayersNames (state) {
        return state.players.map(x => {
          return x.data.name
        })
      },
      getPlayersColors (state) {
        return state.players.map(x => {
          return x.data.color
        })
      }
    }
  })
}

export default createStore
