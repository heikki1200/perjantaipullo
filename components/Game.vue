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
        let drawImage = new Image()
        let speed = 0
        drawImage.src = `/koff.png`
        let drawSlices = (color, deg) => {
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
          ctx.fillText(name, center - 100, 10)
          ctx.restore()
        }
        let drawPizza = () => {
          setInterval(() => {
            ctx.save()
            ctx.clearRect(0, 0, canvasElement.width, canvasElement.height)
            data.map(x => {
              drawSlices(x.color, deg)
              drawNames(x.name, deg + sliceDeg / 2)
              deg += sliceDeg
            })
            ctx.translate(center, center)
            ctx.rotate(speed / 180 / Math.PI)
            ctx.drawImage(drawImage, 0 - 200 / 2, 0 - 200 / 2, 200, 200)
            speed += 50
            ctx.restore()
          }, 10)
        }
        drawPizza()
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
