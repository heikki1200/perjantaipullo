<template>
  <div class="index text-center">
    <Heading content="Perjantaipullo" />
    <AddPlayers />
  </div>
</template>

<script>
  import Heading from '~/components/Heading.vue'
  import AddPlayers from '~/components/AddPlayers.vue'

  export default {
    components: {
      Heading,
      AddPlayers
    }
  }
</script>
