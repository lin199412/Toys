<template>
  <div class="YogaPractice">
    <section class="banner">
      <div class="banner_text">
        <h1 class="title">瑜伽练习</h1>
        <p class="description">YOGA MAKES EVERYTHING EASIER</p>
      </div>
    </section>
    <Pbasic/>
    <Mfooter/>
    <Aloading/>
    <!-- <h1>YogaPractice</h1>
    <p>god is here</p>-->
  </div>
</template>

<script>
import Pbasic from '@/components/Pbasic.vue'
import Mfooter from '@/components/Mfooter.vue'
import Aloading from '@/components/Aloading.vue'

export default {
  components: {
    Pbasic,
    Mfooter,
    Aloading
  }
}
</script>

<style lang="scss" scoped>
.YogaPractice {
  margin-top: 50px !important;
  .banner {
    width: 100%;
    height: 200px;
    background: url(../assets/banner_practice_img.jpeg) no-repeat 50%;
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
