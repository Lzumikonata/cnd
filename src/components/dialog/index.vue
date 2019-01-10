<script>
  import selfForm from '../form'
  export default {
    components: { selfForm },
    data: () => ({
      dialogVisible: false,
      formItems: [{
        type: 'input',
        label: '部门名称',
        prop: 'deptName',
        col: 24,
        placeholder: '请输入一级部门名称',
        rule: [
          { required: true, message: '部门名称不能为空', trigger: 'blur' },
        ]
      }],
    }),
    methods: {
      open() {
        this.dialogVisible = true
      },
      handleDialog() {
        this.$refs.form.handleSearch()
       console.log(this.$refs.form.forms)
      },
      reset() {
        this.$refs.form.initForm()
      }
    },
  }
</script>

<template>
  <div>
    <el-dialog title="测试" :visible.sync="dialogVisible">
      <self-form :formItems="formItems" ref="form"></self-form>
      <span slot="footer" class="dialog-footer">
         <el-button @click="dialogVisible = false">取 消</el-button>
         <el-button type="primary" @click="handleDialog">确 定</el-button>
        <el-button type="primary" @click="reset">重置</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<style scoped>

</style>
