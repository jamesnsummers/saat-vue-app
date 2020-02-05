<template>
  <div class="video_outer_container">
    <div class="livestream video_container active">
      <!-- <iframe class="livestream_video" width="100%" height="100%" src="https://www.youtube.com/embed/Z-yJTjbswhw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
      <iframe src="https://player.vimeo.com/video/380816556" width="640" height="480" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
    <div class="art_direction video_container">
      <iframe class="art_direction_video" width="100%" height="100%" src="https://www.youtube.com/embed/XgvR3y5JCXg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Video',
    props: {
      msg: String
    }
  }
</script>

<style scoped>
  .video_outer_container {
    bottom: 15px;
    height: auto;
    left: 10px;
    position: absolute;
    right: 0;
    width: auto;
  }
  .video_container.active {
    display: block;
    height: 450px;
    width: 807px;
  }
  .video_container:not(.active) {
    display: none;
  }
  iframe {
    height: 450px;
    position: relative;
    width: 807px;
  }
</style>