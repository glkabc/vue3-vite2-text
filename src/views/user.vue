<template>
  <div>User Page {{name}}</div>
</template>

<script lang="ts">
import { useRoute } from 'vue-router'
export default {
  name: "User",
  setup() {
    const name  = useRoute().params.name
    console.log("进到用户见面了么");
    return {
      name
    }
  },
};
</script>

<style lang="scss" scoped>
  div {
    background-color: red;
    width: 100px;
    height: 100px;
  }
</style>
