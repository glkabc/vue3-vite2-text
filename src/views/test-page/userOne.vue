<script lang="ts">
  import { onMounted, ref, toRefs, defineComponent } from "vue";
  import { axiosNestHomeApiTest } from "@/api";
  interface List {
    id: string;
    title: string;
  }

  export default defineComponent({
    name: "UserOne",
    setup() {
      const lists = ref<List[]>([]);
      onMounted(async () => {
        axiosNestHomeApiTest()
          .then((res) => {
            console.log(res.data);
            lists.value = res.data.list;
          })
          .catch((err) => {
            console.log(err);
          });
      });
      return {
        ...toRefs({
          name: "user 1",
          lists: lists,
        }),
      };
    },
  });
</script>

<template>
  <div>user 1</div>
  <p>{{ name }}</p>
  <p v-for="item in lists" :key="item.id">{{ item.title }}</p>
  <n-button>naive-ui</n-button>
  <n-date-picker></n-date-picker>
</template>
