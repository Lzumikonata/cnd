<script>
  import { getList } from '../../../service/getData'
  export default {
    components: {  },
    data: () => ({
      list: ''
    }),
    methods: {

    },
    mounted() {
      getList().then(res => {
        this.list = res.message
        console.log(res)
      })
    }
  }
</script>

<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item._id">{{ item.title }}</li>

    </ul>

  </div>
</template>

<style scoped lang="less">

</style>
