<template>
  <div class="addPlayers">
    <input class="new-player box-shadow"
      autofocus autocomplete="off"
      v-bind:placeholder="placeHolder"
      v-model="playerName"
      @keyup.enter="addPlayerToStore()"
    />
    <button class="box-shadow" @click="addPlayerToStore()">+</button>
    <ul class="added-players">
      <li v-for="(player, key) in playersStore" @click="removePlayerFromStore(key)">{{ player.name }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        placeHolder: 'Lisää pelaaja',
        playerName: '',
        playersStore: this.$store.state.players
      }
    },
    methods: {
      addPlayerToStore () {
        this.$store.commit('addPlayer', this.playerName)
        this.clearInputField()
      },
      clearInputField () {
        this.playerName = ''
      },
      removePlayerFromStore (playerId) {
        this.$store.commit('removePlayer', playerId)
      }
    }
  }
</script>

<style scoped lang="scss">
  input {
    border: 0;
    font-family: inherit;
    font-size: inherit;
    padding: 10px;
    width: 300px;
  }
  button {
    background-color: #05D973;
    border: 0;
    color: #FFF;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    font-weight: bold;
    margin: 0 15px;
    padding: 10px;
  }
  .added-players {
    position: absolute;
    bottom: 15px;
    left: 15px;
    right: 15px;
    color: #000;
    li {
      background-color: #FFF;
      margin: 10px 0;
    }
  }
</style>
