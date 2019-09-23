<template lang="pug">
  .container
    img(src="/backlogo.svg").backlogo
    .texts
      img(src="~assets/images/catch1.svg")
      img(src="~assets/images/catch2.svg")

</template>

<style lang="scss" scoped>
.container {
  position: absolute;
  height: 100%;
  width: 100%;

  .backlogo {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 400px;
    object-fit: contain;
    user-select: none;
    opacity: 0.4;

    @media screen and (max-width: 400px) {
      max-width: 90%;
    }
  }

  .texts {
    position: absolute;
    width: 90%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    img {
      display: block;
      text-align: center;
      color: #e7b5f2;
      font-size: 3.5rem;
      max-width: 100%;
      object-fit: contain;
      margin: 0 auto;

      &:last-child {
        margin: 30px auto 0 auto;
      }
    }
  }
}
</style>
