<script>
  export default {
    components: {},
    data: () => ({
      routes: ['xx', 'green', 'pw', 'tg']
    }),
    methods: {},
    created() {

    }
  }
</script>

<template>
  <div class="bar">
    <ul>
      <li v-for="route in routes">{{ route }}</li>
    </ul>

  </div>
</template>

<style scoped>
  .bar {
    width: 60px;
    height: 200px;
    border: 1px solid #ccc;
    position: fixed;
    right: 100px;
  }
  .bar ul li {

  }

</style>
