<template>
  <div class="YogaUniversity">
    <section class="banner">
      <div class="banner_text">
        <h1 class="title">瑜乐大学</h1>
        <p class="description">线上导师指导 RYT教练培训 成长进阶更有效</p>
      </div>
    </section>
    <Urouter/>
    <Mfooter/>
  </div>
</template>
<script>
import Urouter from '@/components/Urouter.vue'
import Mfooter from '@/components/Mfooter.vue'

export default {
  components: {
    Urouter,
    Mfooter
  }
}
</script>
<style lang="scss" scoped>
.YogaUniversity {
  margin-top: 50px !important;
  .banner {
    width: 100%;
    height: 200px;
    background: url(../assets/banner_university_img.jpeg) no-repeat 50%;
    background-size: cover;
    .banner_text {
      color: #fff;
      text-align: center;
      position: relative;
      top: 26%;
      line-height: 1;
      font-family: Helvetica Neue, Helvetica, Arial, Source Han Sans CN,
        Heiti SC, sans-serif;
      font-weight: 300;
      letter-spacing: 1px;
      .title {
        font-size: 35px;
        margin: 0 15px 15px;
        line-height: 1.2;
        font-weight: 400;
        letter-spacing: 2px;
      }
      .description {
        font-size: 16px;
      }
    }
  }
}
</style>
