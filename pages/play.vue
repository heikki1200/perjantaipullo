<template>
  <div class="play text-center">
    <!--<Heading content="Pelaa" />-->
    <Game />
  </div>
</template>

<script>
  import Heading from '~/components/Heading.vue'
  import Game from '~/components/Game.vue'

  export default {
    components: {
      Heading,
      Game
    }
  }
</script>
