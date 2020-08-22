<template>
  <div class="body-content">
    <div class="carousel">
      <div class="image-container">
        <img v-for="Mattress in Mattresses" :key="Mattress.name" :src="'../assets/' + Mattress.imageFileName">
      </div>
    </div>
    <div class="interactive-area">
      <h2>Choose Your Mattress</h2>
      <div class="mattress-types-container">
        <p>Select Mattress Type</p>
        <div class="selector-buttons-container">
          <button v-for="Mattress in Mattresses" :key="Mattress.name" v-on:click="showSelectedMattressAndInfo(Mattress)">{{ Mattress.name }}</button>
        </div>
        <div class="selected-mattress">
          <p class="title">{{ selectedItemName }}</p>
          <p class="price">{{ selectedItemPrice }}</p>
          <p class="review">{{ selectedItemReviewRating }}</p>
        </div>
      </div>
      <div class="add-to-cart">
        <button>Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
  import mattresses from '../../data/mattresses.json'

  export default {
    name: 'Body',
    methods: {
      showSelectedMattressAndInfo: function(Mattress) {
        this.selectedItemName = Mattress.name
        this.selectedItemPrice = Mattress.price
        this.selectedItemReviewRating = Mattress.reviewRating
        const mattressType = Mattress.imageFileName.split('.jpg').splice(0, 1).join('');
        this.$el.querySelector('.carousel').className = '';
        this.$el.querySelector('div:first-child').className = mattressType + ' carousel'
      },
    },
    data() {
      return {
        selectedItemName: null,
        selectedItemPrice: null,
        selectedItemReviewRating: null,
        selectedItemImageSrc: null,
        Mattresses: Object.values(mattresses).find(mattresses => mattresses.name === this.name),
      }
    }
  }
</script>

<style lang="scss" scoped>
  .body-content {
    background-color: #f6f5f3;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 85%;
    .carousel {
      border: 1px solid black;
      height: 20em;
      margin-top: 2em;
      width: 60%;
      z-index: 0;
      .image-container {
        display: inline-flex;
        height: 20em;
        position: relative;
        transform: translateX(0%);
        transition: all 500ms ease-in;
        img {
          height: 100%;
          padding-right: 0.5em;
          width: 100%;
        }
      }
      &.classic-carousel {
        .image-container {
          transform: translateX(0%);
        }
      }
      &.loom-carousel {
        .image-container {
          transform: translateX(-101.6%);
        }
      }
      &.zen-carousel {
        .image-container {
          transform: translateX(-203%);
        }
      }
    }
    .interactive-area {
      background-color: #f6f5f3;
      width: 40%;
      z-index: 1;
    }
  }
  @-webkit-keyframes slide {
    100% { left: 0; }
  }
  @keyframes slide {
    100% { left: 0; }
  } 
</style>