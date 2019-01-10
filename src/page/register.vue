<script>
  import { registerForm } from '../../src/init/data/index'
  import CndButton from '../components/commen/button.vue'
  import CndDialog from '../components/commen/dialog.vue'
  import CndSlider from '../components/commen/slider.vue'
  export default {
    components: {
      CndButton,
      CndDialog,
      CndSlider
    },
    data: () => {
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (registerForm.checkPassword !== '') {
            this.$refs.registerForm.validateField('checkPassword');
          }
          callback();
        }
      }
      const validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== registerForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      }
      return {
      registerForm: registerForm,
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 20, message: '用户名必须在3-20个字符', trigger: 'blur' },
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' }
          ],
        checkPassword: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { validator: validatePass2, trigger: 'blur' }
          ]
      },
        dialogVisible: false
    }},
    methods: {
      register() {
        this.dialogVisible = true
      },
      changeVisible(val) {
        this.dialogVisible = val
      }
    },

  }
</script>

<template>
  <div class="register-content">
    <cnd-slider></cnd-slider>
    <h1>注册</h1>
    <el-form :model="registerForm" label-width="100px" :rules="rules" ref="registerForm">
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="registerForm.email"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="registerForm.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPassword">
        <el-input v-model="registerForm.checkPassword"></el-input>
      </el-form-item>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="registerForm.username"></el-input>
      </el-form-item>
    </el-form>
    <cnd-button type="primary" @click="register">注册</cnd-button>
    <cnd-dialog title="dialog" :visible.sync="dialogVisible" @open="changeVisible">
      <p>ARE YOU OK?</p>
      <div slot="footer" class="dialog-footer">
        <cnd-button type="small">确定</cnd-button>
        <cnd-button type="small" @click="dialogVisible=false">取消</cnd-button>
      </div>
    </cnd-dialog>
  </div>
</template>

<style scoped lang="less">
  .register-content {
    width: 50%;
  }
  .dialog-footer button{
    margin-right: 10px;
  }

</style>
