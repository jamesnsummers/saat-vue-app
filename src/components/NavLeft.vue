<template>
  <div class="left_section_container">
    <div id="livestream" class="left_nav_icon" v-on:click="showMediaWindow" v-on:mouseup="stopVideo">
      <a href="/livestream">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="55" viewBox="0 0 48 55">
          <image id="ICON_Media" width="48" height="55" xlink:href="data:img/png;base64,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"/>
        </svg>
        <span class="icon_text livestream_text">Case Study</span>
      </a>
    </div>
    <!-- <div id="art_direction" class="left_nav_icon" v-on:click="showMediaWindow" v-on:mouseup="stopVideo">
      <a href="/art-direction">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="48" viewBox="0 0 48 48">
          <image id="ICON_paint" width="48" height="48" xlink:href="data:img/png;base64,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"/>
        </svg>
        <span class="icon_text art_direction_text">Art Direction</span>
      </a>
    </div> -->
    <div id="stats" class="left_nav_icon" v-on:click="showMediaWindow" v-on:mouseup="stopVideo">
      <a href="/results">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="55" viewBox="0 0 64 55">
          <image id="folder_icon" width="64" height="55" xlink:href="data:img/png;base64,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"/>
        </svg>
        <span class="icon_text stats_text">Results</span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavLeft',
    props: {
      msg: String
    },
    methods: {
      showMediaWindow: function(e) {
        const clickTargetId = e.target.closest('div.left_nav_icon').id;
        const mediaWindowContainer = this.$el.parentNode.querySelector('.media_window_container');
        const mediaWindowContainerIsNotActive = mediaWindowContainer.classList.value.indexOf('active') < 0;
        const mediaWindowContainerIsActive = mediaWindowContainer.classList.value.indexOf('active') >= 0;
        const thisMediaWindowContents = mediaWindowContainer.querySelector(`.video_container.${clickTargetId}`);
        const otherMediaWindowContents = mediaWindowContainer.querySelector(`.video_container:not(.${clickTargetId})`);
        const thisMediaWindowTitle = mediaWindowContainer.querySelector(`.title_container.${clickTargetId}`);
        const otherMediaWindowTitle = mediaWindowContainer.querySelector(`.title_container:not(.${clickTargetId})`);
        if (mediaWindowContainerIsNotActive && clickTargetId !== 'stats') {
          this.closeStatsWindows();
          this.closeAboutWindow();
          mediaWindowContainer.classList.add('active');
          otherMediaWindowContents.classList.remove('active');
          thisMediaWindowContents.classList.add('active');
          otherMediaWindowTitle.classList.remove('active');
          thisMediaWindowTitle.classList.add('active');
        } else if (mediaWindowContainerIsActive && clickTargetId !== 'stats') {
          this.closeStatsWindows();
          this.closeAboutWindow();
          otherMediaWindowContents.classList.remove('active');
          otherMediaWindowTitle.classList.remove('active');
          thisMediaWindowContents.classList.add('active');
          thisMediaWindowTitle.classList.add('active');
        } else if (clickTargetId === 'stats') {
          mediaWindowContainer.classList.remove('active');
          this.showStatsWindows();
          this.closeAboutWindow();
        }
      },
      showStatsWindows: function() {
        const statsWindowContainer = this.$el.parentNode.querySelector('.stats_window_outer_container');
        const statsWindows = statsWindowContainer.children[0].children;
        statsWindowContainer.classList.add('active');
        for (let i = 0; i < statsWindows.length; i++) {
          const statsWindow = statsWindows[i];
          statsWindow.classList.add('visible');
        }
      },
      closeStatsWindows: function() {
        const statsWindowContainer = this.$el.parentNode.querySelector('.stats_window_outer_container');
        statsWindowContainer.classList.remove('active');
      },
      closeAboutWindow: function() {
        const statsWindowContainer = this.$el.parentNode.querySelector('.about_window_outer_container');
        statsWindowContainer.classList.remove('active');
      },
      stopVideo: function() {
        const videos = this.$el.nextElementSibling.querySelector('.video_outer_container').children;
        for (let i = 0; i < videos.length; i++) {
          const video = videos[i].children[0];
          let src = video.src;
          video.src = src;
        }
      },
    }
  }
</script>

<style scoped>
  .left_section_container {
    cursor: pointer;
    display: grid;
    grid-row-gap: 3.5rem;
    grid-template-rows: repeat(3, 2.5rem);
    padding-left: 0.5rem;
    padding-top: 1.5rem;
    position: relative;
    width: 6rem;
    z-index: 1;
  }
  .icon_text {
    line-height: 2;
  }
  .left_section_container > div > svg,
  .left_section_container > div > span {
    width: 100%;
  }
  .icon_text {
    color: white;
    font-size: 14px;
  }
</style>