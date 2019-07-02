<template>
  <section class="section part_down">
    <div class="section_text">
      <img src="../assets/logo_pic.png" alt class="logo">
      <p class="description">
        5000万瑜伽爱好者共同的选择 2000+瑜伽课程随心选择 专业导师精心编排 随时随地都能练习
        <br>支持iOS、安卓版本下载 TV端可前往各大电视应用市场下载
      </p>
    </div>
    <ul class="download clearfix">
      <li class="download_btn">
        <a href class="apple"></a>
      </li>
      <li class="download_btn">
        <a href class="android"></a>
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
ul,
li {
  list-style: none;
}
.part_down {
  width: 100%;
  height: 585px;
  padding-top: 100px;
  background: url(../assets/main_download_bg.jpg) no-repeat 50%;
  background-size: cover;
  text-align: center;
  .section_text {
    img {
      width: 80px;
      padding-bottom: 50px;
    }
    .description {
      padding: 0 20px;
      font-size: 14px;
      color: #999;
      line-height: 1.5;
    }
  }
  .download {
    margin-top: 100px;
    width: 100%;
    .download_btn {
      float: left;
      display: block;
      width: 100%;
      margin: 0;
      text-align: center;
      padding-bottom: 10px;
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
        background: url(../assets/download_pic3.png) no-repeat;
      }
    }
  }
}
</style>
