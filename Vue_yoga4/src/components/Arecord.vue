<template>
  <section class="admin_record">
    <div class="head clearfix">
      <!-- <p>自定义课程表</p> -->
      <span>自定义课程表</span>
    </div>
    <ul class="lesson_list">
      <li>
        <img src="http://qiniucdn.dailyyoga.com.cn/03/6f/036f28b03a6e091923e00e7ff839afe9.jpeg" alt>
      </li>
      <li>
        <img src="http://qiniucdn.dailyyoga.com.cn/d2/6a/d26a7c46ab8ddebd4a8606b301a9d4da.jpeg" alt>
      </li>
      <li>
        <img src="http://qiniucdn.dailyyoga.com.cn/c7/00/c700f83e03810f532d75fb10cd097a0f.jpeg" alt>
      </li>
      <li>
        <img src="http://qiniucdn.dailyyoga.com.cn/7f/3a/7f3aefc10cc09e8572669c0c6a5d3bd1.jpeg" alt>
      </li>
    </ul>
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

.admin_record {
  text-align: center;
  .head {
    margin-bottom: 10px;
    margin-top: 10px;
    height: 40px;
    span {
      font-size: 16px;
      font-weight: 300;
      // line-height: 22px;
      border: 1px solid #aaa;
      border-radius: 8px;
      padding: 10px 18px;
    }
  }
  .lesson_list {
    width: 80%;
    margin: 0 auto;
    li {
      margin-bottom: 20px;
      img {
        width: 100%;
      }
    }
  }
}
</style>
