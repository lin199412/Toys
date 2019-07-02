<template>
  <div class="Teacher">
    <section class="banner">
      <div class="banner_text">
        <h1 class="title">合作名师</h1>
        <p class="description">国内外瑜伽大咖汇聚 最专业教学体验</p>
      </div>
    </section>
    <Tteachers/>
    <Mfooter/>
  </div>
</template>

<script>
import Mfooter from '@/components/Mfooter.vue'
import Tteachers from '@/components/Tteachers.vue'

export default {
  components: {
    Mfooter,
    Tteachers
  }
}
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
.Teacher {
  margin-top: 50px !important;
  .banner {
    width: 100%;
    height: 200px;
    background: url(../assets/banner_teacher_img.jpeg) no-repeat 50%;
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
