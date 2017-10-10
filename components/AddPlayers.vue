<template>
  <div class="add-players">
    <input class="box-shadow"
      autofocus autocomplete="off"
      v-bind:placeholder="placeHolder"
      v-model="playerName"
      @keyup.enter="addPlayerToStore()"
    />
    <button class="box-shadow" @click="addPlayerToStore()">+</button>
    <nuxt-link to="play" class="box-shadow block align-center" :class="showPlayButton ? '' : 'hidden'">Pelaa</nuxt-link>
    <ul class="added-players">
      <li :key="key" v-for="(player, key) in playersData" @click="removePlayerFromStore(key)" :style="{ backgroundColor: 'rgb(' + player.data.color + ')' }">{{ player.data.name }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        placeHolder: 'Lisää pelaaja',
        playerName: '',
        playersData: this.$store.getters.getPlayersData
      }
    },
    methods: {
      addPlayerToStore () {
        this.$store.commit('addPlayer', {
          name: this.playerName,
          color: this.randomColor()
        })
        this.clearInputField()
      },
      randomColor () {
        let r = Math.floor(Math.random() * 245) + 10
        let g = Math.floor(Math.random() * 245) + 10
        let b = Math.floor(Math.random() * 245) + 10
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
        if (this.$store.getters.getPlayersData.length > 1) {
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
