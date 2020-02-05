<template>
  <div class="stats_window_outer_container">
    <div class="stats_window_inner_container">
      <div class="stats_window paid_media visible" v-on:click="bringWindowToFront">
        <img class="stats_window_img" src="../assets/paid_media_window.png" alt="paid media window">
        <div class="title_outer_container">
          <div class="title_container">
            <span>Paid Media</span>
          </div>
        </div>
        <CloseBtn />
        <img class="paid_media_gif" src="../assets/paid_media.gif" alt="paid media gif">
      </div>
      <div class="stats_window impressions visible" v-on:click="bringWindowToFront">
        <img class="stats_window_img" src="../assets/impressions_window.png" alt="paid media window">
        <div class="title_outer_container">
          <div class="title_container">
            <span>Impressions</span>
          </div>
        </div>
        <CloseBtn />
        <img class="impressions_gif" src="../assets/impressions_2.gif" alt="paid media gif">
      </div>
      <div class="stats_window viewers visible" v-on:click="bringWindowToFront">
        <img class="stats_window_img" src="../assets/viewers_window.png" alt="paid media window">
        <div class="title_outer_container">
          <div class="title_container">
            <span>Viewers</span>
          </div>
        </div>
        <CloseBtn />
        <img class="viewers_gif" src="../assets/viewers_2.gif" alt="paid media gif">
      </div>
    </div>
  </div>
</template>

<script>
  import CloseBtn from './CloseBtn.vue';

  export default {
    name: 'StatsWindow',
    props: {
      msg: String
    },
    components: {
      CloseBtn,
    },
    methods: {
      bringWindowToFront: function(e) {
        const thisWindow = e.target.closest('.stats_window');
        const statsWindows = this.$el.children[0].children;
        window.console.log('statsWindows: ', statsWindows);
        for (let i = 0; i < statsWindows.length; i++) {
          const window = statsWindows[i];
          window.classList.remove('active');
        }
        thisWindow.classList.add('active');
      }
    }
  }
</script>

<style scoped>
  .stats_window_outer_container {
    display: block;
    height: 100vh;
    max-width: 1700px;
    position: absolute;
    top: 0;
    width: 100vw;
  }
  .stats_window_inner_container {
    margin: auto;
    min-height: 920px;
    max-height: 920px;
    max-width: 925px;
    position: relative;
  }
  .stats_window {
    height: auto;
    position: absolute;
    width: 30rem;
    z-index: 2;
  }
  .stats_window_img {
    height: 100%;
    width: 100%;
  }
  .stats_window.paid_media {
    bottom: 16rem;
    left: 0;
    z-index: 2;
  }
  .stats_window.impressions {
    right: 0;
    top: 5rem;
    z-index: 1;
  }
  .stats_window.viewers {
    right: 6rem;
    top: 25rem;
    width: 25rem;
    z-index: 3;
  }
  .stats_window.active {
    z-index: 4;
  }
  .stats_window.visible {
    visibility: visible;
  }
  .stats_window:not(.visible) {
    visibility: hidden;
  }
  .stats_window_outer_container.active {
    display: block;
  }
  .stats_window_outer_container:not(.active) {
    display: none;
  }
  .title_outer_container {
    left: 0.75rem;
    position: absolute;
    top: 0;
  }
  .title_container > span {
    font-family: 'NHaasGroteskTXStd-75Bd';
    font-size: 20px;
    line-height: 2.8;
  }
  .paid_media_gif,
  .impressions_gif,
  .viewers_gif {
    left: 10px;
    position: absolute;
  }
  .paid_media_gif {
    height: 24rem;
    top: 55px;
    width: 28.7rem;
  }
  .impressions_gif {
    height: 16.6rem;
    top: 61px;
    width: 28.6rem;
  }
  .viewers_gif {
    height: 15.5rem;
    left: 13px;
    top: 56px;
    width: 23.3rem;
  }
  @font-face {
    font-family: "NHaasGroteskTXStd-75Bd";
    src: url('../assets/fonts/NHaasGroteskTXStd-75Bd.ttf');
  }
</style>