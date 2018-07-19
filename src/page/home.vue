<script>
  import slottest from '../components/slottest.vue'
  import ElButton from '../../node_modules/element-ui/packages/button/src/button'
  export default {
    components: {
      ElButton,
      slottest },
    data: () => ({
      visibleDialog: false,
      isHover: false,
      bar_list: [
        { name: 'dream', path: '/list/' },
        { name: 'green', path: '/list/hat' },
        { name: 'hook', path: '/list/up' },
        { name: 'spare', path: '/list/wheel' }
        ]
    }),
    methods: {
      next_nav(path) {
        this.$router.push(path)
      },
    },
  }
</script>

<template>
  <div>
    <el-button @click="visibleDialog = true"></el-button>
    <slottest title="hello" :visible="visibleDialog">
      <p>this is a dialog</p>
      <div slot="footer">
        <button>sure</button>
        <button @click="visibleDialog = false">close</button>
      </div>
    </slottest>
    <div class="home-bar" @mouseenter="isHover = true" @mouseleave="isHover = false">
      <nav>none</nav>
      <ul class="home-bar-list" v-show="isHover">
        <li class="home-list-item"
            v-for="(item, index) in bar_list"
            :key="index"
            @click="next_nav(item.path)">{{ item.name }}</li>
      </ul>
    </div>
    <section class="home-title">
      <p class="title">NONE</p>
      <p>play none</p>
    </section>
  </div>
</template>

<style lang="less">
  .home-bar {
    position: fixed;
    height: 100px;
    top: 20px;
    right: 5%;
    nav {
      text-align: right;
      width: 100px;
    }
    .home-bar-list {
      width: 100%;
      margin-top: 10px;
      height: 150px;
      text-align: center;
      border: 1px solid #ccc;
      li {
        margin-top: 10px;
      }
    }
  }

  .home-title {
    padding-top: 20%;
    height: 500px;
    border-bottom: 1px solid #ccc;
    .title {
      font-size: 36px;
    }
  }

  .home-introduction {
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;

  }
</style>
