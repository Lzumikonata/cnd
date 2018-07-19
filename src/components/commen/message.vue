<script>
  export default {
    components: {},
    props: {

    },
    data: () => ({
      visible: true
    }),
    methods: {},
  }
</script>

<template>
  <div class="cnd-message" v-show="visible">
    hello hello hei
  </div>
</template>

<style scoped lang="less">
  .cnd-message {
    position: absolute;
  }

</style>
