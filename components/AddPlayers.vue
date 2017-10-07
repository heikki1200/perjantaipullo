<template>
  <div class="add-players">
    <input class="box-shadow"
      autofocus autocomplete="off"
      v-bind:placeholder="placeHolder"
      v-model="playerName"
      @keyup.enter="addPlayerToStore()"
    />
    <button class="box-shadow" @click="addPlayerToStore()">+</button>
    <nuxt-link to="play" class="box-shadow block align-center" v-bind:class="showPlayButton ? '' : 'hidden'">Pelaa</nuxt-link>
    <ul class="added-players">
      <li v-for="(player, key) in playersStore" @click="removePlayerFromStore(key)" v-bind:style="{ backgroundColor: player.data.color }">{{ player.data.name }}</li>
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
        this.$store.commit('addPlayer', {
          name: this.playerName,
          color: 'rgb(' + this.randomColor() + ')'
        })
        this.clearInputField()
      },
      randomColor () {
        let r = Math.floor(Math.random() * 200) + 10
        let g = Math.floor(Math.random() * 200) + 10
        let b = Math.floor(Math.random() * 200) + 10
        return r + ',' + g + ',' + b
      },
      clearInputField () {
        this.playerName = ''
      },
      removePlayerFromStore (playerId) {
        this.$store.commit('removePlayer', playerId)
      }
    },
    computed: {
      showPlayButton () {
        if (this.$store.state.players.length > 1) {
          return true
        } else {
          return false
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .add-players {
    position: relative;
  }
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
    padding: 10px;
  }
  a {
    background-color: #05D973;
    padding: 10px;
    width: 332px;
    opacity: 1;
    transition: all ease-out .2s;
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    &.hidden {
      opacity: 0;
      top: 0;
      z-index: -1;
    }
  }
  .added-players {
    position: absolute;
    left: 15px;
    right: 15px;
    color: #000;
    top: 130px;
    li {
      color: #FFF;
      display: inline-block;
      margin: 0 15px;
      padding: 5px 15px;
      text-shadow: 0 0 1px #000;
    }
  }
</style>
