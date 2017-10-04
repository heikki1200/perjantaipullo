<template>
  <div id="app" class="flex center-ho center-ve">
    <nuxt />
  </div>
</template>

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
    text-align: center;
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
  .text-shadow {
    text-shadow: 0 0 10px #000;
  }
  .box-shadow {
    box-shadow: 0 0 10px #000;
  }
</style>
