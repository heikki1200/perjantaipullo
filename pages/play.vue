<template>
  <div class="play text-center">
    <Heading content="Pelaa" />
    <p>{{ this.$store.state.players }}</p>
  </div>
</template>

<script>
  import Heading from '~/components/Heading.vue'

  export default {
    components: {
      Heading
    }
  }
</script>
