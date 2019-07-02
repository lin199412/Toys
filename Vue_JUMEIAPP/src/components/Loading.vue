<template>
  <section class="loading" v-if="this.$store.state.showLoading">
    <div class="img_box">
      <!-- <img src="../assets/timg.gif" alt=""> -->
      <img src="../assets/loading4.gif" alt>

    </div>
  </section>
</template>
<script>
export default {
//   mounted() {
//     this.$store.state.showLoading = false;
//   }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.loading {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
//   background: #bbb;
  opacity: 0.7;
  z-index: 999;
  display: flex;

  .img_box {
    width: 50%;
    margin: 0 auto;
    align-self: center;
    img {
      width: 100%;
    }
  }
}
</style>
