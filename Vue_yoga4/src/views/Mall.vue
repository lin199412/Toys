<template>
  <div class="Mall">
    <section class="banner">
      <div class="banner_text">
        <h1 class="title">瑜伽装备</h1>
        <p class="description">最专业瑜伽装备 只给爱瑜伽的你</p>
      </div>
    </section>
    <Malllist/>
    <Mfooter/>
    <Aloading/>
  </div>
</template>

<script>
import Mfooter from '@/components/Mfooter.vue'
import Malllist from '@/components/Malllist.vue'
import Aloading from '@/components/Aloading.vue'

export default {
  components: {
    Mfooter,
    Malllist,
    Aloading
  }
}
</script>

<style lang="scss" scoped>
.Mall {
  margin-top: 50px !important;
  .banner {
    width: 100%;
    height: 200px;
    background: url(../assets/banner_mall_img.jpeg) no-repeat 50%;
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
