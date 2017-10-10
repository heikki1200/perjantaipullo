<template>
  <div class="game">
    <canvas class="canvas" width="500" height="500" v-insert-canvas="playersData"></canvas>
    <!--<button class="box-shadow align-center">Spin</button>-->
  </div>
</template>

<script>
  export default {
    data () {
      return {
        playersData: this.$store.getters.getPlayersData
      }
    },
    created () {
      if (this.playersData.length === 0) {
        console.log('empty')
      }
    },
    directives: {
      insertCanvas (canvasElement, obj) {
        let data = obj.value.map(x => {
          return x.data
        })
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
        let lastEnd = 0
        let margin = 20
        let ctx = canvasElement.getContext('2d')
        for (var i = 0; i < data.length; i++) {
          ctx.fillStyle = 'rgb(' + colors[i] + ')'
          ctx.strokeStyle = 'rgb(0, 0, 0)'
          ctx.font = '20px Avenir'
          ctx.lineWidth = 5
          ctx.beginPath()
          ctx.fillText(names[i], 0, margin)
          ctx.moveTo(canvasElement.width / 2, canvasElement.height / 2)
          ctx.arc(canvasElement.width / 2, canvasElement.height / 2, canvasElement.height / 3, lastEnd, lastEnd + toRadians(playerDeg), false)
          ctx.closePath()
          ctx.fill()
          ctx.stroke()
          lastEnd += toRadians(playerDeg)
          margin += 20
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  button {
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 10px 30px;
  }
</style>
