<template>
  <div class="play text-center">
    <Heading content="Pelaa" />
    <canvas class="canvas" width="500" height="500" v-insert-canvas="playersData"></canvas>
    <p>{{ renderPlayerNames }}</p>
    <p>{{ renderPlayerColors }}</p>
  </div>
</template>

<script>
  import Heading from '~/components/Heading.vue'

  export default {
    data () {
      return {
        playersData: this.$store.getters.getPlayersData
      }
    },
    directives: {
      insertCanvas (canvasElement, obj) {
        let names = obj.value.map(x => {
          return x.data.name
        })
        let colors = obj.value.map(x => {
          return x.data.color
        })
        function toRadians (deg) {
          return deg * Math.PI / 180
        }
        let playerDeg = 360 / names.length
        let lastend = 0
        let ctx = canvasElement.getContext('2d')
        for (var i = 0; i < names.length; i++) {
          ctx.fillStyle = 'rgb(' + colors[i] + ')'
          ctx.beginPath()
          ctx.moveTo(canvasElement.width / 2, canvasElement.height / 2)
          ctx.arc(canvasElement.width / 2, canvasElement.height / 2, canvasElement.height / 2, lastend, lastend + toRadians(playerDeg), false)
          ctx.lineTo(canvasElement.width / 2, canvasElement.height / 2)
          ctx.fill()
          ctx.font = '16px Avenir'
          ctx.fillText(names[i], 10, 50)
          lastend += toRadians(playerDeg)
        }
      }
    },
    computed: {
      renderPlayerNames () {
        return this.$store.getters.getPlayersNames
      },
      renderPlayerColors () {
        return this.$store.getters.getPlayersColors
      }
    },
    components: {
      Heading
    }
  }
</script>
