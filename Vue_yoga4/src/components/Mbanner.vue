<template>
  <section id="banner_home">
    <div class="banner_text">
      <h1 class="title">全球5000万瑜伽爱好者的共同选择</h1>
      <p class="description">·练瑜伽就来每日瑜伽APP·</p>
    </div>

    <ul class="download">
      <li class="download_btn">
        <a href class="apple"></a>
      </li>
      <li class="download_btn">
        <a href class="android"></a>
      </li>
    </ul>

    <div class="download_report">
      <em>每日瑜伽联合艾瑞发布</em>
      <a href class="report_s">
        <span>2018中国瑜伽行业研究报告</span>
        <a href>点击查看 ></a>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Mheader',
  props: {
    // msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
#banner_home {
  width: 100%;
  height: 450px;
  background: #ccc;
  background: url(../assets/main_banner_img.jpeg) no-repeat 50%;
  background-size: cover;
  position: relative;
  .banner_text {
    color: #fff;
    text-align: center;
    line-height: 1;
    font-size: 14px;
    font-family: Helvetica Neue, Helvetica, Arial, Source Han Sans CN, Heiti SC,
      sans-serif;
    font-weight: 300;
    letter-spacing: 1px;
    position: absolute;
    top: 26%;
    left: 0;
    .title {
      font-size: 35px;
      margin: 0 15px 15px;
      line-height: 1.2;
      padding: 0;
      font-weight: 400;
      display: inline-block;
    }
    .description {
      font-size: 20px;
    }
  }
  .download {
    position: absolute;
    bottom: 100px;
    left: 0;
    width: 100%;
    .download_btn {
      float: left;
      width: 50%;
      margin: 0;
      text-align: center;
      a {
        width: 150px;
        background-size: 100% 100%;
        height: 50px;
        border: none;
        display: inline-block;
      }
      .apple {
        background: url(../assets/download_pic1.png) no-repeat;
      }
      .android {
        background: url(../assets/download_pic2.png) no-repeat;
      }
    }
  }
  .download_report {
    width: 100%;
    bottom: 10px;
    left: 50%;
    margin-left: -50%;
    text-align: center;
    position: absolute;
    em {
      font-size: 14px;
      display: block;
      color: #fff;
      font-style: normal;
      line-height: 16px;
      padding-bottom: 10px;
    }
    a {
      font-size: 22px;
      color: #fff;
      line-height: 22px;
      text-decoration: none;
      cursor: pointer;
      span {
        // background: url(../assets/icon_banner_text.png) no-repeat;
        font-size: 18px;
        display: block;
        padding-left: 24px;
        font-size: 18px;
      }

      a {
        color: #fff;
        font-size: 16px;
      }
    }
  }
}
.report_s::before {
        display: inline-block;
        content: "";
        position: absolute;
        left: 30px;
        bottom: 22px;
        width: 20px;
        height: 20px;
        background: url(../assets/icon_banner_text.png) no-repeat;
        background-size: cover;
      }
</style>
