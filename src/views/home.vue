<template>
  <div>
    HOME PAGE
    <button @click="add">跳转</button> | 
    <router-link :to="'/login'">登录</router-link> | 
    <router-link :to="'/home'">关于</router-link> |
    <router-link to="/home/user">user</router-link> |
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { StoreDataType } from '@/store/type'
import { getDataList } from '@/api'
import { onMounted } from 'vue'
export default {
  name: 'Home',
  setup() {
    const store = useStore<StoreDataType>()
    const router = useRouter()
    onMounted(async () => {
      const data = await getDataList()
      console.log(data)
    })
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
    height: 100px;
    width: 100px;
  }
</style>