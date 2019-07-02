<template>
  <div>
    <!-- 头部 -->
    <HometThead v-bind:headnames="headnames"/>
    <div class="header">
      <!-- <mt-header title="我的聚美" :style="{'fontsize': '20px'}">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>-->
    </div>
    <!-- 人头 -->
    <div class="user-unlogin">
      <div class="noportrait"></div>
      <div v-if="!this.$store.state.admin_on">
        <span class="res">注册</span>
        <span class="login" @click="toLogin()">登录</span>
      </div>
      <div class="admin_on" v-if="this.$store.state.admin_on">
        <span v-text="this.$cookieStore.getCookie( 'name')">与神对话1994</span>
        <span @click="quit()">退出</span>
      </div>
    </div>
    <!-- 我的订单 -->
    <div class="order block">
      <div class="block-title">
        <i class="block-title-icon myorder"></i>
        我的订单
        <a href="javascript:;" class="block-title-nav">
          <span>查看我的全部订单</span>
          <i class="arrow-right"></i>
        </a>
      </div>
      <div class="block-content">
        <a class="block-item" href="javascript:;">
          <i class="unpaid"></i>
          <span>待付款</span>
        </a>
        <a class="block-item" href="javascript:;">
          <i class="unconfirm"></i>
          <span>待收货</span>
        </a>
        <a class="block-item" href="javascript:;">
          <i class="uncomment"></i>
          <span>待评价</span>
        </a>
        <a class="block-item" href="javascript:;">
          <i class="refund"></i>
          <span>退货/退款</span>
        </a>
      </div>
    </div>
    <!-- 我的订单 -->
    <div class="fund block">
      <div class="block-title">
        <i class="block-title-icon myfund"></i>
        我的资产
      </div>
      <div class="block-content">
        <a class="block-item" href="javascript:;" v-for="(item,index) in orderlist " :key="index">
          <div class="value"></div>
          <span v-text="item">现金券</span>
        </a>
        <!-- <a class="block-item" href="javascript:;">
          <div class="value"></div>
          <span>红包</span>
        </a>
        <a class="block-item" href="javascript:;">
          <div class="value"></div>
          <span>聚美余额</span>
        </a>
        <a class="block-item" href="javascript:;">
          <div class="value"></div>
          <span>礼品卡</span>
        </a>-->
      </div>
      <!-- 售后服务 -->
      <div class="block list">
        <a class="list-item" href="javascript:;" v-for="(item,index) in datalist" :key="index">
          <i class="list-item-icon" :class="item.listIconName"></i>
          <span v-text="item.listItemName"></span>
          <i class="arrow-right"></i>
        </a>
      </div>
    </div>
    <!-- 客服热线 -->
    <div class="hint" style="padding-bottom:2rem">
      客服热线400-123-8888 (8:00-22:00)
      <br>拨打前请记录您的UID 0
    </div>
  </div>
</template>

<script>
import HometThead from "@/components/HometThead";
export default {
  name: "home",
  components: {
    HometThead
  },
  data() {
    return {
      headnames: "我的聚美",
      orderlist: ["我的资产", "现金券", "红包", "聚美余额", "礼品卡"],
      datalist: [
        {
          listItemName: "售后服务",
          listIconName: "rmaservice"
        },
        {
          listItemName: "意见反馈",
          listIconName: "feedback"
        },
        {
          listItemName: "收货地址",
          listIconName: "address"
        },
        {
          listItemName: "退出登录",
          listIconName: "logout"
        },
        {
          listItemName: "400-123-8888",
          listIconName: "tel"
        }
      ],
      itemIcon: true,
      itemIcon2: true
    };
  },
  methods: {
    toLogin() {
      this.$router.push("/Login");
    },
    quit(){
      this.$store.state.admin_on = false;
      console.log(this.$store.state.admin_on);
      this.$router.push('/Login');
    }
  },
  mounted() {
    console.log(this.$cookieStore.getCookie("name"));
    console.log(this.$store.state.admin_on);
    this.a_name = this.$cookieStore.getCookie("name");
  }
};
</script>

