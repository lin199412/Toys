<template>
    <!-- <h2>训练营</h2> -->
    <section class="camp">
    <!-- 单个元素写成列表，方便维护，随时新增内容 -->
    <ul>
      <li>
        <div class="ws_img">
          <img
            src="http://qiniucdn.dailyyoga.com.cn/bc/a5/bca5eb94fe11d92d78a84d69a29cee22.jpeg"
            alt
          >
        </div>
        <div class="ws_text clearfix">
          <h1>21天瑜伽入门精讲课</h1>
          <!-- <h2>海外名师瑜伽游学</h2>
          <p>你将获得正确的梵文唱诵及梵文体式名称口令，颁发最具权威的美联盟RYT40小时证书</p> -->
          <a href>查看详情</a>
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
export default {

}
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
.camp {
  width: 90%;
  padding: 0 10px;
  margin: 30px auto;
  max-width: 1024px;
  ul {
    width: 100%;
    li {
      margin: 50px 0;
      text-align: left;
      padding: 50px 0;
      .ws_img {
        width: 100%;
        img {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          max-height: 337px;
        }
      }
      .ws_text {
        margin: 50px auto 0;
        h1 {
          font-size: 26px;
          color: #333;
          padding-bottom: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: 0;
          padding: 0;
          font-weight: 400;
          margin-bottom: 30px;
        }
        h2 {
          font-size: 20px;
          color: #333;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: 0;
          padding: 0;
          font-weight: 400;
        }
        p {
          margin-top: 10px;
          line-height: 1.5;
          color: #999;
          -webkit-line-clamp: 2;
          height: 3em;
          display: -webkit-box;
          overflow: hidden;
          font-size: 14px;
        }
        a {
          display: block;
          color: #333;
          border: 1px solid #333;
          line-height: 50px;
          text-align: center;
          font-size: 18px;
          border-radius: 4px;
          width: 130px;
          height: 40px;
          font-size: 14px;
          line-height: 40px;
          margin-top: 40px;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
