<template>
  <div class="game">
    <canvas class="canvas" width="300" height="300" v-insert-canvas="playersData" :class="showElement ? 'hidden' : ''"></canvas>
    <nuxt-link to="/" class="button button-back box-shadow block">Takasin</nuxt-link>
    <button class="button button-spin box-shadow block align-center" :class="hideSpinButton ? 'hidden' : ''">Spin</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        playersData: this.$store.getters.getPlayersData,
        hideSpinButton: false
      }
    },
    created () {
      if (this.playersData.length === 0) {
        this.hideSpinButton = true
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
          ctx.textAlign = 'left'
          ctx.fillStyle = 'rgb(255, 255, 255)'
          ctx.font = 'bold 18px Avenir'
          ctx.fillText(name, center - 120, 10)
          ctx.restore()
        }
        let drawPizza = () => {
          ctx.save()
          ctx.clearRect(0, 0, canvasElement.width, canvasElement.height)
          data.map(x => {
            drawSlices(x.color, deg)
            drawNames(x.name, deg + sliceDeg / 2)
            deg += sliceDeg
          })
          ctx.restore()
        }
        drawPizza()
      }
    }
  }
</script>

<style scoped lang="scss">
  .button {
    border-radius: 0;
    &.hidden {
      display: none;
    }
  }
  .button-back {
    left: 15px;
    position: fixed;
    top: 15px;
  }
  .button-spin {
    width: 260px;
  }
  canvas {
    transform: rotate(-90deg);
    &.hidden {
      display: none;
    }
  }
</style>
