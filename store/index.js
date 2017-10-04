import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      players: [],
      counter: 1
    },
    mutations: {
      addPlayer (state, playerName) {
        if (playerName !== '') {
          state.players.push(
            {
              id: state.counter++,
              playerName
            }
          )
        }
      }
    }
  })
}

export default createStore
