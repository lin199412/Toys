<template>
  <div class="admins clearfix">
    <section class="banner clearfix">
      <div class="banner_text clearfix">
        <!-- <h1 class="title">瑜伽装备</h1> -->
        <p class="description">遇见更好的自己</p>
      </div>
    </section>
    <section class="admin_info">
      <div class="person_info">
        <div class="img_box">
          <img src="../assets/admin1_1.jpg" alt>
        </div>

        <div class="info_rt">
          <p class="name" v-text="this.a_name">与神对话1994</p>
          <div class="star">
            <i></i>
            <span>vip</span>,
            <span>初级yoga</span>
          </div>
        </div>
      </div>
      <div class="practice_info clearfix">
        <ul>
          <li>
            <h3>6820 分钟</h3>
            <p>累计练习</p>
          </li>
          <li class="midone">
            <h3>136 天</h3>
            <p>练习天数</p>
          </li>
          <li>
            <h3>第 6</h3>
            <p>好友排名</p>
          </li>
        </ul>
      </div>
    </section>
    <Arecord/>
    <div class="quit_it">
      <a href="###" @click="login_out()">退出登录</a>
    </div>
  </div>
</template>
<script>
import Arecord from '@/components/Arecord.vue'
export default {
  data () {
    return {
      a_name: ''
    }
  },
  components: {
    Arecord
  },
  methods: {
    login_out () {
      console.log('123')
      this.$store.state.admin_on--
      console.log(this.$store.state.admin_on)
      this.$router.replace('/Login')
    }
  },
  mounted () {
    console.log(this.$cookieStore.getCookie('name'))
    console.log(this.$store.state.admin_on)
    this.a_name = this.$cookieStore.getCookie('name')
  }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
body {
  line-height: 1;
  font-size: 14px;
  font-family: Helvetica Neue, Helvetica, Arial, Source Han Sans CN, Heiti SC,
    sans-serif;
  font-weight: 300;
  letter-spacing: 1px;
}
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
}
/*清除浮动（不管）*/
.clearfix:before,
.clearfix:after {
  /*清楚浮动*/
  content: "";
  display: table;
}

.clearfix:after {
  clear: both;
}

.clearfix {
  *zoom: 1;
  /*IE/7/6*/
}
.admins {
  margin-top: 50px !important;
  .banner {
    width: 100%;
    height: 200px;
    background: url(http://qiniucdn.dailyyoga.com.cn/26/19/261928e67f8506bfdfb8755309b36cb7.jpeg)
      no-repeat 50%;
    background-size: cover;
    margin-bottom: 20px;
    .banner_text {
      color: #fff;
      text-align: center;
      position: relative;
      top: 26%;
      line-height: 1;
      font-family: Helvetica Neue, Helvetica, Arial, Source Han Sans CN,
        Heiti SC, sans-serif;
      font-weight: 300;
      letter-spacing: 1px;
      .title {
        font-size: 35px;
        margin: 0 15px 15px;
        line-height: 1.2;
        font-weight: 400;
        letter-spacing: 2px;
      }
      .description {
        font-size: 20px;
        text-align: left;
        margin: 40px 25px;
      }
    }
  }
  .admin_info {
    width: 100%;
    // height: 160px;
    background: #fff;
    margin: 20px 0;
    border-bottom: 2px solid #ccc;
    margin-bottom: 25px;
    .person_info {
      width: 90%;
      height: 68px;
      margin: 0px auto;
      .img_box {
        width: 68px;
        height: 68px;
        border-radius: 50%;
        background: aquamarine;
        margin-top: 0;
        margin-right: 20px;
        display: block;
        float: left;
        overflow: hidden;
        img {
          width: 68px;
          height: 68px;
        }
      }
      .info_rt {
        float: left;
        // width: 120px;
        height: 60px;
        .name {
          color: #333;
          font-size: 20px;
          margin: 10px 0;
        }
        .star {
          i {
            width: 20px;
            height: 19px;
            background: url(../assets/icon_star.png) no-repeat 50%;
            background-size: 20px 19px;
            display: inline-block;
            margin-right: 6px;
          }
          span {
          }
        }
      }
    }
    .practice_info {
      width: 100%;
      ul {
        width: 90%;
        margin: 10px auto;
        text-align: center;
        li {
          width: 33%;
          height: 25vw;
          float: left;
          // margin: 0 1% 0 1%;

          h3 {
            font-size: 16px;
            font-weight: 400;
            margin-bottom: 10px;
            margin-top: 20px;
          }
          p {
            color: #888;
          }
        }
        // .midone {
        //   border-left: #aaa 1px solid;
        //   border-right: #aaa 1px solid;
        // }
      }
    }
  }
  .quit_it {
    text-align: center;
    width: 100%;
    margin: 20px 0;
    a {
      display: inline-block;
      color: #333;
      border: 1px solid #333;
      width: 150px;
      line-height: 50px;
      text-align: center;
      font-size: 18px;
      border-radius: 4px;
      width: 130px;
      height: 40px;
      font-size: 14px;
      line-height: 40px;
    }
  }
}
</style>
