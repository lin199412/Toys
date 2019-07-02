<template>
  <div>
    <!-- 瑜伽垫 -->
    <section class="mall">
      <div class="content clearfix">
        <div class="directory">
          <img src="../assets/mall_ directory_mat.jpg" alt>
          <p>瑜伽垫</p>
          <b>YOGA MAT</b>
        </div>
        <ul class="goods">
          <li v-for="ma1 in malllist1" :key="ma1.equipment_id">
            <div class="img_box">
              <img :src="ma1.pic_url">
            </div>
            <p class="goods_name" v-text="ma1.title"></p>
          </li>
        </ul>
      </div>
    </section>
    <!-- 瑜伽辅具 -->
    <section class="mall">
      <div class="content clearfix">
        <div class="directory">
          <img src="../assets/mall_ directory_aids.jpg" alt>
          <p>瑜伽辅具</p>
          <b>YOGA AIDS</b>
        </div>
        <ul class="goods">
          <li v-for="ma2 in malllist2" :key="ma2.equipment_id">
            <div class="img_box">
              <img :src="ma2.pic_url">
            </div>
            <p class="goods_name" v-text="ma2.title"></p>
          </li>
        </ul>
      </div>
    </section>
    <!-- 瑜伽服 -->
    <section class="mall">
        <div class="content clearfix">
        <div class="directory">
          <img src="../assets/mall_ directory_apparel.jpg" alt>
          <p>瑜伽服</p>
          <b>YOGA APPAREL</b>
        </div>
        <ul class="goods">
          <li v-for="ma3 in malllist3" :key="ma3.equipment_id">
            <div class="img_box">
              <img :src="ma3.pic_url">
            </div>
            <p class="goods_name" v-text="ma3.title"></p>
          </li>
        </ul>
      </div>
    </section>
    <!-- 瑜伽生活 -->
    <section class="mall">
        <div class="content clearfix">
        <div class="directory">
          <img src="../assets/mall_ directory_life.jpg" alt>
          <p>瑜伽生活</p>
          <b>YOGA LIFE</b>
        </div>
        <ul class="goods">
          <li v-for="ma4 in malllist4" :key="ma4.equipment_id">
            <div class="img_box">
              <img :src="ma4.pic_url">
            </div>
            <p class="goods_name" v-text="ma4.title"></p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
      malllist1: [],
      malllist2: [],
      malllist3: [],
      malllist4: []
    }
  },
  async created () {
    this.$store.state.showLoading++
    const data_mall = await this.$axios(
      'https://www.easy-mock.com/mock/5cfb93cde5e7b850d846cd8a/example/mall#!method=get'
    )
    console.log(data_mall)
    this.malllist1 = data_mall.data.result[0].equipments
    this.malllist2 = data_mall.data.result[1].equipments
    this.malllist3 = data_mall.data.result[2].equipments
    this.malllist4 = data_mall.data.result[3].equipments
    console.log(this.malllist1)
    console.log(this.malllist2)
    console.log(this.malllist3)
    console.log(this.malllist4)
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

.mall {
  margin: 30px 0 50px 0;
  .content {
    width: 80%;
    padding: 0 10px;
    margin: 0 auto;
    max-width: 1024px;
    .directory {
      float: none;
      width: 285px;
      height: 220px;
      margin: 0 auto 50px;
      position: relative;
      max-width: 333px;
      min-height: 333px;
      max-height: 380px;
      overflow: hidden;
      img {
        width: 100%;
        display: block;
      }
      p {
        position: absolute;
        position: absolute;
        top: 43px;
        left: 35px;
        color: #333;
        font-size: 30px;
        font-weight: 300;
      }
      b {
        position: absolute;
        top: 78px;
        left: 35px;
        line-height: 1.5;
        color: #333;
        font-weight: 400;
        font-size: 16px;
      }
    }
    .goods {
      width: 100%;
      float: none;
      margin: 0 auto;
      max-width: 766px;
      li {
        display: block;
        float: none;
        margin: 0 auto 50px;
        width: 265px;
        max-width: 313px;
        background: #fbfbfb;
        padding: 2%;
        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.12);
        .img_box {
          width: auto;
          margin: 8px;
          height: 18em;
          position: relative;

          img {
            width: 100%;
            max-height: 100%;
            margin: 0 auto;
            display: block;
            max-width: 100%;
          }
        }
        .goods_name {
          font-size: 18px;
          padding-top: 6%;
          line-height: 1.5;
          height: 54px;
          overflow: hidden;
          margin-bottom: 4%;
          color: #333;
          font-weight: 300;
        }
      }
    }
  }
}
</style>
