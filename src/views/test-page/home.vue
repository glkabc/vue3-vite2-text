<template>
  <div>
    HOME PAGE
    <br />
    <button @click="add">跳转</button> | 
    <router-link :to="'/login'">登录</router-link> | 
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
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { StoreDataType } from '@/store/type'
export default {
  name: 'Home',
  setup() {
    const store = useStore<StoreDataType>()
    const router = useRouter()
    console.log(store.state)
    function add () {
      console.log('点击了')
      router.push({name: 'user'})
    }
    return {
      add,
    }
  },
}
</script>

<style lang="scss" scoped>
  div {
    background-color: #2222;
    height: 200px;
    width: 500px;
  }
</style>