<template lang="pug">
  .container
    img(src="/backlogo.svg").backlogo
    .texts
      p Miracleを世界に発信
      p あなたに奇跡が起きますように・・・

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
  }

  .texts {
    position: absolute;
    max-width: 80%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    p {
      text-align: center;
      color: #e7b5f2;
      font-size: 3.5rem;
    }
  }
}
</style>
