<template>
  <div class="about">
    ABOUT　PAGE
    <span>{{name}}</span>
  </div>    
</template>

<script lang="ts">
import { useRoute } from 'vue-router'
export default ({
  name: 'About',
  props: {
    ifAh: String,
  },
  setup() {
    const params = useRoute().params
    console.log(params.id)
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