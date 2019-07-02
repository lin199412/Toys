<template>
  <div id="app">
    <router-view/>
    <FootNav/>
  </div>
</template>
<script>
import FootNav from '@/components/FootNav.vue'

export default {
  components: {
    FootNav
  }
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
</style>
