<template lang="pug">
  .logo-wrapper
    img(src="/logo.svg" v-tilt).logo
</template>

<script>
export default {
  data() {
    return {
      options: {
        reverse: false,
        max: 35,
        perspective: 1000,
        scale: 1,
        speed: 300,
        transition: true,
        axis: null,
        reset: true,
        easing: 'cubic-bezier(.03,.98,.52,.99)',
        true: false,
        'max-glare': 1,
        'glare-prerender': false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.logo-wrapper {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .logo {
    min-width: 500px;
    object-fit: contain;
  }
}
</style>
