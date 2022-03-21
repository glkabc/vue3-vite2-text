<template>
  <div class="container">
    <div class="list">
      <div
        class="item"
        v-for="(item, index) of viewList"
        :key="index"
        ref="itemHeight"
        :style="{ transform: `translate3d(0px, ${-scrollTop}px, 0px)` }"
      >
        {{ item }}
      </div>
    </div>
  </div>
  <span>{{ speed }} 速度</span> | <n-button @click="changeDirection">direction</n-button> |
  <n-button @click="changeSpeed('up')">speed up</n-button> |
  <n-button @click="changeSpeed('down')">speed down</n-button>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from "vue";
  export default defineComponent({
    name: "VirtualList",
    setup() {
      const list = ref(Array.from({ length: 300000 }, (_, i) => i));
      const viewList = ref(list.value.filter((v, i) => i < 11));
      const tag = ref(viewList.value.length);
      const height = ref(84);
      const direction = ref(true);
      const speed = ref(30);
      const scrollTop = ref(direction.value ? 0 : height.value);
      const interval = ref();
      function setItem() {
        direction.value
          ? viewList.value.push(list.value[tag.value])
          : viewList.value.unshift(list.value[tag.value]);
      }
      function removeItem() {
        direction.value ? viewList.value.shift() : viewList.value.pop();
      }
      function AutoScroll() {
        setItem();

        interval.value = setInterval(() => {
          direction.value ? scrollTop.value++ : scrollTop.value--;

          if (scrollTop.value % height.value === 0) {
            if (tag.value === 0 || tag.value === list.value.length) {
              direction.value ? (tag.value = 0) : (tag.value = list.value.length);
            }
            direction.value ? tag.value++ : tag.value--;
            scrollTop.value = direction.value ? 0 : height.value;
            removeItem();
            setItem();
          }
        }, speed.value);
      }
      function changeDirection() {
        direction.value = !direction.value;
        console.log(direction.value, "方向");
        if (!direction.value) {
          tag.value = tag.value - viewList.value.length;
          if (tag.value < 0) tag.value = list.value.length + tag.value;
        } else {
          tag.value = tag.value + viewList.value.length;
          if (tag.value > list.value.length) tag.value = tag.value - list.value.length - 1;
        }
      }
      function changeSpeed(type: "up" | "down") {
        speed.value =
          type === "down" ? speed.value + 10 : speed.value - 2 < 0 ? 0 : speed.value - 2;
        if (interval.value) {
          clearInterval(interval.value);
          AutoScroll();
        }
      }
      onMounted(() => {
        AutoScroll();
      });
      return {
        viewList,
        scrollTop,
        speed,
        changeSpeed,
        changeDirection,
      };
    },
  });
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 600px;
    overflow: hidden;
    .item {
      height: 80px;
      line-height: 80px;
      text-align: center;
      border: 2px solid #eee;
      background-color: rgb(51, 151, 155);
    }
  }
</style>
