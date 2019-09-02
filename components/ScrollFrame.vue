<template lang="pug">
  .loader
    .load-bar-1(:style="{ width: scrollBarLength.bar1 + '%', backgroundColor: backgroundColor }")
    .load-bar-2(:style="{ height: scrollBarLength.bar2 + '%', backgroundColor: backgroundColor }")
    .load-bar-3(:style="{ width: scrollBarLength.bar3 + '%', backgroundColor: backgroundColor }")
    .load-bar-4(:style="{ height: scrollBarLength.bar4 + '%', backgroundColor: backgroundColor }")
</template>

<script>
export default {
  props: {
    scrollData: {
      type: Object,
      required: true
    },
    backgroundColor: {
      type: String,
      default: '#212121'
    }
  },
  data() {
    return {
      activeBar: 0
    }
  },
  computed: {
    scrollBarLength() {
      return {
        bar1:
          this.activeBar < 1
            ? ((this.scrollData.scrolledHeight / this.scrollData.screenHeight) %
                25) *
              100 *
              4
            : 100,
        bar2:
          this.activeBar < 2
            ? this.activeBar >= 1
              ? ((this.scrollData.scrolledHeight /
                  this.scrollData.screenHeight) %
                  25) *
                  100 *
                  4 -
                100
              : 0
            : 100,
        bar3:
          this.activeBar < 3
            ? this.activeBar === 2
              ? ((this.scrollData.scrolledHeight /
                  this.scrollData.screenHeight) %
                  25) *
                  100 *
                  4 -
                200
              : 0
            : 100,
        bar4:
          this.activeBar < 4
            ? this.activeBar === 3
              ? ((this.scrollData.scrolledHeight /
                  this.scrollData.screenHeight) %
                  25) *
                  100 *
                  4 -
                300
              : 0
            : 100
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateBarLength)
  },
  methods: {
    updateBarLength(e) {
      this.activeBar = Math.floor(
        ((this.scrollData.scrolledHeight / this.scrollData.screenHeight) *
          100) /
          25
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.loader {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  pointer-events: none;
  overflow: hidden;

  [class*='load-bar'] {
    position: absolute;
    background-color: #212121;
  }

  .load-bar-1 {
    top: 0;
    left: 0;
    height: 5px;
    width: 100%;
  }

  .load-bar-2 {
    top: 0;
    right: 0;
    height: 100%;
    width: 5px;
  }

  .load-bar-3 {
    bottom: 0;
    right: 0;
    height: 5px;
    width: 100%;
  }

  .load-bar-4 {
    bottom: 0;
    left: 0;
    width: 5px;
    height: 100%;
  }
}
</style>
