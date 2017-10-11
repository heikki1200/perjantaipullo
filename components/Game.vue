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
        let deg = 0
        let center = canvasElement.width / 2
        let ctx = canvasElement.getContext('2d')
        let drawPizza = (color, deg) => {
          ctx.save()
          ctx.beginPath()
          ctx.fillStyle = 'rgb(' + color + ')'
          ctx.strokeStyle = 'rgb(0, 0, 0)'
          ctx.lineWidth = 5
          ctx.moveTo(center, center)
          ctx.arc(center, center, canvasElement.width / 2.5, toRadians(deg), toRadians(deg + sliceDeg), false)
          ctx.lineTo(center, center)
          ctx.fill()
          ctx.stroke()
          ctx.closePath()
          ctx.restore()
        }
        let drawNames = (name, deg) => {
          ctx.save()
          ctx.translate(center, center)
          ctx.rotate(toRadians(deg))
          ctx.textAlign = 'right'
          ctx.fillStyle = 'rgb(255, 255, 255)'
          ctx.font = 'bold 26px Avenir'
          ctx.fillText(name, canvasElement.width / 2 - 100, 10)
          ctx.restore()
        }
        let drawBottle = (image, size) => {
          ctx.save()
          let drawImage = new Image()
          drawImage.src = `/${image}.png`
          ctx.drawImage(drawImage, center - (size / 2), center - (size / 2), size, size)
          ctx.restore()
        }
        data.map(x => {
          drawPizza(x.color, deg)
          drawNames(x.name, deg + sliceDeg / 2)
          deg += sliceDeg
        })
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
