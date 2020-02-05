<template>
  <div class="title_outer_container">
    <div class="livestream title_container active">
      <span>Case Study</span>
    </div>
    <div class="art_direction title_container">
      <span>Art Direction Case Study</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VideoTitleBlock',
    props: {
      msg: String
    }
  }
</script>

<style scoped>
  .title_outer_container {
    cursor: default;
    left: 10px;
    position: absolute;
    top: 15px;
  }
  .title_container > span {
    font-family: 'NHaasGroteskTXStd-75Bd';
    font-size: 22px;
  }
  .title_container.active {
    display: block;
  }
  .title_container:not(.active) {
    display: none;
  }
  @font-face {
    font-family: "NHaasGroteskTXStd-75Bd";
    src: url('../assets/fonts/NHaasGroteskTXStd-75Bd.ttf');
  }
</style>