<style lang="scss" scoped>
i.feedback {
  background-image: url(https://f5.jmstatic.com/static_account/dist/v1.0.155018/images/mobile_usercenter/myjumei/feedback.png);
}
i.address {
  background-image: url(https://f5.jmstatic.com/static_account/dist/v1.0.155018/images/mobile_usercenter/myjumei/address.png);
}
i.feedback {
  background-image: url(https://f5.jmstatic.com/static_account/dist/v1.0.155018/images/mobile_usercenter/myjumei/address.png);
}
i.logout {
  background-image: url(https://f5.jmstatic.com/static_account/dist/v1.0.155018/images/mobile_usercenter/myjumei/logout.png);
}
i.tel {
  background-image: url(https://f5.jmstatic.com/static_account/dist/v1.0.155018/images/mobile_usercenter/myjumei/tel.png);
}
.header {
  background: pink;
}
.user-unlogin {
  background: #fd465f;
  padding-top: 20px;
  span {
    line-height: 25px;
    // width: 50%;
    color: #fff;
    font-weight: 700;
    font-size: 18px;
    text-decoration: none;
    display: inline-block;
    text-align: center;
    width: 130px;
    margin: 10px 20px;
  }
}
.noportrait {
  background-image: url(https://f0.jmstatic.com/static_account/dist/v1.0.155018/images/mobile_usercenter/myjumei/noportrait.png);
  width: 60px;
  height: 60px;
  background-size: 60px;
  margin: auto auto;
  margin: 10px auto;
}
.user-unlogin .operation {
  padding: 10px;
  width: 200px;
  margin: auto;
  display: flex;
}
.res {
  border-right: 1px solid #fff;
  padding-left: 33px;
}
.user-unlogin .login {
  margin-left: 0px;
}
.block {
  background: #fff;
  margin-top: 12px;
}
.block-title {
  padding-left: 8px;
  border-bottom: 1px solid #eaeaea;
  height: 34px;
  line-height: 34px;
  font-size: 13px;
}
i.unpaid {
  background-image: url(https://f5.jmstatic.com/static_account/dist/v1.0.155018/images/mobile_usercenter/myjumei/unpaid.png);
}
i.unconfirm {
  background-image: url(https://f5.jmstatic.com/static_account/dist/v1.0.155018/images/mobile_usercenter/myjumei/unpaid.png);
}
i.uncomment {
  background-image: url(https://f5.jmstatic.com/static_account/dist/v1.0.155018/images/mobile_usercenter/myjumei/uncomment.png);
}

i.refund {
  background-image: url(https://f5.jmstatic.com/static_account/dist/v1.0.155018/images/mobile_usercenter/myjumei/refund.png);
}

i.block-title-icon {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  background-size: 20px;
  margin-right: 10px;
}
i.myorder {
  background-image: url(https://f5.jmstatic.com/static_account/dist/v1.0.155018/images/mobile_usercenter/myjumei/myorder.png);
}
.block-title {
  line-height: 34px;
  font-size: 13px;
}
.block-title-nav {
  float: right;
  text-decoration: none;
  color: #999;
  font-size: 12px;
  margin-right: 5px;
}
.block-title-nav {
  color: #999;
  font-size: 12px;
}
i.arrow-right {
  background-image: url(https://f5.jmstatic.com/static_account/dist/v1.0.155018/images/mobile_usercenter/advance_bg.png);
  background-size: 20px;
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
}
.block-content,
.operation {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.fund .block-item,
.order .block-item {
  width: 76px;
  text-align: center;
  display: inline-block;
  margin: 0;
  padding: 10px 0;
  text-decoration: none;
  font-size: 12px;
  color: #666;
}
.block-item {
  width: 25% !important;
  height: 25% !important;
}
.order .block-item i {
  display: block;
  width: 24px;
  height: 24px;
  margin: 5px auto;
  background-size: 24px;
}
.fund .block-item,
.order .block-item {
  width: 76px;
  text-align: center;
  display: inline-block;
  margin: 0;
  padding: 10px 0;
  text-decoration: none;
  font-size: 12px;
  color: #666;
}
a:-webkit-any-link {
  cursor: pointer;
}
.block {
  background: #fff;
  margin-top: 12px;
}
.block-title {
  padding-left: 8px;
  border-bottom: 1px solid #eaeaea;
  height: 34px;
  line-height: 34px;
  font-size: 13px;
}
i.block-title-icon {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  background-size: 20px;
  margin-right: 10px;
}
.block-content,
.operation {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.fund .value {
  font-size: 16px;
  font-weight: 700;
  margin: 5px 0;
  color: #000;
}
.fund .block-item,
.order .block-item {
  width: 76px;
  text-align: center;
  display: inline-block;
  margin: 0;
  padding: 10px 0;
  text-decoration: none;
  font-size: 12px;
  color: #666;
}
i.myfund {
  background-image: url(https://f5.jmstatic.com/static_account/dist/v1.0.155018/images/mobile_usercenter/myjumei/myfund.png);
}
.block {
  background: #fff;
  margin-top: 12px;
}
.list-item {
  display: block;
  text-decoration: none;
  color: #333;
  padding-left: 8px;
  border-bottom: 1px solid #eaeaea;
  height: 34px;
  line-height: 34px;
  font-size: 13px;
}
i.list-item-icon {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  background-size: 20px;
  margin-right: 10px;
}
.list-item {
  display: block;
  text-decoration: none;
  color: #333;
  padding-left: 8px;
  border-bottom: 1px solid #eaeaea;
  height: 34px;
  line-height: 34px;
  font-size: 13px;
}
list-item .arrow-right {
  float: right;
  margin-top: 6px;
  margin-right: 6px;
}
i.arrow-right {
  background-image: url(https://f5.jmstatic.com/static_account/dist/v1.0.155018/images/mobile_usercenter/advance_bg.png);
  background-size: 20px;
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
}
i.rmaservice {
  background-image: url(https://f5.jmstatic.com/static_account/dist/v1.0.155018/images/mobile_usercenter/myjumei/rmaservice.png);
}
.list-item .arrow-right {
  float: right;
  margin-top: 6px;
  margin-right: 6px;
}
.hint {
  color: #999;
  font-size: 11px;
  margin: 15px;
  line-height: 15px;
}

.admin_on{
  width: 100%;
  margin: 0 auto;
  text-align: center;
  span{
    display: inline-block;
  }
}
</style>