<template>
  <section class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            src="../assets/qs_banner_img1.jpeg"
            alt
          >
        </div>
        <div class="swiper-slide">
          <img
            src="../assets/qs_banner_img2.jpeg"
            alt
          >
        </div>
        <div class="swiper-slide">
          <img
            src="../assets/qs_banner_img3.jpeg"
            alt
          >
        </div>
        <!-- <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>-->
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </section>
</template>
<script>
import '../assets/swiper.min.css'
import Swiper from 'swiper'
export default {
  mounted () {
    var mySwiper = new Swiper('.swiper-container', {
      // direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项
      autoplay: true,

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.banner {
  width: 100%;
  text-align: center;
  img {
    width: 100%;
  }
}
</style>
