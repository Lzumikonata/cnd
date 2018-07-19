<script>
  import { VueEditor } from 'vue2-editor'
  import { createArticle } from '../../../service/getData'
  export default {
    components: {
      VueEditor },
    data: () => ({
      customToolbar: [['bold', 'italic', 'underline'], [{ 'color': [] }]],
      article: {
        title: 'xx',
        introduce: 'xx',
        author: 'xxx',
        content: '<p>xixi</p>',
        anonymous: false,
        type: '绿帽',
      },
      article_type: ['xx', '绿帽', '备胎', 'pw'],
    }),
    methods: {
      submit() {
        switch (this.article.type) {
          case 'xx': this.article.type = 0; break;
          case '绿帽': this.article.type = 1; break;
          case '备胎': this.article.type = 2; break;
          case 'pw' : this.article.type = 3; break;
        }
        this.article.anonymous?this.article.anonymous=1:this.article.anonymous=0

        console.log(this.article)
        createArticle(this.article).then(res => {
          console.log(res)
        })
      }
    },
  }
</script>

<template>
  <div class="edit">
    <div>
      <p>write your green mood</p>
    </div>
    <div class="edit-title">
      <label>标题:</label><input v-model="article.title"/>
      <span><label>绿帽本人:</label> {{ article.author }}</span>
      <label>选择：</label>
      <el-select v-model="article.type">
        <el-option v-for="(item, index) in article_type"
                   :value="index"
                   :label="item"
        :key="item"></el-option>
      </el-select>
    </div>
    <div class="edit-introduce">
      <label>简介:</label><input v-model="article.introduce" /></div>
    <div class="editor-container">
       <vue-editor v-model="article.content"
                   class="editor"
                   :editorToolbar="customToolbar"></vue-editor>
    </div>
    <div class="anonymous"><el-checkbox v-model="article.anonymous" border>匿名</el-checkbox></div>
    <div><el-button @click="submit">发表</el-button></div>

  </div>
</template>

<style scoped lang="less">
  #style() {
    text-align: left;
    margin-bottom: 20px;
  }
  #input(@width) {
    height: 38px;
    font-size: 16px;
    width: @width;
    border: 1px solid #dcdfe6;
    padding: 0 20px;
    outline: none;
    border-radius: 4px;
  }
  .edit {
    padding: 0 5%;
  }
  .edit-title {
    #style();
    label {
      margin-right: 10px;
      color: #00A862;
    }
    input {
      #input(40%)
    }
    input:focus {
      border: 1px solid #00A862;
    }
    span {
      margin: 0 5%;
    }
  }
  .edit-introduce {
    #style();
    label {
      margin-right: 10px;
      color: #00A862;
    }
    input {
      #input(90%)
    }
    input:focus {
      border: 1px solid #00A862;
    }
  }
  .editor-container {
    display: flex;
    justify-content: center;
    .editor {
      width: 100%;
      height: 400px;
    }
  }
  .anonymous {
    text-align: right;
    margin-top: 20px;
  }


</style>
