<template>
  <div class="about">
    ABOUT　PAGE
    <span>{{name}}</span>
  </div>    
</template>

<script lang="ts">
export default ({
  name: 'About',
  setup() {
    return {
      name: '水水水水'
    }
  }
})
</script>

<style lang="scss" scoped>
  .about {
    font-size: 22px;
    color: mediumspringgreen;
  }
</style>