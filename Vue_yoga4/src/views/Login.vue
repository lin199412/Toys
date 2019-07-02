<template>
  <div class="Login_box">
    <!-- <h1>Login</h1>
    <p>god is here</p>-->
    <div class="cont">
      <p class="option">
        <span v-on:click="btn_show()" v-bind:class="{active:showborder}">登录</span>
        <span v-on:click="btn_show()" v-bind:class="{active:!showborder}">注册</span>
      </p>
      <!-- 登录框 -->
      <ul v-if="showborder" class="login input_box" >
        <li>
          <i class="phone"></i>
          <input id="admin_phone" type="text" placeholder="手机号">
        </li>
        <li>
          <i class="psw"></i>
          <input type="password" placeholder="密码">
        </li>
        <li>
          <input @click="login_it" class="btn_login" type="button" value="登录">
        </li>
      </ul>
      <!-- 注册框 -->
      <ul v-else class="register input_box">
        <li>
          <i class="phone"></i>
          <input type="text" placeholder="手机号">
        </li>
        <li class="code">
          <i class="security"></i>
          <input class="txt" type="text" placeholder="验证码">
          <input class="btn" type="button" value="发送验证码">
        </li>
        <li>
          <i class="psw"></i>
          <input type="password" placeholder="密码 6-12位数字、字母、下划线">
        </li>
        <li>
          <input class="btn_login" type="button" value="注册">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showborder: true
    }
  },
  methods: {
    // 开关，控制汉堡按钮的展开页
    btn_show () {
      this.showborder = !this.showborder
    },
    // 设置和打印cookie
    login_it () {
      var input_name = document.querySelector('#admin_phone').value
      console.log(input_name)
      this.$cookieStore.setCookie('name', input_name)
      var username = this.$cookieStore.getCookie('name')
      console.log(username)
      this.$store.state.admin_on++
      console.log(this.$store.state.admin_on)
      this.$router.replace('/Admins')
    }
  },
  mounted () {
    console.log(this.$store.state.admin_on)
  }
}
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
body {
  line-height: 1;
  font-size: 14px;
  font-family: Helvetica Neue, Helvetica, Arial, Source Han Sans CN, Heiti SC,
    sans-serif;
  font-weight: 300;
  letter-spacing: 1px;
}
.Login_box {
  margin-top: 50px !important;
  background: #ebedf5;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 98;
  .cont {
    padding: 0px;
    width: 300px;
    z-index: 98;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .option {
      font-size: 20px;
      margin-bottom: 25px;
      span {
        padding-bottom: 5px;
        display: inline-block;
        color: #333;
        margin-right: 10px;
        font-size: 20px;
      }
    }
    .input_box {
      li {
        width: 100%;
        border: 1px solid #979797;
        margin-bottom: 20px;
        position: relative;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        .phone {
          position: absolute;
          top: 10px;
          left: 10px;
          display: inline-block;
          width: 20px;
          height: 30px;
          background-image: url(../assets/login_icon_phone.png);
          background-size: 20px 30px;
        }
        .psw {
          position: absolute;
          top: 10px;
          left: 10px;
          display: inline-block;
          width: 23px;
          height: 28px;
          background-image: url(../assets/login_icon_psw.png);
          background-size: 23px 28px;
        }
        input {
          font-size: 14px;
          box-sizing: border-box;
          width: 100%;
          height: 45px;
          border: none;
          text-indent: 45px;
          outline: none;
          padding: 0;
          -webkit-appearance: none;
        }
        .btn_login {
          display: block;
          width: 100%;
          height: 47px;
          border: 1px solid #7d9ffc;
          background: #7d9ffc;
          color: #fff;
          font-size: 14px;
          text-indent: 0px;
        }
      }
      .code {
        border: none;
        height: 47px;
        .security {
          position: absolute;
          top: 10px;
          left: 10px;
          display: inline-block;
          width: 23px;
          height: 28px;
          background-image: url(../assets/login_icon_psw.png);
          background-size: 23px 28px;
        }
        .txt {
          width: 60%;
          height: 47px;
          float: left;
        }
        .btn {
          width: 30%;
          height: 47px;
          float: right;
          text-indent: 0px;
          background: #e5e5e5;
          border: 1px solid #c8c8c8;
          color: #999;
          box-sizing: border-box;
        }
      }
    }
  }
}

span.active {
  border-bottom: 3px solid #333;
}
</style>
