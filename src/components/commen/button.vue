<script>
  export default {
    components: {},
    props: {
      size: {
        type: String,
      },
      type: {
        type: String,
      },
    },
    data: () => ({}),
    methods: {
      handleClick(evt) {
        this.$emit('click', evt)
      }
      },
  }
</script>

<template>
    <button :class="[size?`cnd-button__${size}`:'', type?`cnd-button__${type}`:'']" class="cnd-button"
    @click="handleClick">
      <slot>hello</slot>
    </button>
</template>

<style scoped lang="less">
  #button_style(@size, @padding, @backgroundColor: #00A862, @color: #fff ) {
    padding: @padding;
    background-color: @backgroundColor;
    color: @color;
    font-size: @size;
  }
  .cnd-button {
    #button_style(16px, 8px 30px);
    outline: 0;
    border-radius: 6px;
    border: 1px solid #00A862;
  }
  .cnd-button:hover, .cnd-button__small:hover {
    background-color: rgba(0,168,98, 0.7);
    border: 1px solid rgba(0,168,98, 0.7);
  }
  .cnd-button__primary {
    #button_style(16px, 8px 30px, #fff, #00A862)
  }
  .cnd-button__small {
    #button_style(14px, 5px 20px);
  }
  .cnd-button__primary:hover {
    background-color: rgba(0,168,98, 0.3);
  }

</style>
