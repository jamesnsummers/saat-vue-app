<template>
  <div class="about_btn_container" v-on:mousedown="toggleAboutBtnState" v-on:click="toggleAboutWindow">
    <svg class="about_btn_off active" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 109 45">
      <image id="BTN_about" width="109" height="45" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAAtCAYAAACkoOU6AAAD90lEQVR4nO1cy07rQAx12wFKAUELLNj1E1iz54P5AjaogERZIdh0w6ICRIsEiPejV8fkVFYoUOkqJEN9pFHSGSeZzokdjxNPaW9vb1AqlaRSqUgIQbdvb29aUO/4Pby/v8v09LSUy2V5eHjQ69ZqNXl5eZHT01M5OzuT1dVVCSBpeXlZFhYWZGpqSokD/pe0wWCg26/O8fr6qp1DoTwK5CfxZsF/vr+/V9LAAcYH22q1Kp1OR7a3t2VnZ0c2NzclgF2wNz8/r4MGskBk1gOH64Cwn66Tl1zWGNUPcDAK0LBWqyUHBwfSbDY/NI1aAZW8vb1V0sAw60fhpzaa2sfHx+FvSUwAOjszMyPPz89aaBYgA1OAuwx/Ji+5rDFOPzBmJHV3d1cuLi60fW5uToI1RzgAqugoFk5OTuTq6kqJhTIFqzHYB8uOYgGcwGpB89TvgGpap+E7s+fIB3ASoWV4fIEj1TQQJ4mtddKKB2gXnUT1D6x2ffUQHufh7GRnB5hHEpZMlcrDi/nAFxPwMPk806kCTKNHPooNTA/EBiQmfUBigI0a6fx10gckBsAkivEtnLQIQNIIJy0SMKAuTlocSM+fnbQIwOA54aRFCCctQpQn9U1xTEjz45oWAeybGHHS4oB198VJiwPpR5iTFgHSHwA5aRHAzWOEcEckQuArObFR/jSLjuIB3zt6wDhCuHmMHE5aBGBGE+GkRQCQhkI4aRHAflAsTlocwDciTlpk+BTGshU+XysmPpFGryRtNx3FwafYI+wlsjWZjegoHmz+u+ap8Vt+ppQ6igdaQRKnqU7QMGxvbm40p/f6+loZtbm/LDZWyexESSLRPDHqsY9AJyeG/HYPdw2yQHBuZIGgnu2SBEdRmJOch1zWGKcfkEE7+kN+mOoUlpaWlCjg7u5Ozs/PdTs7OztM5cXBTLN5enrSYid7fLNq37CSQM0RDkGPRWdQj984HzuIohmOIWiBDJZnyEsua4zTD5DGviwuLmrBuEM2oPHy8lJ6vZ602205PDzUZxyWR7BEUMPSdTaLlNqUziy1hXcWj+ccZBjBTtpRn5fcb5D2Uz/smGNlA1g/jknAagbHx8dK2NHRkXS7XRXESjF0Ne2Joaq4S0C29WqsS2oJpgxNKeqgwcy1omlAwXVoknGdvOSyxjj9sKsoYb/f76si6ZIUWL5na2tL9vf3VRhmEYDm2SmAXQfEatIoWI2zcwweR8fHaqCY+QiPpTxjb2jnH2b9XwFvZkmSCKkUUBBatnq9/qFpKysrsrGxIWtrayqEBi7aQthnlfVkvsvRtvOKUasmWC202mqvY82xTaz7i4n9NIcAHT5702O/0WjI+vq6/AMK3dzwcbD/AAAAAABJRU5ErkJggg=="/>
    </svg>
    <svg class="about_btn_on" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 108 41">
      <image id="box_2" width="108" height="41" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAAApCAYAAADQ88wSAAADTElEQVR4nO2b627aMBiGXx8SSGgrJsToLWzrj/U2+3O31Vvhz8ohEOx4+kwz0mCGM3py5EdCiOaRk/qNnTix2a+HB6OVRpIKEFpr/AvO+YutVVU57T56p5zX9shZLBd4+v2E8Zcx7u7ucP/zHvkoh9yVO2y3W2y2xsoM7GxgjB2cUwH30fvXyfyanjEGiZT4Op0iy3NkwwxJkkBwAVlAg+cpvv/4tg+McWchMbD3C4xzhqIosFgsMRgMkE/G4KMhtJCQXApcXY0wu721sjHHzbQdoo/Td8+3Xrp4B5/ZMItiY1vb9c0NBtkQWilIcAnDJLblPm1Xv8q5efHbx+m751svXbzm9izPcH2TodyVSNIhOE+hGCCVNihLBfN8FnDhOMPaB+Dh9N3zrZcuXg0TAOVSbAob3k5V0LYQDqkprKQCqn2x7bs7QrfOCB+n755vvXTxaqhLLMsd1suVDVfvFBUCDgaptwpmYLDblFZX7PgukfrRJj6Ob1mher710sVrwhlHKhIwziCZhGAClakgK6OhtbJ3I8/FN3a0/2ZHO/Bx+u351ksXrwm1Qi6Y3S6ksHeOWleQ+ShFlqeoKmV1IUSjsMr2oe0d+jh991xBXOo1W6Ix3N4p0t+UKm2jIvdkZ3rqoLo6vmVFzw/ZtihRVz/e1fEtK3oHKLhz9RUD+0/P1Sou9XyORbZHCe1BnevAfJzodfd8QuPuoWLkI/C5lnG0ns63m6srcR8nepd7LiTQfjDp11efc6J3ueeCu3bkeyH2oa/eW4TmE5ykwZlS6u+FkAZ1dZOtP66B3zmn756r0i/1PK9hkZCIgQVGDCwwYmCBEQMLjKOBc+RzEwMLjNglBoYUgtlZpc2JIT6jbt+ReZ891/9/iYcTU7ntdAHO7QA7trDAiIEFRgwsMGJggREDC4wYWGDEwALD+cY58nmRNCDbbDad5hVE3p76TTS9na6nv9HMAElhwWORWeT9oIAol/V6DSml/aZ16ISczWb20dRyucR0OrWrWEherVZn1zFF3gZqPDktRs8y27IOK4sA9vj4aMbjsRUoOEqUKMsydpMfBIVEOdTd4HA4tJ/FYgE2n8/NZDKxG6nZUUh1aJGPDa05O4t6vfl8jj/T2Q0/U2PY2gAAAABJRU5ErkJggg=="/>
    </svg>
    <span class="about_btn_text">About</span>
  </div>
</template>

<script>
  export default {
    name: 'CreditsBtn',
    props: {
      msg: String
    },
    methods: {
      toggleAboutBtnState: function() {
        for (let i=0; i < this.$el.children.length; i++) {
          const child = this.$el.children[i];
          child.classList.toggle('active');
        }
      },
      toggleAboutWindow: function() {
        this.$el.parentNode.parentNode.querySelector('.about_window_outer_container').classList.toggle('active');
      }
    }
  }
</script>

<style scoped>
  .about_btn_container {
    bottom: 5px;
    cursor: pointer;
    height: 37px;
    left: 10px;
    position: absolute;
    width: 88px;
  }
  .about_btn_text {
    height: 100%;
    left: 0;
    padding-top: 0.5rem;
    position: absolute;
    top: 0;
    user-select: none;
    width: 100%;
    -webkit-user-select: none;  
    -moz-user-select: none;    
    -ms-user-select: none;      
  }
  svg.active {
    display: block;
  }
  svg:not(.active) {
    display: none;
  }
</style>