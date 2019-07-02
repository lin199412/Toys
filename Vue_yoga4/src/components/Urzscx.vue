<template>
  <!-- <h2>证书查询</h2> -->
  <section class="coach_indt">
    <div class="title clearfix">
      <p>每日瑜伽教练认证</p>
      <b>DAILY YOGA COACH CERTIFICATION</b>
    </div>
    <div class="search_box">
      <input class="txt" type="text" placeholder="请输入身份证号码">
      <input class="btn" type="button" value="点击查询">
    </div>
    <!-- 显示查询结果，暂不支持 -->
    <div class="result"></div>
  </section>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
body {
  line-height: 1;
  font-size: 14px;
  font-family: Helvetica Neue, Helvetica, Arial, Source Han Sans CN, Heiti SC,
    sans-serif;
  font-weight: 300;
  letter-spacing: 1px;
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
.coach_indt {
  //   width: 80%;
  padding: 0 10px;
  margin: 0 auto;
  max-width: 1024px;
  .title {
    margin: 40px 0;
    text-align: center;
    p {
      font-size: 28px;
      color: #4d4d4d;
      font-weight: 300;
      margin-bottom: 10px;
    }
    b {
      font-size: 12px;
      letter-spacing: 2px;

      color: #4d4d4d;
    }
  }
  .search_box {
    .txt {
      width: 67%;
      font-size: 14px;
      float: left;
      height: 45px;
      border: 2px solid #979797;
      border-right: 0;
      border-radius: 8px 0 0 8px;
      text-indent: 10px;
      outline: none;
      padding: 0;
      -webkit-appearance: none;
    }
    .btn {
      font-size: 14px;
      width: 30%;
      box-sizing: content-box;
      border: 2px solid #333;
      background: #333;
      border-radius: 0 8px 8px 0;
      color: #fff;
      float: left;
      height: 45px;
      outline: none;
      padding: 0;
      -webkit-appearance: none;
    }
  }
  .result {
      height: 40px;
      margin-bottom: 40px;
  }
}
</style>
