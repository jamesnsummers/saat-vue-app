<template>
  <div class="about_window_outer_container">
    <div class="about_window_inner_container">
      <div class="about_window"></div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'AboutWindow',
    props: {
      msg: String
    },
  }
</script>

<style scoped>
  .about_window_outer_container {
    height: 100vh;
    margin: 0 auto;
    max-width: 1700px;
    width: 100vw;
  }
  .about_window_inner_container {
    align-items: center;
    background-color: transparent;
    bottom: 46px;
    height: 25.3rem;
    margin-left: 10px;
    overflow: hidden;
    position: absolute;
    width: 45.3rem;
    z-index: 5;
  }
  .about_window {
    background-image: url('../assets/about_window.png');
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    position: absolute;
    width: 100%;
  }
  .about_window > img {
    height: 100%;
    width: 100%;
  }
  .about_window_outer_container.active {
    display: flex;
  }
  .about_window_outer_container:not(.active) {
    display: none;
  }
</style>