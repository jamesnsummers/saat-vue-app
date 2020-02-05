<template>
  <div id="app">
    <DesktopBackground msg="desktop background"/>
    <NavLeft msg="nav left"/>
    <MediaWindow msg="video window"/>
    <StatsWindow msg="stats window"/>
    <AboutWindow msg="about window"/>
    <Footer msg="footer"/>
  </div>
</template>

<script>
import DesktopBackground from './components/DesktopBackground.vue'
import NavLeft from './components/NavLeft.vue'
import MediaWindow from './components/MediaWindow.vue'
import StatsWindow from './components/StatsWindow.vue'
import AboutWindow from './components/AboutWindow.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    DesktopBackground,
    NavLeft,
    MediaWindow,
    StatsWindow,
    AboutWindow,
    Footer,
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
    background-color: rgb(221, 47, 51);
    margin: 0 auto;
    max-width: 1700px;
    display: grid;
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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  @font-face {
    font-family: "NHaasGroteskTXStd-55Rg";
    src: url('./assets/fonts/NHaasGroteskTXStd-55Rg.ttf');
  }
  @font-face {
    font-family: "NHaasGroteskTXStd-75Bd";
    src: url('./assets/fonts/NHaasGroteskTXStd-75Bd.ttf');
  }
</style>
