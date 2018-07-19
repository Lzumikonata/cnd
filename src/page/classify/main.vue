<script>
  import Navigator from '../../components/nav.vue'
  export default {
    components: { Navigator },
    data: () => ({}),
//    watch: {
//      '$route' (to, from) {
//
//      }
//    },
    methods: {},
  }
</script>

<template>
  <div>
    <Navigator></Navigator>
    <div>{{ $route.params.id }}</div>
    <transition name="slide" mode="out-in">
       <router-view></router-view>
    </transition>

  </div>
</template>

<style scoped>
  .slide-leave-active {
    animation:leavemove 1s;
  }
  .slide-enter-active {
    animation: entermove 1s;
  }
  @keyframes leavemove {
    from { margin-left: 0; }
    to { margin-left: 100%; }
  }
  @keyframes entermove {
    from {  margin-right: 100%; }
    to { margin-right: 0 }
  }
</style>
