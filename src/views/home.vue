<template>
  <div>
    HOME PAGE
    <button @click="add">跳转</button>
    <router-link to="/login">user</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { useStore} from 'vuex'
import { useRouter } from 'vue-router'
import { StoreDataType } from '../store/type'
export default {
  name: 'Home',
  setup() {
    const store = useStore<StoreDataType>()
    const router = useRouter()
    console.log(store.state)
    const add = () => {
      console.log('点击了')
      router.push({path: '/home/user', replace: true})
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