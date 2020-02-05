<template>
  <div class="footer_right_section_container">
      <div class="volume_icon_container" v-on:click="toggleVolumeBtnState">
        <svg class="volume_OFF volume active" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">
          <image id="volumeOFF" width="32" height="32" xlink:href="data:img/png;base64,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"/>
        </svg>
        <svg class="volume_ON volume" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">
          <image id="volumeON" width="32" height="32" xlink:href="data:img/png;base64,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"/>
        </svg>
        <audio loop class="dial_up_clip" src="../assets/dial_up_audio_full_length.mp3">Your browser does not support the audio element.</audio>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'FooterRightSection',
    props: {
      msg: String
    },
    methods: {
      toggleVolumeBtnState: function() {
        const audioClip = this.$el.querySelector('.dial_up_clip');
        const audioClipIsNotActive = audioClip.classList.value.indexOf('active') < 0;
        for (let i=0; i < this.$el.children[0].children.length; i++) {
          const child = this.$el.children[0].children[i];
          const childIsAudioClip = child.classList.value.indexOf('dial_up_clip') > -1;
          child.classList.toggle('active');
          if (childIsAudioClip && audioClipIsNotActive) audioClip.play();
          else if (childIsAudioClip && !audioClipIsNotActive) {
            audioClip.pause();
            audioClip.currentTime = '0';
          }
        }
      }
    }
  }
</script>

<style scoped>
  .footer_right_section_container {
    bottom: 0;
    cursor: pointer;
    height: 100%;
    right: 0.8rem;
    position: absolute;
    width: 3rem;
  }
  .volume_icon_container {
    cursor: pointer;
    left: 1rem;
    position: absolute;
    top: 0.8rem;
    width: 50%;
  }
  svg.volume.active {
    display: block;
  }
  svg.volume:not(.active) {
    display: none;
  }
  svg.volume_OFF {
    bottom: 0;
    left: -4px;
    position: relative;
  }
</style>