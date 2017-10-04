<template>
  <div class="container">
    <Bottle />
    <Heading content="Perjantaipullo" />
    <AddPlayers />
  </div>
</template>

<script>
  import Bottle from '~/components/Bottle.vue'
  import Heading from '~/components/Heading.vue'
  import AddPlayers from '~/components/AddPlayers.vue'

  export default {
    components: {
      Bottle,
      Heading,
      AddPlayers
    }
  }
</script>
