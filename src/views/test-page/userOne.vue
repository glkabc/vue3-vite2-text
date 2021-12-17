<template>
  <div>user 1 </div>
  <p>{{name}}</p>
</template>

<script lang="ts">
export default {
  name: 'UserOne',
  setup() {
    return {
      name: 'user 1'
    }
  },
}
</script>
