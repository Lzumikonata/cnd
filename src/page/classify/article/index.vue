<script>
  import Comment from '../../../components/comment.vue'
  import { getArticle } from '../../../service/getData'
  import ElButton from '../../../../node_modules/element-ui/packages/button/src/button'
  export default {
    components: {
      ElButton,
      Comment },
    data: () => ({
      article: {
        title: '',
        content: '',
        author: ''
      },
      forgive_count: 0,
      forgive: false,
    }),
    methods: {
      toggle() {
        this.forgive = !this.forgive
        if(this.forgive) {
          this.forgive_count++
          this.$message({ message: '当然是选择原谅她~', type: 'success' })
        } else {
          this.forgive_count --
          this.$message({ message: '舔狗不值得同情!', type: 'warning' })
        }
      }
    },
    mounted() {
      getArticle(this.$route.query.article_id).then(res => {
        this.article = res.message
        console.log(res)
      })
    }
  }
</script>

<template>
  <div class="article">
    <div class="article-content">
      <div class="article-detail">
        <div class="article-header">
          <div>
            <h1>{{ article.title }}</h1>
            <p>{{ article.author }}
              <el-button size="small">嗯，是他</el-button>
              <span>评论: 44</span>|<span @click="toggle" :class="{ forgive_active: forgive }">原谅ta: {{ forgive_count }}</span>
            </p>
          </div>
          <div>
            <img src="../../../assets/logo.png">
          </div>
        </div>
        <div v-html="article.content"></div>
        <el-button>ok</el-button>
      </div>
      <comment></comment>
    </div>
    <div class="article-other">
      <div class="author-stage">
        <el-button>{{ article.author }}</el-button>
      </div>

    </div>
  </div>
</template>

<style scoped lang="less">
  .article {
    display: flex;
    justify-content: flex-start;
    .article-content {
      width: 75%;
      padding: 0 3%;
    }
    .article-other {
      width: 25%;
    }
  }
  .article-detail {
    text-align: left;
    .article-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      img {
        height: 80px;
        width: 80px;
        border-radius: 50%;
        border: 1px solid #00A862;
      }
      span {
        margin:0 20px;
      }
    }
  }
  .author-stage {
    height: 250px;
    width: 90%;
    border: 1px solid #ccc;
    background-color: #f2f2f2;
    margin-top: 30px;
  }
  .forgive_active {
    color: #00A862;
  }

</style>
