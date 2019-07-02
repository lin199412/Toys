<template>
  <section class="login_box">
    <HometThead v-bind:headnames="headnames"/>
    <div class="login_form">
      <p class="login_head">
        <span>使用聚美帐号登录</span>
      </p>
      <p class="username">
        <input id="user_count" type="text" placeholder="已注册的手机号/邮箱／用户名">
      </p>
      <p class="password">
        <input type="password" placeholder="6-16位登陆密码" name id>
      </p>
      <p class="login_btn">
        <input type="button" value="登录" @click="toMine()">
      </p>
    </div>
  </section>
</template>
<script>
import HometThead from "@/components/HometThead.vue";
export default {
  components: {
    HometThead
  },
  data() {
    return {
      headnames: "登录"
    };
  },
  methods: {
      toMine() {
      var input_name = document.querySelector('#user_count').value;
      console.log(input_name);
      this.$cookieStore.setCookie( 'name' , input_name);
      var username = this.$cookieStore.getCookie( 'name');
      console.log(username);
      this.$store.state.admin_on = true;
      console.log(this.$store.state.admin_on);
      this.$router.push('/Mine');
    }
  },
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.login_box {
  color: #999;
  .login_form {
    width: 80%;
    text-align: center;
    margin: 0 auto;
    p {
      font-size: 14px;
    }
    .login_head {
      padding: 0 10%;
      span {
        padding: 0px 5px;
        background: #fff;
      }
      height: 58px;
      line-height: 58px;
      position: relative;
      &::before {
        content: "";
        font-size: 0px;
        border-bottom: solid 1px #f5f5f5;
        position: absolute;
        top: 29px;
        left: 0px;
        width: 100%;
        z-index: -1;
      }
    }
    .username,
    .password {
      width: 100%;
      background: #f5f5f5;
      border-radius: 20px;
      width: 100%;
      height: 36px;
      font-size: 14px;
      color: #999999;
      text-align: left;
      text-indent: 21px;
      margin-bottom: 20px;
      input {
        background: #f5f5f5;
        width: 80%;
        height: 36px;
        font-size: 14px;
        color: #999999;
        text-align: left;
        text-indent: 21px;
        border: none;
        outline: none;
      }
    }
    .login_btn {
      width: 100%;
      background: #feb2c5 !important;
      border-radius: 20px;
      width: 100%;
      height: 36px;
      font-size: 14px;
      color: #999999;
      text-align: center;
      text-indent: 21px;
      margin-bottom: 20px;
      input {
        background: #feb2c5 !important;
        font-size: 16px;
        border: none;
        color: #fff;
        line-height: 36px;
      }
    }
  }
}
</style>
