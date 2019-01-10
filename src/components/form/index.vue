<script>
  
  export default {
    components: {},
    props: {
      formItems: {
        type: Array,
      },
      labelPosition: {
        type: String
      },
      size: {
        type: String
      },
      disabled: {
        type: Boolean,
        defaultValue: false
      },
    },
    data: () => ({
      forms: {},
    }),
    methods: {
      initForm() {
        this.$refs['form'].resetFields()
      },
      handleSearch() {
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.$emit('handleForm', this.forms)
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
    },
  }
</script>

<template>
  <div>
    <el-row :gutter="20">
      <el-form ref="form" :model="forms" label-width="100px" :label-position="labelPosition" :size="size" :disabled="disabled">
        <el-col v-for="(form, index) in formItems" :key="index" :span="form.col || 12">
          <el-form-item :label="`${form.label}:`" :prop="form.prop" :rules="form.rule">

            <el-input v-if="form.type === 'input'" v-model="forms[form.prop]" :placeholder="form.placeholder"></el-input>

            <el-select v-if="form.type === 'select'" v-model="forms[form.prop]" @change="form.func?form.func($event, forms):{}">
              <el-option v-for="opt in form.opts" :label="opt.label" :value="opt.value" :key="opt.value">
              </el-option>
            </el-select>

          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item>
            <el-button @click="handleSearch" type="primary">搜索</el-button>
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>
  </div>
</template>

<style module>

</style>
