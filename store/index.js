import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      players: [],
      counter: 1
    },
    mutations: {
      addPlayer (state, name) {
        if (name !== '') {
          state.players.push({
            id: state.counter++,
            name: name
          })
        }
      },
      removePlayer (state, id) {
        state.players.splice(id, 1)
      }
    }
  })
}

export default createStore
