<template>
  <section class="basic">
    <div class="basic_text">
      <div class="line"></div>
      <h1 class="title">基础系列</h1>
      <p class="description">9大分类，基础入门，减脂塑形，减压冥想等，内容更全面</p>
    </div>

    <div class="classify">
      <ul class="clearfix">
        <li v-for="(bas) in basiclist" :key="bas.category_id">
          <router-link :to="{ name: 'Pbasicdetail', query: { c_name: bas.cn_spell_name }}">
            <img :src="bas.images" alt>
            <p class="title">
              <span v-text="bas.name">减脂塑形</span>
            </p>
          </router-link>
        </li>
      </ul>
    </div>

    <div class="main">
      <div class="main_text">
        <div class="line"></div>
        <h1 class="title">名师课堂</h1>
        <p class="description">海外瑜伽名师精编计划，随时接受大师洗礼</p>
      </div>
      <ul class="content course-list">
        <li class="clearfix" v-for="(les) in lessonlist" :key="les.program_id">
          <div class="li_pic">
            <img :src="les.logo_new_cover" alt>
          </div>
          <div class="li_text">
            <h1 v-text="les.program_name"></h1>
            <b>—{{les.coach_name}}</b>
            <p class="lesson_num">{{les.IncludeCount}}天 {{les.IncludeCount}}节</p>
            <p class="lesson_txt" v-text="les.program_description"></p>
            <router-link :to="{ name: 'Pmasterdetail', query: { c_name: les.cn_spell_name }}">查看详情</router-link>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      basiclist: [],
      lessonlist: []
    }
  },
  async created () {
    this.$store.state.showLoading++
    const data = await this.$axios(
      'https://www.easy-mock.com/mock/5cfb93cde5e7b850d846cd8a/example/basiclist#!method=get'
    )
    console.log(data.data.result)
    this.basiclist = data.data.result

    const data2 = await this.$axios(
      'https://www.easy-mock.com/mock/5cfb93cde5e7b850d846cd8a/example/lessonlist#!method=get'
    )
    console.log(data2.data.result)
    this.lessonlist = data2.data.result
    this.$store.state.showLoading--
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
.basic {
  width: 100%;
  //   height: 821px;
  margin: 30px 0 0;
  .basic_text {
    text-align: center;
    font-family: Helvetica Neue, Helvetica, Arial, Source Han Sans CN, Heiti SC,
      sans-serif;
    font-weight: 300;
    letter-spacing: 1px;
    .line {
      display: block;
      width: 50px;
      height: 4px;
      background: #333;
      margin: 0 auto;
    }
    .title {
      padding-top: 40px;
      font-size: 30px;
      //   margin-bottom: 15px;
      margin: 0 0 15px 0;
      color: #4d4d4d;
      font-weight: 400;
    }
    .description {
      color: #999;
      line-height: 1.5;
      font-size: 14px;
    }
  }
  .classify {
    // height: 630px;
    margin-bottom: 50px;
    ul {
      margin: 50px auto;
      //   height: 630px;
      width: 100%;
      li {
        width: 29vw;
        height: 29vw;
        // height: auto;
        // padding-bottom: 100%;
        margin: 3% 0 0 3%;
        position: relative;
        float: left;
        overflow: hidden;
        // background: aquamarine;
        a {
          display: inline-block;
          width: 100%;
          height: 100%;
          text-align: center;
          img {
            // width: 100%;
            height: 100%;
            position: absolute;
            left: 50%;
            transform: translate(-50%);
          }
          p {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 11;
            background: rgba(0, 0, 0, 0.4);
            color: #fff;
            text-align: center;
            span {
              position: relative;
              top: 50%;
              transform: translateY(-50%);
            }
          }
        }
      }
    }
  }
  .main {
    .main_text {
      text-align: center;
      font-family: Helvetica Neue, Helvetica, Arial, Source Han Sans CN,
        Heiti SC, sans-serif;
      font-weight: 300;
      letter-spacing: 1px;
      .line {
        display: block;
        width: 50px;
        height: 4px;
        background: #333;
        margin: 0 auto;
      }
      .title {
        padding-top: 40px;
        font-size: 30px;
        //   margin-bottom: 15px;
        margin: 0 0 15px 0;
        color: #4d4d4d;
        font-weight: 400;
      }
      .description {
        color: #999;
        line-height: 1.5;
        font-size: 14px;
      }
    }
    .content {
      width: 80%;
      padding: 0 10px;
      margin: 0 auto;
      max-width: 1024px;
      li {
        margin: 50px 0;
        text-align: left;
        padding: 50px 0;
        .li_pic {
          width: 100%;
          img {
            width: 100%;
            margin: 0 auto;
            max-height: 337px;
          }
        }
        .li_text {
          h1 {
            color: #333;
            padding-bottom: 10px;
            font-size: 35px;
            font-weight: 400;
          }
          b {
            display: block;
            font-size: 20px;
            color: #333;
            padding-bottom: 38px;
            font-weight: 400;
          }
          p {
            line-height: 1.5;
            color: #999;
            font-size: 14px;
          }
          .lesson_num {
            line-height: 1.5;
            color: #999;
            font-size: 14px;
            margin-bottom: 10px !important;
          }
          .lesson_txt {
            display: -webkit-box;
            -webkit-line-clamp: 4;
            overflow: hidden;
            height: 6em;
          }
          a {
            display: block;
            color: #333;
            border: 1px solid #333;
            border-radius: 4px;
            width: 130px;
            height: 40px;
            font-size: 14px;
            line-height: 40px;
            margin-top: 40px;
            text-align: center;
          }
        }
      }
    }
  }
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
</style>
