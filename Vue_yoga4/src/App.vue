<template>
  <div id="app">
    <Mheader/>
    <router-view/>
  </div>
</template>

<script>
import Mheader from '@/components/Mheader.vue'

export default {
  components: {
    Mheader
  }
}
</script>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}
#app{
  // position: relative;
}
</style>
