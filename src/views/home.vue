<template>
  <div>
    HOME PAGE
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { StoreDataType } from '../store/type'
export default {
  name: 'Home',
  setup() {
    const store = useStore<StoreDataType>()
    console.log(store.state)
  },
}
</script>

<style lang="scss" scoped>
  div {
    background-color: #2222;
    height: 100px;
    width: 100px;
  }
</style>