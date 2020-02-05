<template>
  <div class="close_btn active" v-on:mousedown="addActiveClass" v-on:mouseup="toggleMediaWindow" v-on:click="stopVideo">
    <img class="close_btn_active" src="../assets/btn_close_off.png" alt="inactive close button"/>
    <img class="close_btn_inactive" src="../assets/btn_close_on.png" alt="active close button"/>
  </div>
</template>

<script>
  export default {
    name: 'CloseBtn',
    props: {
      msg: String
    },
    methods: {
      addActiveClass: function() {
        this.$el.classList.remove('active');
      }, 
      toggleMediaWindow: function() {
        const statsWindow = this.$el.parentNode.classList.value.indexOf('stats_window') > -1;
        if (statsWindow) {
          this.$el.parentNode.classList.remove('visible');
          this.$el.classList.add('active');
        } else {
          this.$el.classList.add('active');
          this.$el.parentNode.parentNode.classList.remove('active');
        } 
      },
      stopVideo: function() {
        if (this.$el.nextElementSibling) {
          const videos = this.$el.nextElementSibling.children;
          for (let i = 0; i < videos.length; i++) {
            const video = videos[i].children[0];
            let src = video.src;
            video.src = src;
          }
        }
      }
    }
  }
</script>

<style scoped>
  .close_btn {
    cursor: pointer;
    height: auto;
    position: absolute;
    right: 15px;
    top: 13px;
    width: auto;
  }
  .close_btn.active > img.close_btn_active,
  .close_btn:not(.active) > img.close_btn_inactive {
    display: block;
    height: auto;
    width: 36px;
  }
  .close_btn:not(.active) > img.close_btn_active,
  .close_btn.active > img.close_btn_inactive {
    display: none;
  }
</style>