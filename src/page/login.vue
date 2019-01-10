<script>
  import io from 'socket.io-client'
  export default {
    components: {},
    data: () => ({
      ws: null,
      form: {
        username: '',
        password: ''
      }
    }),
    methods: {
      async submit(form) {
        const params = Object.assign({}, form)
        await this.ws.emit('login', params)
        await this.ws.on('users', (data) => {
          console.log(data)
        })
      }
    },
    mounted() {
      this.ws = io('http://127.0.0.1:2333', {
        transports: ['websocket']
      })
      this.ws.on('connect', () => {
        console.log('success')
      })
    }
  }
</script>

<template>
  <div :class="$style.container">
    <el-form label-width="80px" :model="form">
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="submit(form)">登录</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<style module>
  .container {
    width: 500px;
    margin-top: 50px;
  }
</style>
