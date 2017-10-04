<template>
  <h1 class="title text-shadow">
    {{ content }}
  </h1>
</template>

<script>
  export default {
    props: ['content']
  }
</script>

<style scoped lang="scss">
  h1 {
    margin-bottom: 15px;
    text-transform: uppercase;
  }
</style>
