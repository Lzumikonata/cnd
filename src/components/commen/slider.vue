<script>
  
  export default {
    components: {},
    data: () => ({
      btnClientX: 0,
      btnOffset: 0
    }),
    methods: {
      init() {
        const btn = this.$refs.button
        btn.style.left = '4px'
      },
      startMove(e) {
        const btn = this.$refs.button
        this.btnClientX = e.clientX
        console.log(e.clientX)
      },
      moving(e) {
        console.log(e.clientX)
        if (!this.btnClientX) {
          return
        }
        const moveX = e.clientX - this.btnClientX
        const btn = this.$refs.button
        btn.style.left = `${moveX}px`
        if (btn.offsetLeft > 352) {
          btn.style.left = '352px';
          this.$message('ok')
          this.btnClientX = 0
        }
      },
      overMove() {
        const btn = this.$refs.button
        this.btnClientX = 0
        btn.style.left = btn.offsetLeft
       // this.init()
      }
    },
  }
</script>

<template>
  <div class="slider-container">
    <button
            @mousedown="startMove"
            id="button"
    @mousemove="moving"
    ref="button"
    @mouseup="overMove"></button>
  </div>
</template>

<style scoped lang="less">
  .slider-container {
    width: 400px;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 0 3px;
    overflow: hidden;
    button {
      height: 44px;
      width: 50px;
      border-radius: 4px;
      outline: 0;
      position: absolute;
    }
  }

</style>
