<template>
  <div class="home">
    <!-- <Mheader/> -->
    <Mbanner/>
    <MpartOne/>
    <MpartTwo/>
    <MpartThree/>
    <MpartFour/>
    <Mcomments/>
    <MpartDownload/>
    <Mfooter/>
    <Aloading/>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import Mheader from '@/components/Mheader.vue'
import Mbanner from '@/components/Mbanner.vue'
import MpartOne from '@/components/MpartOne.vue'
import MpartTwo from '@/components/MpartTwo.vue'
import MpartThree from '@/components/MpartThree.vue'
import MpartFour from '@/components/MpartFour.vue'
import Mcomments from '@/components/Mcomments.vue'
import MpartDownload from '@/components/MpartDownload.vue'
import Mfooter from '@/components/Mfooter.vue'
import Aloading from '@/components/Aloading.vue'

export default {
  name: 'home',
  components: {
    // Mheader,
    Mbanner,
    MpartOne,
    MpartTwo,
    MpartThree,
    MpartFour,
    Mcomments,
    MpartDownload,
    Mfooter,
    Aloading
  }
}
</script>

<style lang="scss" scoped>
.home {
  margin-top: 50px !important;
}
</style>
