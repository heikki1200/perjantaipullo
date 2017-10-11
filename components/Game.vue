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
        let toRadians = deg => {
          return deg * Math.PI / 180
        }
        let sliceDeg = 360 / data.length
        let lastEnd = 0
        let margin = 20
        let ctx = canvasElement.getContext('2d')
        let drawPizza = () => {
          data.map(x => {
            ctx.fillStyle = 'rgb(' + x.color + ')'
            ctx.strokeStyle = 'rgb(0, 0, 0)'
            ctx.font = '20px Avenir'
            ctx.lineWidth = 5
            ctx.beginPath()
            ctx.moveTo(canvasElement.width / 2, canvasElement.height / 2)
            ctx.arc(canvasElement.width / 2, canvasElement.height / 2, canvasElement.height / 2.5, lastEnd, lastEnd + toRadians(sliceDeg), false)
            ctx.closePath()
            ctx.fillText(x.name, 0, margin)
            ctx.fill()
            ctx.stroke()
            lastEnd += toRadians(sliceDeg)
            margin += 20
          })
          ctx.save()
        }
        let drawBottle = (image, size) => {
          let drawImage = new Image()
          drawImage.src = `/${image}.png`
          ctx.drawImage(drawImage, canvasElement.width / 2 - (size / 2), canvasElement.width / 2 - (size / 2), size, size)
          ctx.save()
        }
        drawPizza()
        drawBottle('koff', 200)
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
