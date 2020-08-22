<template>
  <div id="app">
    <Header />
    <Body />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Body from './components/Body.vue'

export default {
  name: 'app',
  components: {
    Header,
    Body,
  }
}
</script>

<style>
  html {
    background-color: black;
    height: 100vh;
    overflow: hidden;
    width: 100vw;
  }
  body {
    background-color: #f6f5f3;
    display: flex;
    margin: 0 auto;
    max-width: 1700px;
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
    color: #000000;
    display: block;
    font-family: 'NHaasGroteskTXStd-55Rg';
    height: 100vh;
    text-align: center;
    width: 100vw;
  }
</style>
