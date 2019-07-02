<template>
  <div id="foot_nav" v-show="this.$store.state.showFoot">
    <div class="nav_box">
      <router-link class="pic_home" to="/" active-class="active" exact>首页</router-link>
      <router-link class="pic_group" to="/Group" active-class="active">拼团</router-link>
      <router-link class="pic_cart" to="/Cart" active-class="active">购物车</router-link>
      <router-link class="pic_mine" to="/Mine" active-class="active">我的</router-link>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
}
#foot_nav {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgb(255, 255, 255);
  border-top: 1px solid rgb(238, 238, 238);
  .nav_box {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    a {
      width: 20%;
      height: 50px;
      background: #bcbc;
      text-align: center;
      background: url(../assets/foot_nav_icon_group.png) no-repeat;
      background-position: center 10px;
      box-sizing: border-box;
      padding-top: 30px;
      color: rgb(153, 153, 153);
    }
    .pic_home {
      background: url(../assets/foot_nav_icon_home.png) no-repeat;
      background-position: center 10px;
      &.active {
        background: url(../assets/foot_nav_icon_home_a.png) no-repeat;
        background-position: center 10px;
        color: rgb(254, 64, 112);
      }
    }
    .pic_group {
      background: url(../assets/foot_nav_icon_group.png) no-repeat;
      background-position: center 10px;
      &.active {
        background: url(../assets/foot_nav_icon_group_a.png) no-repeat;
        background-position: center 10px;
        color: rgb(254, 64, 112);
      }
    }
    .pic_cart {
      background: url(../assets/foot_nav_icon_cart.png) no-repeat;
      background-position: center 10px;
      &.active {
        background: url(../assets/foot_nav_icon_cart_a.png) no-repeat;
        background-position: center 10px;
        color: rgb(254, 64, 112);
      }
    }
    .pic_mine {
      background: url(../assets/foot_nav_icon_mine.png) no-repeat;
      background-position: center 10px;
      &.active {
        background: url(../assets/foot_nav_icon_mine_a.png) no-repeat;
        background-position: center 10px;
        color: rgb(254, 64, 112);
      }
    }
  }
}
</style>
