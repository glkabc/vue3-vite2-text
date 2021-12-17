<template>
  <div class="home">
    <h1>{{title}}</h1>
  </div>
</template>

<script lang="ts">
export default {
  name: "Home",
  setup() {
    return {
      title: '这是首页'
    }
  },
}
</script>

<style lang="scss" scoped>
  .home {
    background-color: #fff;
    width: 100%;
    height: 100%;
  }
</style>