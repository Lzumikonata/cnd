<script>
  import Popup from '../../utils/popup'
  export default {
    mixins: [Popup],
    components: {},
    props: {
      title: String,
    },
    watch: {
      visible: function(val) {
        this.open = val
      }
    },
    data: () => ({
      open: false
    }),
    methods: {
      closeDialog() {
        this.open = false
        this.$emit('open', this.open)
      }
    },
  }
</script>

<template>
  <div v-show="visible">
    <div class="cnd-dialog">
    <div class="cnd-header"><h3>{{ title }}</h3></div>
    <div class="cnd-body"><slot></slot></div>
    <div class="cnd-footer"><slot name="footer"></slot></div>
    </div>
    <div class="cnd-modal" @click="closeDialog"></div>
  </div>
</template>

<style scoped lang="less">
   .cnd-dialog {
     border: 1px solid #ccc;
     position: absolute;
     top: 30%;
     left: 30%;
     border-radius: 4px;
     padding: 15px ;
     width: 40%;
     background-color: #fff;
     z-index: 999;
     .cnd-header {
       text-align: left;
     }
     .cnd-footer {
       padding-top: 20px;
       display: flex;
       justify-content: flex-end;
     }
   }
  .cnd-header, .cnd-body {
    border-bottom: 1px solid #ccc;
  }
  .cnd-modal {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 99;
  }


</style>
