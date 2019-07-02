<template>
  <section class="xxhead">
    <i class="icon_back" @click="goBack()"></i>
    <!-- <router-link class="icon_back" to="/"></router-link> -->
    <span class="head_name" v-text="headnames"></span>
    <router-link class="icon_home" to="/" @click.native="tohome()"></router-link>
  </section>
</template>
<script>
export default {
  props: {
    headnames: {
      type: String,
      default: 'hello god'
    }
  },
  methods: {
    goBack () {
      console.log('1212');
      this.$store.state.showFoot = true;
      this.$router.go(-1);
    },
    tohome() {
      this.$store.state.showFoot = true;
    }
  },
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.xxhead {
  width: 100%;
  height: 45px;
  // background: #ddd;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .icon_back {
    display: inline-block;
    width: 8px;
    height: 16px;
    background: url(http://a5.jmstatic.com/f8f6fcf77a736300/left_arrow.png)
      no-repeat;
  }
  .head_name {
    text-align: center;
    font-size: 16px;
    color: #333;
    width: 70%;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
  .icon_home {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url(http://a5.jmstatic.com/cf4cd6f2fe742a74/home.png) no-repeat;
  }
}
</style>
