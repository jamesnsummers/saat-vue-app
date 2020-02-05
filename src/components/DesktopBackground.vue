<template>
  <div class="desktop_background_container">
    <div class="computer">
      <img src="../assets/computer.png" alt="computer">
    </div>
    <div class="dot_container">
      <img src="../assets/dot.png" alt="dot">
      <img src="../assets/dot.png" alt="dot">
      <img src="../assets/dot.png" alt="dot">
      <img src="../assets/dot.png" alt="dot">
    </div>
    <div class="cupcake">
      <img src="../assets/cupcake.png" alt="cupcake">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DesktopBackground',
    props: {
      msg: String
    }
  }
</script>

<style scoped>
  .desktop_background_container {
    display: flex;
    position: absolute;
    height: 100%;
    margin: 0 auto;
    max-width: 1700px;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .computer > img {
    height: auto;
    width: 4rem;
  }
  .dot_container {
    padding: 0 40px;
  }
  .dot_container > img {
    padding: 0px 3px;
  }
  .cupcake > img {
    height: auto;
    width: 3.3rem;
  }
</style>