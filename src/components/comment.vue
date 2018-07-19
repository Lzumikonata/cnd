<script>
  import { createComment, getCommentList } from '../service/getData'
  import Reply from '../components/reply.vue'
  import ElInput from '../../node_modules/element-ui/packages/input/src/input'
  import ElButton from '../../node_modules/element-ui/packages/button/src/button'
//  import Vue from 'vue'
  export default {
    components: {
      ElButton,
      ElInput,
      Reply,
    },
    data: () => ({
      comment_list: [],
      current_user: 'maoyiyi',
      comment_content: false,
      commentId: null,
      commentInput: '',
      replyAuthor: '',
      replyAuthorButton: '',
      replyVisible: false,
      replyInput: '',
    }),
    computed: {  },
    methods: {
      replyIt(reply_author, comment_id) {
        this.replyVisible = true
        this.replyAuthor = reply_author
        this.commentId = comment_id
        this.replyAuthorButton = `回复: ${this.replyAuthor}`
  //      new Vue({
//          el: '#createId' + index,
//          data: {
//             msg: 'aaaaa'
//          },
//          render() {
//            const element = this.$createElement
//            const destory = this.$delete
//            return element(
//              'div',
//              { attrs: { id: `createId${index}` }, style: { display: "flex" } },
//              [
//                element('el-input', { attrs: { id: 'caicai' }, style: { marginRight: '10px' } }),
//                element('el-button', { attrs: { id: 'test' } }, 'OK')
//              ],
//            )
//          }
//        })
      },
//      finishComment() {
//        const newReply = {}
//        newReply.author = this.current_user
//        newReply.replyAuthor = this.replyAuthor
//        newReply.comment = this.commentInput
//        for (const item of this.comment_list) {
//          if (item._id === this.commentId) {
//            newReply.commentId = this.commentId
//            newReply.step = item.replies.length + 1
//            createComment(newReply).then(res => {
//              console.log(res)
//              item.replies.push(newReply)
//            })
//          }
//        }
//        if (!this.replyAuthor && !this.commentId) {
//          newReply.replies = []
//          newReply.step = 0
//          console.log(newReply)
//          createComment(newReply).then(res => {
//            console.log(res)
//            this.comment_list.push(newReply)
//          })
//        }
//        },
//      restore() {
//        this.replyAuthorButton = `回复: ${this.replyAuthor}`
//      },
      reply(index) {
        const newReply = {}
        newReply.author = this.currentName
        newReply.comment = this.replyInput
        newReply.replyAuthor = this.replyAuthor
        newReply.commentId = this.commentId
        newReply.step = comment_list[index].replies.length
        createComment(newReply).then(res => {
          console.log(res)
        })
      }
    },

    mounted() {
      getCommentList(this.$route.query.article_id).then(res => {
        console.log(res)
        this.comment_list = res.message
      })
    }
  }
</script>

<template>
  <div>
    <ul class="comment-list">
      <li v-for="(comment, index) in comment_list" :key="comment._id">
        <label>{{ comment.author }}: </label>
        <span>{{ comment.comment }}</span>
        <span @click="replyIt(comment.author, comment._id)" class="comment-reply">回复</span>
        <p v-for="reply in comment.replies" :key="reply._id">
          <label>{{ reply.author }}<span> 回复 </span> {{reply.replyAuthor}}:</label>
          <span>{{ reply.comment }}</span>
          <span @click="replyIt(reply.author, comment._id)" class="comment-reply">回复</span>
        </p>
        <div class="reply-content" v-show="replyVisible">
          <el-input v-model="replyInput"></el-input>
          <el-button @click="reply(index)">回复</el-button>
        </div>
        <!--<p :id="`createId${index}`"></p>-->
        <!--<el-input v-model=""></el-input> <el-button>提交评论</el-button>-->
      </li>
    </ul>

    <Reply></Reply>
    <!--<el-button v-show="replyAuthor"-->
               <!--@mouseenter.native="replyAuthorButton = '取消'"-->
               <!--@mouseleave.native="restore"-->
               <!--@click="replyAuthor=''; commentId = ''"-->
    <!--class="replyAuthorBtn">{{ replyAuthorButton }}</el-button>-->
    <!--<el-input type="textarea"-->
              <!--:rows="2" v-model="commentInput"></el-input>-->
    <!--<el-button @click="finishComment">OK</el-button>-->
  </div>
</template>

<style scoped lang="less">
   .comment-list {
     li {
       padding: 10px;
       border-bottom: 1px solid #ccc;
       text-align: left;
       p {
         padding-left: 20px;
       }
       .comment-reply {
         color: #00A862;
         float: right;
       }
     }
   }
  .reply-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    button {
      margin-left: 10px;
    };
  }
</style>
