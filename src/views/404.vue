<template>
  <div class="page-404">
    404Page
  </div>
</template>

<script lang="ts">
export default {
  name: '404',
}
</script>

<style lang="scss" scoped>
  .page-404 {
    /* width: 100wh; */
    height: 100vh;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: my-animation 5s infinite;
  }
  @keyframes my-animation {
    0% {
      background-color: #fff;
      color: #000;
    }
    50% {
      background-color: #000;
      color: #fff;
    }
    100% {
      background-color: #fff;
      color: #000;
    }
  }
</style>