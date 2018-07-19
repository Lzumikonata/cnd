<script>
  import Vue from 'vue'
  import ElButton from '../../../../node_modules/element-ui/packages/button/src/button'
  export default {
    name: 'test',
    components: { ElButton },
    data: () => ({
      message: 'test hello world'
    }),
    methods: {
      createDom() {
        new Vue({
          el: '#testeee',
          data: {
            msg: 'test',
          },
          render() {
            const node = this.$createElement
            return node(
              'h1',
              { attrs: { id: 'hello' } },
              this.msg
            )
          }
        })
      },

      destoryDom() {
        new Vue({
           el: '#asc',

        })
      }

    },
  }
</script>

<template>
  <div id="test">
   spare wheel
    <div id="testeee"></div>
    <div id="asc"></div>
    <el-button @click="createDom">ssss</el-button>
  </div>
</template>

<style module>

</style>
