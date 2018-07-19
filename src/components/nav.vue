<script>
  export default {
    components: {},
    data: () => ({
      navigation: [
        { name: 'xx', path: '/list/' },
        { name: '绿色', path: '/list/hat' },
        { name: 'pw', path: '/list/up' },
        { name: '舔啊', path: '/list/wheel' }
        ]
    }),
    methods: {
      navLink(path) {
        this.$router.push(path)
      },
    },
  }
</script>

<template>
  <div class="bar">
    <div class="logo">
      <img src="../assets/logo.png"/>
      <p>green mood</p>
    </div>
      <ul>
        <li v-for="(item, index) in navigation" :key="index" @click="navLink(item.path)">{{ item.name }}</li>
      </ul>
    <button @click="navLink('/edit')">今天也要努力被绿喔</button>
  </div>
</template>

<style scoped lang="less">
  .bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
    ul {
      display: flex;
      height: 80px;
      width: 50%;
      border-bottom: 1px solid #00A862;
      align-items: center;
      color: #00A862;
      li {
        flex: 1;
        font-size: 20px;
      }
    }
    button {
      background-color: #00A862;
      height: 40px;
      width: 200px;
      border: 1px solid #00A862;
      border-radius: 16px;
      font-weight: bold;
      color: white;
      font-size: 16px;
    }
  }
  .logo {
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 1px solid #00A862;
    }
    p {
      margin: 0;
      color: #00A862;
    }
  }

</style>
