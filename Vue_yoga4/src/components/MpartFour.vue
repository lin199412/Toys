<template>
  <section class="section part_center">
    <div class="section_text">
      <div class="line"></div>
      <h1 class="title">精选瑜伽装备</h1>
      <p class="description">线上精选商品 致力给你最好的瑜伽装备</p>
    </div>
    <div class="section_img">
      <img src="../assets/main_part_4_img.png" alt>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.part_center {
  margin: 30px 0 0;
  // padding-top: 100px;
  .section_text {
    text-align: center;
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
    width: 280px;
    height: 166px;
    // border: 5px solid #fff;
    // box-shadow: 0 2px 64px 0 rgba(0, 0, 0, 0.12);
    margin: 50px auto 0;
    position: relative;
    overflow: hidden;
    z-index: 10;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 280px;
      z-index: 12;
    }
  }
}
</style>
