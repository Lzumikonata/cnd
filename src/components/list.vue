<script>
  
  export default {
    components: {},
    data: () => ({
      article_list: [{title: 'sss'},{title: 'sss'},
        {title: 'sss'},{title: 'sss'},
        {title: 'sss'},{title: 'sss'},
        {title: 'sss'},{title: 'sss'},
        {title: 'sss'},{title: 'sss'}],
      focus: false
    }),
    methods: {},
  }
</script>

<template>
  <div>
    <ul>
      <li v-for="(item, index) in article_list"
          :key="index"
       :class="{ active: focus === index }"
      @mouseenter="focus = index"
      @mouseleave="focus = false">{{item.title}}</li>
    </ul>

  </div>
</template>

<style scoped lang="less">
  ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-top: 40px;
    li {
      width: 30%;
      height: 120px;
      margin-bottom: 20px;
      background-color: #fff;
      color: #00A862;
    }
    .active {
      box-shadow: 0 1px 2px 3px rgba(0, 168, 98, 0.3)
    }
  }

</style>
