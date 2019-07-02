<template>
  <div id="mheader">
    <div class="header_box" @click="changeStyle()">
      <img class="logo white" v-if="btnLogo" src="../assets/logo_yoga1.png" alt>
      <img class="logo gray" v-else src="../assets/logo_yoga2.png" alt>
      <p class="navbar_toggle">
        <span class="icon_bar" v-bind:class="btnLogo?'light':''"></span>
        <span class="icon_bar" v-bind:class="btnLogo?'light':''"></span>
        <span class="icon_bar" v-bind:class="btnLogo?'light':''"></span>
      </p>
    </div>
    <transition name="bounce">
      <div class="mobile_nav" v-show="btnLogo">
        <ul>
          <li>
            <!-- <a href>首页</a> -->
            <router-link to="/" active-class="active1" exact @click.native="changeStyle()">首页</router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'YogaPractice'}"
              active-class="active1"
              @click.native="changeStyle()"
            >瑜伽练习</router-link>
            <!-- <a href>瑜伽练习</a> -->
          </li>
          <li>
            <router-link
              :to="{ name: 'YogaUniversity'}"
              active-class="active1"
              @click.native="changeStyle()"
            >瑜乐大学</router-link>
            <!-- <a href>瑜乐大学</a> -->
          </li>
          <li>
            <router-link
              :to="{ name: 'Teacher'}"
              active-class="active1"
              @click.native="changeStyle()"
            >合作名师</router-link>
            <!-- <a href>合作名师</a> -->
          </li>
          <li>
            <router-link
              :to="{ name: 'Mall'}"
              active-class="active1"
              @click.native="changeStyle()"
            >装备</router-link>
            <!-- <a href>装备</a> -->
          </li>
          <!-- v-bind:class="this.showLogin?'disappear':''" -->
          <li v-if="this.showLogin">
            <router-link
              :to="{ name: 'Login'}"
              active-class="active1"
              @click.native="changeStyle()"
              v-if="this.showLogin"
            >登录 | 注册</router-link>
            <!-- <a href>登录 | 注册</a> -->
          </li>
          <li>
            <router-link
              :to="{ name: 'Admins'}"
              active-class="active1"
              @click.native="changeStyle()"
              v-if="this.showAdmin"
            >个人主页</router-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'mheader',
  showLogin: true,
  showAdmin: false,
  data () {
    return {
      btnLogo: false
    }
  },
  methods: {
    changeStyle () {
      this.btnLogo = !this.btnLogo

      if (this.$store.state.admin_on) {
        this.showLogin = false
        this.showAdmin = true
      } else {
        this.showLogin = true
        this.showAdmin = false
      }
    }
  },
  created () {
    console.log(this.$store.state.admin_on)
    if (this.$store.state.admin_on) {
      this.showLogin = false
      this.showAdmin = true
    } else {
      this.showLogin = true
      this.showAdmin = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}
#mheader {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  background: #fff;
  padding: 14px 0;
  border-bottom: 1px solid #f1f1f1;
  width: 100%;
  .header_box {
    width: 100%;
    height: 27px;
    position: relative;
    z-index: 999;
    .logo {
      position: absolute;
      left: 15px;
      top: 0;
      height: 27px;
    }
    .navbar_toggle {
      position: absolute;
      top: 0;
      right: 15px;
      .icon_bar {
        display: block;
        width: 22px;
        height: 2px;
        border-radius: 1px;
        background: #000;
        margin-top: 4px;
      }
      .icon_bar.light {
        background: #fff;
      }
    }
  }
  .mobile_nav {
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    position: fixed !important;
    top: 0;
    left: 0;
    z-index: 99;
    display: block;
    ul {
      width: 100%;
      position: absolute;
      top: 50%;
      margin-top: -160px;
      text-align: center;
      list-style: none;
      li {
        float: none !important;
        padding: 5px 0;
        line-height: 45px;
        font-size: 20px;
        a {
          color: #fff;
          text-decoration: none;
          &.active1 {
            padding-bottom: 5px;
            border-bottom: 4px solid #fff;
          }
        }
      }
    }
  }
}

.bounce-enter-active {
  animation: slideInLeft 0.5s;
}
.bounce-leave-active {
  animation: slideInLeft 0.5s reverse;
}

@-webkit-keyframes slideInLeft {
  0% {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}
</style>
