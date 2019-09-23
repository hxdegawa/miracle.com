<template lang="pug">
  .container(@scroll="pagify($event)")
    section.screen-1#particles(:class="{active: pageNumber === 0}")
      Logo
      Loader(:scrollData="scrollData" :backgroundColor="'#fea47f'" )
    section.screen-2(:class="{active: pageNumber === 1}")
      BackLogo
      Loader(:scrollData="scrollData" :backgroundColor="'#ffb8f1'")
    section.screen-3(:class="{active: pageNumber === 2}")
      carousel(:perPage="1").carousel
        slide
          img(src="~assets/images/IMG_0098.JPG")
        slide
          img(src="~assets/images/IMG_0099.JPG")
        slide
          img(src="~assets/images/IMG_0100.JPG")
        slide
          img(src="~assets/images/IMG_0108.JPG")
        slide
          img(src="~assets/images/IMG_0110.JPG")
        slide
          img(src="~assets/images/IMG_0115.JPG")

      Loader(:scrollData="scrollData")
    section.screen-4(:class="{active: pageNumber === 3}")
      .sns-wrapper
        .col-1-3
          a(href="https://miraclecom.thebase.in/")
            img(src="~assets/images/base.svg").item-sns.base
        .col-1-3
          a(href="https://twitter.com/min_3h")
            img(src="~assets/images/twitter.svg").item-sns.twitter
        .col-1-3
          a(href="https://www.instagram.com/hiromin.comm/")
            img(src="~assets/images/instagram.svg").item-sns.instagram
      Loader(:scrollData="scrollData")
    section.screen-5(:class="{active: pageNumber === 4}")
      Loader(:scrollData="scrollData")
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import Logo from '../components/Logo'
import BackLogo from '../components/BackLogo'
import Loader from '../components/ScrollFrame'
import particles from '~/assets/js/particles/particleSetting.js'

export default {
  components: {
    Logo,
    BackLogo,
    Loader,
    Carousel,
    Slide
  },
  data() {
    return {
      scrollTop: 0,
      screenHeight: 0
    }
  },
  computed: {
    pageNumber() {
      return Math.floor(this.scrollTop / this.screenHeight) > 0
        ? Math.floor(this.scrollTop / this.screenHeight)
        : 0
    },
    scrollData() {
      return {
        scrolledHeight:
          this.scrollTop % this.screenHeight > 0
            ? this.scrollTop % this.screenHeight
            : 0,
        page:
          Math.floor(this.scrollTop / this.screenHeight) > 0
            ? Math.floor(this.scrollTop / this.screenHeight)
            : 0,
        screenHeight: this.screenHeight
      }
    }
  },
  mounted() {
    window.particlesJS('particles', particles.data)
    window.addEventListener('scroll', this.pagify)
    window.addEventListener('resize', this.updateScreenSize)
    this.screenHeight = window.innerHeight
  },
  methods: {
    pagify(e) {
      this.scrollTop = e.srcElement.scrollingElement.scrollTop
    },
    updateScreenSize() {
      this.screenHeight = window.innerHeight
    }
  }
}
</script>

<style lang="scss">
body {
  height: 500vh;
}

section {
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  border: solid 15px #fafafa;
  transition: 0.6s ease;
  z-index: 1;

  &[class*='screen-'] {
    &.screen-1 {
      background-color: #ffcccc;

      & > canvas {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        pointer-events: none;
      }
    }

    &.screen-2 {
      background-color: #f9e0fd;
      font-family: 'nikumaru';
    }
    &.screen-3 {
      background-color: #f9f8f7;
      display: flex;
      justify-content: center;
      align-items: center;

      .carousel {
        position: absolute;
        left: calc(50% - 40%);
        top: calc(50% - 40%);
        width: 80%;
        height: 80%;
        user-select: none;

        @media screen and (max-width: 960px) {
          height: 100%;
          width: 100%;
          left: 0;
          top: 0;
        }

        .VueCarousel-wrapper {
          height: 100%;
        }

        .VueCarousel-inner {
          height: 100% !important;
        }

        .VueCarousel-slide {
          max-height: 100%;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          &:first-child {
            img {
              object-position: -200px;
            }
          }
        }

        .VueCarousel-pagination {
          position: absolute;
          bottom: 20px;
        }
      }
    }
    &.screen-4 {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f9e2fc;

      .sns-wrapper {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 1280px;

        .col-1-3 {
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 240px;
          height: 240px;
          box-sizing: border-box;
          padding: 40px;
          background-color: #fafafa;
          border-radius: 1000px;

          &:first-child {
            margin-right: 60px;
          }

          &:last-child {
            margin-left: 60px;
          }

          a {
            display: block;
            width: 60%;

            .item-sns {
              width: 100%;
              object-fit: contain;
            }
          }
        }
      }
    }
  }

  &:not(.active) {
    transform: scale(0.7) rotateZ(8deg);
    opacity: 0;
    pointer-events: none;
  }

  &.active {
    transform: scale(1);
    opacity: 1;
    z-index: 2;
  }
}
</style>
