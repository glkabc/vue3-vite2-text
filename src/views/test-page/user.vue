<template>
  <div>User Page {{ name }}</div>
</template>

<script lang="ts">
  import { useRoute } from "vue-router";
  import { onMounted, defineComponent } from "vue";
  import { getDataList } from "@/api";
  export default defineComponent({
    name: "User",
    setup() {
      const name = useRoute().params.name;
      console.log("进到用户见面了么");
      onMounted(async () => {
        const data = await getDataList();
        console.log(data, "请求回来的数据");
      });
      return {
        name,
      };
    },
  });
</script>

<style lang="scss" scoped>
  div {
    background-color: red;
    width: 100px;
    height: 100px;
  }
</style>
