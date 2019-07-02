<template>
  <!-- <h2>URT教培</h2> -->
  <section class="training">
    <div class="cont">
      <p class="img_box">
        <img src="http://qiniucdn.dailyyoga.com.cn/88/6d/886dc90c8a3890639e3cc5395843230c.jpeg" alt>
      </p>
      <p class="img_box">
        <img src="http://qiniucdn.dailyyoga.com.cn/67/a0/67a0859d01d659188b8b4d9883089652.jpeg" alt>
      </p>
      <p class="img_box">
        <img src="http://qiniucdn.dailyyoga.com.cn/6a/82/6a8214aad95566b58457ef6a21d52ba8.jpeg" alt>
      </p>
    </div>
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

.training {
  width: 90%;
  padding: 0 10px;
  margin: 0 auto;
  max-width: 1024px;
  .cont {
    width: 100%;
    margin: 0 auto;
    max-width: 1024px;
    .img_box {
        width: 100%;
      img {
        display: block;
        max-width: 100%;
      }
    }
  }
}
</style>
