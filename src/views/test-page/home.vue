<template>
  <div>
    HOME PAGE
    <br />
    <button @click="add">跳转</button> | <router-link :to="'/login'">登录</router-link> |
    <router-link :to="'/ggp'">404页面</router-link> |
    <br />
    <router-link :to="'/home'">关于</router-link> |
    <router-link :to="'/home/one'">user1</router-link> |
    <router-link :to="'/home/user'">user</router-link> |
    <br />
    <router-view />
    <router-view name="footer" />
  </div>
</template>

<script lang="ts">
  import { useStore } from "vuex";
  import { useRouter } from "vue-router";
  import { StoreDataType } from "@/store/type";
  import { onMounted } from "vue";
  import { axiosNestJsApisGetTest, axiosNestJsApisTest, nestJSApisTest } from "@/api";
  export default {
    name: "Home",
    setup() {
      const store = useStore<StoreDataType>();
      const router = useRouter();
      console.log(store.state);
      function add() {
        router.push({ name: "user" });
      }
      onMounted(async () => {
        nestJSApisTest()
          .then((data) => {
            console.log(data, "fetch nestjs apis test data");
          })
          .catch((err) => {
            console.log(err, "请求出现错误");
          });

        axiosNestJsApisTest()
          .then((res) => {
            console.log(res.data, "axios nestjs apis test data");
          })
          .catch((err) => {
            throw new Error(err);
          });
        axiosNestJsApisGetTest()
          .then((res) => {
            console.log(res.data, "axios nestjs apis get test data");
          })
          .catch((err) => {
            throw new Error(err);
          });
      });
      return {
        add,
      };
    },
  };
</script>

<style lang="scss" scoped>
  div {
    background-color: #2222;
    height: 200px;
    width: 500px;
  }
</style>
