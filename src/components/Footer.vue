<template>
  <div class="footer">
    <!-- <AboutBtn /> -->
    <FooterRightSection />
    <a href="/">
      <div class="logo"></div>
    </a>
  </div>
</template>

<script>
  // import AboutBtn from './AboutBtn.vue'
  import FooterRightSection from './FooterRightSection.vue'

  export default {
    name: 'Footer',
    props: {
      msg: String
    },
    components: {
      // AboutBtn,
      FooterRightSection,
    }
  }
</script>

<style scoped>
  .footer {
    background: url('../assets/footer2.png');
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover;
    bottom: -1px;
    height: 3rem;
    margin: 0 auto;
    max-width: 1700px;
    position: absolute;
    width: 100vw;
    z-index: 6;
  }
  .logo {
    bottom: 0;
    cursor: pointer;
    height: 3rem;
    left: 1rem;
    position: absolute;
    width: 6.8rem;
  }
</style>