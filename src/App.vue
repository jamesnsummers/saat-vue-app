<template>
  <div id="app">
    <Nav />
    <Body />
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Body from './components/Body.vue'

export default {
  name: 'app',
  components: {
    Nav,
    Body,
  }
}
</script>

<style>
  html {
    /* background-color: black; */
    height: 100vh;
    overflow: hidden;
    width: 100vw;
  }
  body {
    background-color: gray;
    display: flex;
    margin: 0;
  }
  svg {
    height: 100%;
    width: 100%;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  li {
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }
  #app {
    background-color: #f6f5f3;
    color: #000000;
    display: block;
    font-family: 'NHaasGroteskTXStd-55Rg';
    height: 100vh;
    margin: 0 auto;
    max-width: 1400px;
    text-align: center;
    width: 100vw;
  }
</style>
