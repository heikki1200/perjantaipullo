<template>
  <div class="addPlayers">
    <input class="new-player box-shadow"
      autofocus autocomplete="off"
      v-bind:placeholder="placeHolder"
      v-model="playerName"
      @keyup.enter="updateStore()"
    />
    <button class="box-shadow" @click="updateStore()">+</button>
    <div class="added-players">
      {{ getPlayers() }}
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        placeHolder: 'Lisää pelaaja',
        playerName: ''
      }
    },
    methods: {
      updateStore () {
        this.$store.commit('addPlayer', this.playerName)
      },
      getPlayers () {
        return this.$store.state.players
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
  }
  button {
    background-color: #FFF;
    border: 0;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    margin: 0 15px;
    padding: 10px;
  }
  .added-players {
    position: absolute;
    bottom: 15px;
    left: 15px;
    right: 15px;
    color: #000;
    background-color: #FFF;
  }
</style>
