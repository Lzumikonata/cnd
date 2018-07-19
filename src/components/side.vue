<script>
  
  export default {
    components: {},
    data: () => ({}),
    methods: {},
  }
</script>

<template>
  <div class="side">
    <div class="side_left">
      <div class="circle">left</div>
    </div>
    <slot></slot>
    <div class="side_right">
      <div class="circle">right</div>
    </div>

  </div>
</template>

<style scoped lang="less">
  #size(@jc, @ai: inherit ) {
    display: flex;
    justify-content: @jc;
    align-items: @ai;
  }
  .side {
    #size(space-between);
    height: 100%;
    .side_left, .side_right {
      width: 15%;
      height: 100%;
      position: fixed;
      #size(center, center);
      .circle {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 1px solid #000;
        text-align: center;
        #size(center, center);
      }
    }
  }
  .side_left {
    left: 0;
  }
  .side_right {
    right: 0;
  }

</style>
