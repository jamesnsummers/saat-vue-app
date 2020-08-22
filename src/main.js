import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  methods: {
    // checkUrlAndRoute: function() {
    //   if (window.location.pathname === '/livestream' || window.location.pathname === '/livestream/') {
    //     this.$el.querySelector('#livestream').click()
      // } else if (window.location.pathname === '/art-direction' || window.location.pathname === '/art-direction/') {
      //   this.$el.querySelector('#art_direction').click()
    //   } else if (window.location.pathname === '/results' || window.location.pathname === '/results/') {
    //     this.$el.querySelector('#stats').click()
    //   }
    // },
  },
  mounted() {
    // this.checkUrlAndRoute()
  },
  render: h => h(App),
}).$mount('#app')
