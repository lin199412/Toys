<template>
  <section class="section part_center">
    <div class="section_text">
      <div class="line"></div>
      <h1 class="title">活跃瑜伽社区</h1>
      <p class="description">达人伽友聚集 分享练习心得</p>
    </div>
    <div class="section_img">
      <img src="../assets/main_part_3_img.png" alt>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.part_center {
  margin: 30px 0 0;
  height: 569px;
  background: url(../assets/main_part_3_bg.jpeg) no-repeat 50%;
  background-size: cover;
  .section_text {
    text-align: center;
    margin-top: 15%;
    .line {
      display: block;
      width: 50px;
      height: 4px;
      background: #333;
      margin: 0 auto;
    }
    .title {
      font-size: 30px;
      padding-top: 40px;
      margin: 0;
      margin-bottom: 15px;
      color: #4d4d4d;
      font-weight: 400;
    }
    .description {
      font-size: 14px;
      color: #999;
      line-height: 1.5;
    }
  }
  .section_img {
    width: 100%;
    text-align: center;
    img {
      width: 231px;
      margin: 50px auto 0;
    }
  }
}
</style>
