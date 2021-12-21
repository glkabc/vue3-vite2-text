<template>
  <div>user 1 </div>
  <p>{{name}}</p>
  <n-button>naive-ui</n-button>
  <n-date-picker></n-date-picker>
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
