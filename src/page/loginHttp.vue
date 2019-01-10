<script>
  import $fetch from '../service/index'
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
      submit(form) {
        const params = Object.assign({}, form)
        $fetch('http://localhost:2333/user_admin', params, 'POST')
          .then(res => {
            console.log(res)
          })
      }
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
