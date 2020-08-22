<template>
  <div class="body-content">
    <div class="carousel">
      <div class="image-container">
        <img 
        v-for="Mattress in Mattresses" 
        :key="Mattress.name" :src="'../assets/' + Mattress.imageFileName" 
        :class="Mattress.imageFileName.split('.jpg').splice(0, 1).join('')">
      </div>
    </div>
    <div class="interactive-area">
      <h2>Choose Your Mattress</h2>
      <div class="mattress-types-container">
        <p class="select-mattress-type">Select Mattress Type</p>
        <div class="selector-buttons-container">
          <button 
          v-for="Mattress in Mattresses" 
          :key="Mattress.name" 
          @click="updateSelectedButton"
          v-on:click="showSelectedMattressAndInfo(Mattress);">
            {{ Mattress.name }}
          </button>
        </div>
        <div class="selected-mattress-info">
          <p class="title">{{ selectedItemName }}</p>
          <p class="price">{{ selectedItemPrice }}</p>
        </div>
        <div class="selected-mattress-review">
          <p class="review">Average Review Rating: {{ selectedItemReviewRating }}</p>
        </div>
      </div>
      <div class="add-to-cart-container">
        <button class="add-to-cart">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
  import mattresses from '../../data/mattresses.json'

  export default {
    name: 'Body',
    methods: {
      updateSelectedButton(e) {
        const buttonNodes = this.$el.querySelectorAll('.mattress-types-container button')
        const thisButton = e.target
        for (let i = 0; i < buttonNodes.length; i++) {
          const buttonNode = buttonNodes[i]
          buttonNode.classList.remove('selected')
          if (buttonNode === thisButton && thisButton.classList.value.indexOf('selected') < 0) {
            thisButton.classList.add('selected')
          }
        }
      },
      showSelectedMattressAndInfo: function(Mattress) {
        this.selectedItemName = Mattress.name
        this.selectedItemPrice = '$' + Mattress.price
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
    width: 100%;
    .carousel {
      border: 1px solid black;
      height: 320px;
      margin-top: 20px;
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
          opacity: 1;
          padding-right: 3px;
          position: relative;
          transition: all 250ms ease-in;
          width: 100%;
        }
      }
      &.classic-carousel {
        .image-container {
          transform: translateX(0%);
          img:not(.classic-carousel) {
            opacity: 0;
          }
        }
      }
      &.loom-carousel {
        .image-container {
          transform: translateX(-100%);
          img:not(.loom-carousel) {
            opacity: 0;
          }
        }
      }
      &.zen-carousel {
        .image-container {
          transform: translateX(-200%);
          img:not(.zen-carousel) {
            opacity: 0;
          }
        }
      }
    }
    .interactive-area {
      background-color: #f6f5f3;
      font-family: 'Questrial', sans-serif;
      width: 40%;
      z-index: 1;
      h2 {
        font-family: 'Source Serif Pro', serif;
        font-size: 28px;
        font-weight: 300;
        letter-spacing: 0.4px;
        margin: 20px auto 35px;
        text-align: left;
        width: 80%;
      }
      div.mattress-types-container {
        p.select-mattress-type {
          font-size: 14px;
          margin: 0 auto 1em;
          text-align: left;
          text-transform: uppercase;
          width: 80%;
        }
        div.selector-buttons-container {
          width: 80%;
          margin: 0 auto;
          button {
            background-color: #ffffff;
            border: 1px solid #d2d2d2;
            color: #b5b1ab;
            cursor: pointer;
            font-family: 'Questrial', sans-serif;
            height: 42px;
            outline: none;
            transition: all 150ms ease-in;
            width: 33%;
            &.selected {
              background-color: #a6a19a;
              color: #d6d4d1;
            }
            &:first-child {
              border-right: none;
            }
            &:last-child {
              border-left: none;
            }
          }
        }
        div.selected-mattress-info {
          display: inline-flex;
          justify-content: space-between;
          margin-top: 30px;
          width: 80%;
          p {
            margin: 0;
          }
        }
        div.selected-mattress-review {
          margin: 30px auto;
          text-align: left;
          width: 80%;
        }
      }
      div.add-to-cart-container {
        margin: 0 auto;
        width: 80%;
        button.add-to-cart {
          background-color: #d4aa63;
          border: none;
          color: #ffffff;
          cursor: pointer;
          font-family: 'Questrial', sans-serif;
          height: 42px;
          outline: none;
          transition: all 150ms ease-in;
          width: 100%;
          &:active {
            background-color: #ad8c51;
          }
        }
      }
    }
  }
</style>