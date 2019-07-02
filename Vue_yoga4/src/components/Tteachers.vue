<template>
  <div>
    <!-- 首席教练 -->
    <section class="teacher_leader">
      <ul class="clearfix">
        <li v-for="(tea) in coachlist1" :key="tea.coach_id">
          <div class="teacher_img">
            <img src="../assets/teacher_wanrui.jpg" alt>
          </div>
          <div class="teacher_info">
            <h1 v-text="tea.coach_name"></h1>
            <b v-text="tea.coach_authen"></b>
            <p v-text="tea.coach_description"></p>
            <a href>查看详情</a>
          </div>
        </li>
      </ul>
    </section>
    <!-- 特约大牌 -->
    <section class="teacher_big">
      <div class="content">
        <dl class="clearfix">
          <dt>特约大牌</dt>
          <dd v-for="(tea2) in coachlist2" :key="tea2.coach_id">
            <img :src="tea2.coach_histogram_image" alt>
            <div class="card">
              <div class="line"></div>
              <p class="big_name" v-text="tea2.coach_name"></p>
              <b class="big_indt" v-text="tea2.coach_authen"></b>
            </div>
            <p class="big_txt" v-text="tea2.coach_description"></p>
          </dd>
        </dl>
      </div>
    </section>
    <!-- 导师团队 -->
    <section class="teacher_big">
      <div class="content">
        <dl class="clearfix">
          <dt>导师团队</dt>
          <dd v-for="(tea3) in coachlist3" :key="tea3.coach_id">
            <img :src="tea3.coach_histogram_image" alt>
            <div class="card">
              <div class="line"></div>
              <p class="big_name" v-text="tea3.coach_name"></p>
              <b class="big_indt" v-text="tea3.coach_authen"></b>
            </div>
            <p class="big_txt" v-text="tea3.coach_description"></p>
          </dd>
        </dl>
      </div>
    </section>
    <Aloading/>
  </div>
</template>

<script>
import Aloading from '@/components/Aloading.vue'
export default {
  components: {
    Aloading
  },
  data () {
    return {
      coachlist1: [],
      coachlist2: [],
      coachlist3: []
    }
  },
  async created () {
    this.$store.state.showLoading++
    const data3 = await this.$axios(
      'https://www.easy-mock.com/mock/5cfb93cde5e7b850d846cd8a/example/coachlist#!method=get'
    )
    // console.log(data3.data.result);
    this.coachlist1 = data3.data.result[0].list
    this.coachlist2 = data3.data.result[1].list
    this.coachlist3 = data3.data.result[2].list
    // console.log(this.coachlist1);
    // console.log(this.coachlist2);
    // console.log(this.coachlist3);
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

.teacher_leader {
  width: 100%;
  ul {
    width: 80%;
    padding: 0 10px;
    margin: 0 auto;
    max-width: 1024px;
    li {
      width: 80%;
      text-align: left;
      margin: 0 auto;
      padding: 50px 0;
      .teacher_img {
        width: 100%;
        img {
          width: 100%;
        }
      }
      .teacher_info {
        margin: 50px auto 0;
        h1 {
          font-size: 35px;
          color: #333;
          padding-bottom: 10px;
          font-weight: 400;
        }
        b {
          font-size: 14px;
          display: block;
          color: #333;
          padding: 10px 0 15px;
          font-weight: 400;
        }
        p {
          margin-top: 30px;
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          overflow: hidden;
          height: 6em;
          font-size: 14px;
          color: #999;
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
.teacher_big {
  margin: 30px 0 0;
  .content {
    width: 80%;
    padding: 0 10px;
    margin: 0 auto;
    max-width: 1024px;
    dl {
      dt {
        border-left: 8px solid #fff;
        border-color: #4d4d4d;
        font-size: 32px;
        margin-top: 80px;
        padding-left: 20px;
        line-height: 1;
        font-weight: 300;
      }
      dd {
        margin: 30px auto 0;
        width: 220px;
        img {
          display: block;
          width: 100%;
        }
        .card {
          padding: 15px;
          position: relative;
          top: -40px;
          z-index: 10;
          background: #fff;
          box-shadow: 0 2px 64px 0 rgba(0, 0, 0, 0.12);
          border-bottom: 3px solid #000;
          width: 70%;
          margin: 0 auto;
          .line {
            display: block;
            width: 24px;
            height: 2px;
            background: #333;
          }
          .big_name {
            color: #333;
            padding: 5px 0;
            font-size: 18px;
            line-height: 1.5;
          }
          .big_indt {
            display: block;
            font-size: 12px;
            color: #999;
          }
        }
        .big_txt {
          height: 4.5em;
          line-height: 1.5;
          color: #999;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          overflow: hidden;
          font-size: 14px;
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
