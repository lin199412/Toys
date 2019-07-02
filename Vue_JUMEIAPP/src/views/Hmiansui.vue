<template>
  <div class="home">
    <!-- <h1>极速免税店</h1> -->
    <HometThead v-bind:headnames='headnames'/>
    <HomeSearch/>
    <HomeNav/>
    <HmianshuiIcons/>
    <Hmianshuilist/>
    <Loading/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeNav from '@/components/HomeNav.vue'
import HometThead from '@/components/HometThead.vue'
import HomeSearch from '@/components/HomeSearch.vue'
import HmianshuiIcons from '@/components/HmianshuiIcons.vue'
import Hmianshuilist from '@/components/Hmianshuilist.vue'
import Loading from '@/components/Loading.vue'

export default {
  name: 'home',
  components: {
    HomeNav,
    HometThead,
    HomeSearch,
    HmianshuiIcons,
    Hmianshuilist,
    Loading
  },
  data () {
    return {
      headnames: '极速免税店'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
