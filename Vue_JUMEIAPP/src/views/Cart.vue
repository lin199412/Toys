<template>
  <div class="page bg-content" style="height:1400px">
    <!-- <Cheader/> -->
    <HometThead v-bind:headnames="headnames"/>
    <!--  -->
    <Cnotcart v-if="!this.$store.state.admin_on"/>
    <Cyescart v-if="this.$store.state.admin_on"/>
  </div>
</template>

<script>
import Cheader from "@/components/Cheader";
import Cnotcart from "@/components/CnotCart";
import Cyescart from "@/components/CyesCart";
import HometThead from "@/components/HometThead";

export default {
  name: "home",
  data(){
    return{
    isshow: false,
    headnames: "购物车"
    }
  },
  components: {
    Cheader,
    Cnotcart,
    Cyescart,
    HometThead
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
</style>
