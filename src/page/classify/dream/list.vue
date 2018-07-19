<script>
  import Side from '../../../components/side.vue'
  import List from '../../../components/list.vue'
  import { getList } from '../../../service/getData'
  export default {
    components: { Side, List },
    data: () => ({
      articles: [{
        title: 'aa'
      },
        {
          title: 'aa'
        },
        {
          title: 'aa'
        },
        {
          title: 'aa'
        },
      ]
    }),
    methods: {
      articleDetail(index) {
        this.$router.push({path: '/article', query: { article_id: index }})
      }
    },
    mounted() {
       getList("type=1").then(res => {
         this.articles = res.message
          console.log(res)
       })
    }
  }
</script>

<template>
  <div class="topic">
    <Side>
      <div class="articles">
        <div class="choice">ssss</div>
        <h2>精选</h2>
        <ul>
          <li v-for="(item, index) in articles" :key="index" @click="articleDetail(item._id)">
            <div class="article-title">
              <img src="../../../assets/logo.png">
              <h3>{{ item.title }}</h3></div>
            <div class="article-content">{{ item.introduce }}</div>
            <div class="article-more">了解更多</div>
          </li>
        </ul>
        <div class="introduce" v-show="true">
          <div class="introduce-word">
            <h1>introduce</h1>
            <p>nihaonihaonihaonihaonihao
              nihaonihaonihaonihaonihao</p>
            <button>注册</button>
            <button>登录</button>
          </div>
          <div>
            <img src="../../../assets/logo.png"/>
          </div>
        </div>
        <List></List>
      </div>
    </Side>
  </div>
</template>

<style lang="less" scoped>
  #li_style(@width, @height, @left, @top, @color) {
    width: @width;
    height: @height;
    border: 1px solid #cdcdcd;
    margin-left: @left;
    margin-top: @top;
    background-color: @color;
  }
  .topic {
    height: 100%;
  }
  .articles {
    width: 100%;
    background-color: #f2f2f2;
    ul {
      display: flex;
      justify-content: space-around;
      li {
        #li_style(20%, 300px, 0, 50px, #fff);
        box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.12)
      }
    }
  }
  .article-title {
    position: relative;
    img {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      border: 1px solid #42d885;
      position: absolute;
      top: -25px;
      left: calc(~"50% - 25px");
    }
    h3 {
      margin: 0;
      padding-top: 30px;
    }
  }
  .article-content {
    height: 70%;
  }
  .article-more {
    color: #11b95c;
    font-size: 16px;
  }
  .choice {
    height: 400px;
    width: 100%;
    background-color: rgba(0, 100, 0, 0.3);
  }
  .introduce {
    margin-top: 40px;
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    .introduce-word {
      width: 50%;
      p {
        font-size: 20px;
        width: 100%;
      }
      button {
        width: 120px;
        height: 40px;
        background-color: #fff;
        border: 1px solid #00A862;
        border-radius: 16px;
        margin-right: 10px;
        color: #00A862;
        font-size: 20px;
      }
    }
  }

</style>
