<script>
  
  export default {
    components: {},
    props: { title: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean,
      default: false,
    }},
    data: () => ({
      closed: true,
    }),
    methods: {
      getSlot() {
        console.log(this.$slots.footer)
      }
    },
    watch: {
      visible: (val) => {
       // console.log(val)
      }
    },
  }
</script>

<template>
  <div>
    <div v-show="visible">
      <div class="dialog-header">
          <p>{{ title }}</p>
      </div>
      <div class="dialog-body">
        <slot></slot>
      </div>
      <div class="dialog-footer" v-show="$slots.footer">
        <slot name="footer"></slot>
      </div>
      <button @click="getSlot"></button>
    </div>
  </div>
</template>

<style scoped>

</style>
