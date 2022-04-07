<template>
  <div>User Page {{ name }}</div>
  <div class="container">
    <div class="scroll">
      <div
        class="item"
        :style="{ transform: `translate3d(0px, ${-scrollData.scrollTop}px, 0px)` }"
        ref="scrollItem"
        v-for="(item, index) of scrollData.dataList"
        :key="index"
      >
        {{ item }}
      </div>
    </div>
  </div>
  <n-button @click="changeReverse">BUTTON</n-button>
</template>

<script lang="ts">
  import { useRoute } from "vue-router";
  import { onMounted, defineComponent, ref } from "vue";
  import { getDataList } from "@/api";
  export default defineComponent({
    name: "User",
    setup() {
      const name = useRoute().params.name;
      const scrollData = ref({
        dataList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        reverse: false,
        itemHeight: 80,
        scrollTop: 100,
      });
      console.log("进到用户见面了么");
      onMounted(async () => {
        const data = await getDataList();
        console.log(data, "请求回来的数据");
        setAutoScroll();
      });
      function setItem() {
        let list = scrollData.value.dataList;
        if (scrollData.value.reverse) {
          scrollData.value.dataList.push(list[0]);
          scrollData.value.dataList.shift();
          return;
        }
        scrollData.value.dataList.unshift(list[list.length - 1]);
        scrollData.value.dataList.pop();
      }
      function setAutoScroll() {
        setItem();
        setInterval(() => {
          let scrollTop = scrollData.value.reverse
            ? --scrollData.value.scrollTop
            : ++scrollData.value.scrollTop;
          let itemHeight = scrollData.value.itemHeight;

          if (scrollTop % itemHeight === 0) {
            scrollData.value.scrollTop = scrollData.value.reverse ? itemHeight : 0;
            setItem();
          }
        }, 30);
      }

      function changeReverse() {
        scrollData.value.reverse = !scrollData.value.reverse;
      }
      return {
        name,
        scrollData,
        changeReverse,
      };
    },
    mounted() {
      console.log(this.$refs.scrollItem);
      this.scrollData.scrollTop = this.$refs.scrollItem[0].scrollTop;
    },
  });
</script>

<style lang="scss" scoped>
  .container {
    height: 700px;
    width: 200px;
    background-color: "#eee";
    border: 5px solid red;
    overflow: hidden;
    .scroll {
      .item {
        width: 100%;
        height: 80px;
        line-height: 80px;
        text-align: center;
        border-bottom: 1px solid #eee;
        background-color: royalblue;
      }
    }
  }
</style>
