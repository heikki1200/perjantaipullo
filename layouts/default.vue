<template>
  <div id="app" class="flex center-ho center-ve">
    <div class="container">
      <Bottle />
      <nuxt />
    </div>
  </div>
</template>

<script>
  import Bottle from '~/components/Bottle.vue'

  export default {
    components: {
      Bottle
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    width: 100%;
    height: 100%;
  }
  body {
    background-color: #000;
    color: white;
    font-family: 'Avenir', Arial, Helvetica, sans-serif;
    font-size: 18px;
    overflow: hidden;
  }
  .container {
    position: relative;
  }
  h1 {
    font-size: 8vw;
  }
  #__nuxt {
    height: 100%;
    width: 100%;
  }
  #app {
    height: 100%;
    width: 100%;
  }
  .flex {
    display: flex;
  }
  .center-ho {
    align-items: center;
  }
  .center-ve {
    justify-content: center;
  }
  .align-center {
    margin: 0 auto;
  }
  .text-center {
    text-align: center;
  }
  .text-shadow {
    text-shadow: 0 0 10px #000;
  }
  .box-shadow {
    box-shadow: 0 0 10px #000;
  }
  .page-enter-active, .page-leave-active {
    transition: opacity .25s;
  }
  .page-enter, .page-leave-to {
    opacity: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  .block {
    display: block;
  }
</style>
