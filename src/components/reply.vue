<script>
  import { createComment } from '../service/getData'
  export default {
    components: {
    },
    data: () => ({
      commentInput: ''
    }),
    methods: {
      publishComment() {
        const newComment = {
          author: '',
          replies: [],
          comment: this.commentInput,
          replyAuthor: '',
          step: 0
        }
        createComment(newComment).then(res => {
           console.log(res)
        })
      }
    },
  }
</script>

<template>
  <div class="comment-Input__content">
    <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 5}" v-model="commentInput"></el-input>
    <el-button class="button" @click="publishComment">发表</el-button>
  </div>
</template>

<style scoped lang="less">
  .comment-Input__content {
    margin-top: 40px;
    .button {
      margin-top: 20px;
      float: right;
    }
  }
</style>
