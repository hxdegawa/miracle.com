<template lang="pug">
  .container(@scroll="pagify($event)")
    section.screen-1#particles(:class="{active: pageNumber === 0}")
      Logo
      Loader(:scrollData="scrollData" :backgroundColor="'#fea47f'" )
    section.screen-2(:class="{active: pageNumber === 1}")
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

      Loader(:scrollData="scrollData" :backgroundColor="'#ff8ba7'")
    section.screen-3(:class="{active: pageNumber === 2}")
      span(class="sns-title") SNSとか
      .sns-wrapper
        .col-1-2
          .flex-wrapper
            a(href="https://miraclecom.thebase.in/")
              img(src="~assets/images/base.svg").item-sns.base
        .col-1-2
          .flex-wrapper
            a(href="https://twitter.com/min_3h")
              img(src="~assets/images/twitter.svg").item-sns.twitter
        .col-1-2
          .flex-wrapper
            a(href="https://www.instagram.com/miracle.com_/")
              img(src="~assets/images/instagram.svg").item-sns.instagram
        .col-1-2
          .flex-wrapper
            a(href="https://www.youtube.com/channel/UC1MybMmvX_RrPdyXNNN7LGw")
              img(src="~assets/images/youtube.svg").item-sns.instagram
      Loader(:scrollData="scrollData" :backgroundColor="'#f54291'")
    section.screen-4(:class="{active: pageNumber === 3}")
      .profile-wrapper
        .profile-card
          .header
            img(src="~/assets/images/header.jpg")
          .icon
            img(src="~/assets/images/profile.jpg")
          .name
            span ひろみん.com
          .contents
            p フリーファッションクリエーター
            p 2018年 名古屋モード学園ファッションデザイン学科卒業
            p 2016年 みらくる.com 始動
            p アイドル衣装製作、コンセプトカフェの制服デザイン製作などを手がける
          .links
            a(href="https://www.instagram.com/hiromin.comm/")
              span こじん

            a(href="https://www.instagram.com/min.costume/")
              span つくったの

            a(href="mailto:mmiraclecomm@gmail.com")
              span おといあわせ

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
  height: calc(400vh + 1px);
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
      background-color: #f0c7d6;

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
      background-color: #ffe6eb;
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
    &.screen-3 {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f9e2fc;

      .sns-title {
        position: absolute;
        top: 120px;
        left: 50%;
        width: 100%;
        text-align: center;
        transform: translateX(-50%);
        font-family: 'nikumaru';
        color: #fafafa;
        font-size: 50px;
        letter-spacing: 2px;
        filter: drop-shadow(2px 2px 0px #f54291);

        @media screen and (max-width: 640px) {
          font-size: 40px;
          top: 60px;
        }
      }

      .sns-wrapper {
        display: block;
        margin: 0 auto;
        width: 480px;

        .col-1-2 {
          display: inline-block;
          height: 200px;
          width: 200px;
          vertical-align: top;
          background-color: #fafafa;
          border-radius: 30px;
          margin: 20px;

          .flex-wrapper {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

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

        @media screen and (max-width: 640px) {
          width: 300px;
          margin: 50px 0 0 0;

          .col-1-2 {
            width: 130px;
            height: 130px;
            margin: 10px;
          }
        }
      }
    }

    &.screen-4 {
      border: none;

      .profile-wrapper {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        .profile-card {
          position: relative;
          max-width: 400px;
          border-radius: 20px;
          overflow: hidden;
          background-color: #ffffff;
          filter: drop-shadow(2px 2px 10px #cecece);

          @media screen and (max-width: 640px) {
            max-width: 350px;
          }

          .header {
            position: relative;
            height: 200px;
            overflow: hidden;

            img {
              object-fit: cover;
              object-position: center;
              width: 100%;
              height: 100%;
            }
          }

          .icon {
            position: absolute;
            box-sizing: border-box;
            left: 30px;
            top: calc(200px - 80px / 2);
            height: 80px;
            width: 80px;
            border-radius: calc(80px / 2);
            border: solid 2px #ffffff;
            filter: drop-shadow(0px 0px 10px #cecece);

            img {
              object-fit: cover;
              width: 100%;
              height: 100%;
              border-radius: calc(80px / 2);
            }
          }

          .name {
            box-sizing: border-box;
            padding: 50px 15px 0px 15px;
            letter-spacing: 1px;
            font-weight: 600;
            font-size: 16px;
          }

          .contents {
            box-sizing: border-box;
            padding: 20px;

            p {
              margin: 0px 0px 8px 0px;
              white-space: pre-wrap;
              letter-spacing: 1px;
              font-size: 12px;
              font-weight: 500;
              color: #555;
            }
          }

          .links {
            box-sizing: border-box;
            padding: 10px 20px 40px 20px;

            a {
              display: inline-block;
              text-align: center;
              background-color: #ffffff;
              text-decoration: none;
              padding: 7px 0;
              color: #000000;
              border-radius: 5px;
              line-height: 20px;
              filter: drop-shadow(2px 2px 5px #cecece);

              span {
                font-size: 14px;
                letter-spacing: 1px;
                font-weight: 600;
              }

              &:nth-child(1) {
                margin-right: 10px;
                width: calc(50% - 10px);
              }

              &:nth-child(2) {
                margin-left: 10px;
                width: calc(50% - 10px);
              }

              &:nth-child(3) {
                margin-top: 20px;
                width: 100%;
              }
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
