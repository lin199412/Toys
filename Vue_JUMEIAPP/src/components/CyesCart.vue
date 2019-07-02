<template>
  <div style="background: #f5f5f5;">
    <div>
      <div class="count-down">
        <div class="clock-msg">商品数量有限，请尽快结算</div>
      </div>
      <div class="groups">
        <div>

          <div class="group" v-for="(sp,index) in shop" :key="sp.uid">
            <div class="group-header">
              <!-- 单商家商品全选 -->
              <span :class="sp.shopShow?'check-box-checked':'check-box-un-checked'" @click="btnShop(sp,index)"></span>

              <!-- 商家名称 -->
              <div class="group-title" v-text="sp.shopName"></div>

              <!-- 点击选项 -->
              <span class="arrow-wrapper">
                <span></span>
              </span>
            </div>
            <div class="group-info" style="display: none;">
              <div> </div>
              <div class="group-info-bottom"> </div>
            </div>
            <div class="group-content">

              <!-- 商品列表 -->
              <div class="item" v-for="(item,index) in cartList" :key="index" v-if="item.merchant==sp.shopName">
                <!-- 商品单选 "{item.active ? 'check-box-checked':'check-box-un-checked'}"-->
                <span @click="topLight(index,item)" :class="item.active?'check-box-checked':'check-box-un-checked'"></span>
                <div class="item-content">
                  <div class="img-title">
                    <div class="img-wrap">
                      <!-- 图片 -->
                      <img :src="item.imgUrl" alt="Hold live 幽兰之情唇釉 一盒让李佳琦都说OMG的唇釉">
                    </div>

                    <div class="text-wrap" v-show="!item.compile">
                      <!-- 商品名称 -->
                      <span class="title" v-text="item.title"></span>
                      <div class="sub-title-1">
                        <!-- 型号 -->
                        <span v-text="item.attr_desc"></span>
                        <!-- 数量 -->
                        <span v-text="`x${item.quantity}`"></span>
                      </div>
                      <div class="price-edit">
                        <!-- 价格 -->
                        <span class="price" v-text="item.item_price"></span>
                        <span class="edit" @click="redact(index)">编辑</span>
                      </div>
                    </div>

                    <div class="text-wrap" v-show="item.compile">
                      <!-- 价格 -->
                      <span class="title" v-text="item.title"></span>
                      <div class="number-editor">
                        <span class="decrease" @click="subNum(index)"></span>
                        <!-- 数量 -->
                        <span v-text="item.quantity"></span>
                        <span class="increase" @click="addNum(index)"></span>
                      </div>
                      <div class="price-edit">
                        <!-- 价格 -->
                        <span class="price editing" v-text="item.item_price"></span>
                        <div class="actions">
                          <span class="delete" @click="onDel(index)">删除</span>
                          <span class="gap-line"></span>
                          <span class="action-finish" @click="redact(index)">完成</span>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div class="discount-detail">
                    <div class="discount-item">
                      <span>满减</span>
                      <div class="promo-rule">
                        <span>满139元减10元,满199元减15元</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="group-tail red">
              <div class="icon">免</div>
              <span>已享新用户满39元包邮</span>
            </div>
          </div>
        </div>
      </div>
      <div class="over-lay" style="display: none;">
        <div class="dialog">
          <div class="dialog-header">
            <span></span>
            <span class="dialog-close">
              <span></span>
            </span>
          </div>
          <div class="dialog-content"> </div>
          <div class="dialog-tail"></div>
        </div>
      </div>
    </div>
    <div class="submit-bottom submit-bottom-padding">
      <div class="sub-info">
        <span class="" @click="select()" :class="isshow?'check-box-checked':'check-box-un-checked'"></span>
        <span class="all-check-text">全选</span>
        <div class="summary">
          <div>
            <span>合计</span>
            <span class="red">￥{{allPrice()}}</span>
          </div>
        </div>
      </div>
      <div class="submit-btn go-to-submit"> 去结算
        <span>(3)</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // compile: false,
      isshow: true,
      // price:0,
      shop: [
        {
          shopName: "国货彩妆发货",
          uid: "001"
        },
        {
          shopName: "达信永金发货",
          uid: "002"
        }
      ],
      cartList: [
        {
          merchant: "国货彩妆发货",
          title: " Hold live 幽兰之情唇釉 一盒让李佳琦都说OMG的唇釉 ",
          imgUrl:
            "https://p1.jmstatic.com//product/198/395/df4891968198395923_std/s_df4891968198395923_200_200.jpg",
          attr_desc: "5色 常规",
          quantity: "1",
          item_price: "79"
          // compile: false
        },
        {
          merchant: "国货彩妆发货",
          title: " 素萃 颈部护理原液6瓶装 和颈纹说再见 ",
          imgUrl:
            "https://p2.jmstatic.com//product/197/947/df4651250197947824_std/s_df4651250197947824_200_200.jpg",
          attr_desc: "颈部护理原液 10g*6",
          quantity: "1",
          item_price: "68"
          // compile: false
        },
        {
          merchant: "达信永金发货",
          title: " 朵拉朵尚多肽修护电动按摩眼霜20g ",
          imgUrl:
            "https://p0.jmstatic.com//product/198/411/df4900898198411175_std/s_df4900898198411175_200_200.jpg",
          attr_desc: "电动按摩眼霜20g",
          quantity: "1",
          item_price: "89"
          // compile: false
        }
      ],
      indexput: 0
    };
  },
  created() {
    // this.cartList.forEach(element => {
    //   element.active = true;
    // });
    this.cartList.forEach(item => this.$set(item, "compile", false));
    this.cartList.forEach(item => this.$set(item, "active", true));
    this.shop.forEach(item => this.$set(item, "shopShow", true));
    // this.$set(this.cartList, 'active', true)
    // console.log(this.cartList[0]);
  },
  // mounted(){
  //   this.cartList.forEach(item => this.$set(this.cartList, 'active',true));
  // },
  methods: {
    // 全选按钮
    select() {
      this.isshow = !this.isshow;
      this.cartList.forEach(item => this.$set(item, "active", this.isshow));
      this.shop.forEach(s => (s.shopShow = this.isshow));
    },
    // 点击编辑商品数量和完成
    redact(index) {
      // this.indexput = index
      // this.compile = !this.compile
      this.cartList[index].compile = !this.cartList[index].compile;
      console.log(this.cartList[index].compile);
    },
    // 商品单个商品
    onDel(index) {
      this.indexput = index;
      console.log(index, this.indexput);
      let a = confirm("您确定不要我了吗？");
      if (a) {
        this.cartList.splice(index, 1);
      }
    },
    // 商品数量加一
    addNum(index) {
      if (this.cartList[index].quantity < 8) {
        this.cartList[index].quantity++;
      }
    },
    // 商品数量减一
    subNum(index) {
      if (this.cartList[index].quantity > 1) {
        this.cartList[index].quantity--;
      }
    },
    // 控制单商品高亮
    topLight(index, item) {
      // 控制当前商品的高亮
      this.cartList[index].active = !this.cartList[index].active;
      // console.log(this.cartList[index].active);
      // console.log(this.cartList[0])
      // 反向控制全选按钮的高亮
      var count = 0;
      this.cartList.forEach(function(s) {
        if (s.active) {
          count++;
        }
      });
      if (count !== this.cartList.length) {
        this.isshow = false;
      } else {
        this.isshow = true;
      }
      // 反向控制店铺全选的高亮
      var shop_count = 0;
      var shop_count_a = 0;
      this.cartList.forEach(function(s) {
        if (s.merchant == item.merchant) {
          shop_count++;
        }
      });
      console.log(shop_count);
      this.cartList.forEach(function(s) {
        if (s.active == item.active && s.merchant == item.merchant) {
          shop_count_a++;
        }
      });
      console.log(shop_count_a);
      if (shop_count == shop_count_a) {
        this.shop.forEach(function(s) {
          if (s.shopName == item.merchant) {
            s.shopShow = item.active;
          }
        });
      }else{
        this.shop.forEach(function(s) {
          if (s.shopName == item.merchant) {
            s.shopShow = false;
          }
        });
      }
    },
    // 计算商品的总价
    allPrice() {
      var price = 0;
      this.cartList.forEach(element => {
        if (element.active) {
          // console.log(element);
          price += element.item_price * element.quantity;
        }
        // console.log(price);
      });
      return price;
    },
    btnShop(sp, index) {
      //控制店铺里面商品的高亮
      sp.shopShow = !sp.shopShow;
      this.cartList.forEach(element => {
        if (element.merchant == sp.shopName) {
          element.active = sp.shopShow;
        }
      });
      // 反向控制全选按钮的高亮
      var count = 0;
      this.cartList.forEach(function(s) {
        if (s.active) {
          count++;
        }
      });
      if (count !== this.cartList.length) {
        this.isshow = false;
      } else {
        this.isshow = true;
      }
    }
  }
};
</script>

<style scoped>
/* @charset "UTF-8";html {
    height: 100%;
    color: #000;
    background: #fff;
    overflow-y: scroll;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%
}

html * {
    outline: 0;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: transparent
}

body,html {
    font-family: sans-serif
}

body {
    min-height: 100%
}

article,aside,blockquote,body,button,code,dd,details,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,hr,input,legend,li,menu,nav,ol,p,pre,section,td,textarea,th,ul {
    margin: 0;
    padding: 0
}

input,select,textarea {
    font-size: 100%
}

input,textarea {
    -webkit-appearance: none
}

table {
    border-collapse: collapse;
    border-spacing: 0
}

fieldset,img {
    border: 0
}

abbr,acronym {
    border: 0;
    font-variant: normal
}

del {
    text-decoration: line-through
}

address,caption,cite,code,dfn,em,th,var {
    font-style: normal;
    font-weight: 500
}

ol,ul {
    list-style: none
}

caption,th {
    text-align: left
}

h1,h2,h3,h4,h5,h6 {
    font-size: 100%;
    font-weight: 500
}

q:after,q:before {
    content: ''
}

sub,sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline
}

sup {
    top: -.5em
}

sub {
    bottom: -.25em
}

a:active,a:hover,a:link,a:visited {
    text-decoration: none;
    color: inherit
}

a,ins {
    text-decoration: none
}

.flex {
    display: -ms-flexbox;
    display: flex;
    display: -webkit-flex
}

.flex-1 {
    -ms-flex: 1;
    flex: 1;
    -webkit-flex: 1
}

.flex-row {
    -ms-flex-direction: row;
    flex-direction: row
}

.flex-column {
    -ms-flex-direction: column;
    flex-direction: column
}

.flex-center {
    -ms-flex-align: center;
    align-items: center;
    -webkit-align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-justify-comtent: center
}

.flex-wrap {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap
}

.justify-center {
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-justify-content: center
}

.space-around {
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-justify-content: space-around
}

.space-between {
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-justify-content: space-between
}

.align-center {
    -ms-flex-align: center;
    align-items: center;
    -webkit-align-items: center
}

.align-start {
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-align-items: flex-start
}

.overflow-2-line {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden
}

.overflow-1-line {
    white-space: nowrap;
    text-overflow: ellipsis;
    -webkit-text-overflow: ellipsis;
    overflow: hidden
}

.bg-image-size {
    background-repeat: no-repeat;
    background-size: 100%
}

.bottom-nav {
    width: 23.4375rem;
    height: 3.0625rem;
    position: fixed;
    z-index: 1;
    left: 0;
    bottom: 0;
    text-align: center;
    box-sizing: border-box;
    line-height: normal
}

.bottom-nav a {
    display: inline-block;
    width: 5.2734rem;
    height: 3.0621rem;
    color: #999;
    background-repeat: no-repeat;
    background-position: center .35116rem;
    background-size: 1.4063rem 1.2539rem;
    box-sizing: border-box;
    padding-top: 1.7578rem;
    text-decoration: none;
    font-family: Arial,helvetica,"微软雅黑","Microsoft Yahei",sans-serif
}

.bottom-nav a.tabbar-coutuan,.bottom-nav a.tabbar-member {
    background-position: center .2578rem
}

.bottom-nav a.tabbar-cart {
    position: relative
}

.nav-cart-num {
    display: block;
    position: absolute;
    width: .8749rem;
    height: .8749rem;
    line-height: .8555rem;
    top: .2344rem;
    left: 50%;
    margin-left: .4106rem;
    font-size: .5625rem;
    border: solid 1px #fff;
    text-align: center;
    color: #fff;
    background-color: #fe4070;
    font-family: Arial,helvetica,"微软雅黑","Microsoft Yahei",sans-serif;
    box-sizing: content-box
}

.nav-cart-num.n2 {
    width: 1.2499rem
}

.nav-cart-num.n3 {
    width: 1.3125rem
}

.float_car,.go_top {
    bottom: 4.4531rem
}

.usn {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}
*/
.red {
  color: #fe4070;
}

.check-box-checked,
.groups .group .group-content .item .check-box-checked,
.submit-bottom .sub-info .check-box-checked {
  display: block;
  background: url(data:image/png;base64,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);
  background-size: 100% 100%;
  width: 20px;
  height: 20px;
}

.check-box-un-checked,
.groups .group .group-content .item .check-box-un-checked,
.submit-bottom .sub-info .check-box-un-checked {
  display: block;
  background: url(data:image/png;base64,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);
  background-size: 100% 100%;
  width: 20px;
  height: 20px;
}

/*body {
    color: #333;
    font-size: .75rem;
    line-height: 1;
    height: 100%;
    box-sizing: border-box;
    overflow-y: auto;
    background-color: #f5f5f5
}

.page.bg-content {
    padding-bottom: 3.0625rem
}

.page.bg-empty {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 100%
}

.cart-no-goods {
    -ms-flex: 1;
    flex: 1;
    background: #fff;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center
}

.cart-no-goods .oops {
    width: 5.375rem;
    height: 5.125rem;
    background: url(../../images/no-card-oops.png) no-repeat;
    background-size: 100% 100%
}

.cart-no-goods .empty-cart {
    font-size: .875rem;
    line-height: .9375rem;
    color: #333;
    margin-top: 1rem;
    padding: 0 .75rem;
    text-align: center
}

.cart-no-goods .go-stroll {
    width: 7.8125rem;
    height: 2.25rem;
    border-radius: 1.25rem;
    color: #fff;
    background: #fe4070;
    line-height: 2.25rem;
    text-align: center;
    margin-top: 1.4375rem;
    font-size: .8125rem
} */

.count-down {
  padding: 0 8px;
  height: 26px;
  color: #999;
  background: #fff;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}

.count-down .clock-icon {
  width: 0.9375rem;
  height: 0.9375rem;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAwlJREFUSA3FVzGLE1EQnnmXwkYRixMP1C7+gHRiYXJooYUBBbGzVpAkgoVYbCEphLsEQWs7ETy4FFooJhZiZX7AXadCBAtPFEXhbsdv5t0uu7mYXcLt3UCyb3dn5pv33ryZb5lyiASBo3c/T1MY1imUCjEvkMiCmTKPMB6R4yE5t0pnDr7nIAiz3PI0BbkeHKCP328R8W0RmZ+mG71j5q9EskQnDz/kJ8Gf6Pn49b/AUm1dxkw6QnJcjeBwHf+rNCevSfgTHTk0MmfffiwQywna4nMArCPAsukTf4ZRkwfLK6Y39rcDGIZMtdZ9XO+aA8YSstzhfrc/ZjvxVmqNGgJ7APvKtn2b+sv3ELgkDVLAHrT5VISuMvEmZtCgQefxuFHSwaSx+ak2b2CFulixEjM9o37nWtKPSxnaTA10g+b4PL/tPkoqp3Sn3KiN2poP4g2diK5i0iSese6pSPjcZqqgb5YHScVZx7LYqtKWvPIzd1eiPbcZW/YikbxzaeQBlWrzhf6yAvK+sGUqmqx6UiB+qXFkNHuxREPdU32RJdjHC/rL0rP3Pk+GdkLseALYigPOqSlo9o5lXy7HGUrmE769GmoCCpJVJEQ+j8xby3tkMnAmvlbfCGBdsbQKOiuDpup6Ey129SEKkApKL4D9QbeKtKsgE5xp1VMBprOCrzdaBouWCANNxsVdJqq9RYJHGOhspRjn7++4mMTPcgzCs41UDU6aIJle8qBzMX4WY7DoUvsu82vzWKyQYwCnaH+Zkg4qwmD6UrImTlS21kaE1pdPMJOj+TQTWto+VUAcnDEHvbF+qoMCJcZwHwAMumISXioQctu11G1Q4p4zjoT9Qus6ZU28IHT1japVttwAL3OemIEjqXjmMFN2T4sXgKy+vY4sKabvTkrMwJGgUCFjDtPczPBusXVTfSuGkkD1EM9uX4iARQA2iPVvK1MAY1gx5jDD5JIm2+xjxbMPbkfsw/BSisYw94bsxUsdBWCJsNf0NgLX605CT2sgLL3CCH0KfD8+YVIBFPDR9g8XKbh4Mp47hQAAAABJRU5ErkJggg==);
  background-size: 100% 100%;
}

.count-down .clock-msg {
  -ms-flex: 1;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.count-down .timer-text {
  width: 3.4375rem;
  margin-left: 0.15625rem;
  font-size: 0.875rem;
  color: #fe4070;
}

.groups {
  margin-top: 8px;
}

.groups .group {
  margin-bottom: 8px;
  background: #fff;
}

.groups .group .group-header {
  position: relative;
  background: #fff;
  height: 40px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-left: 8px;
  border-bottom: 1px #eee solid;
}

.groups .group .group-header .group-title {
  margin-left: 8px;
  max-width: 47%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.groups .group .group-head-type {
  margin-left: 0.3125rem;
  line-height: 0.9375rem;
  height: 0.9375rem;
  font-size: 0.625rem;
  display: inline-block;
  padding: 0.0625rem 0.25rem;
  background: #fe4070;
  border-radius: 0.1875rem;
  color: #fff;
  font-weight: 100;
}

.groups .group .group-info {
  padding: 0.75rem 0.75rem 0 2.25rem;
  font-size: 0.75rem;
  color: #666;
  line-height: 1.125rem;
}

.groups .group .group-info .group-info-bottom {
  border-bottom: 1px solid #eee;
  padding-bottom: 0.75rem;
}

.groups .group .group-distance {
  font-size: 0.75rem;
  color: #666;
  position: absolute;
  right: 1.125rem;
  bottom: 0.875rem;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}

.groups .group .group-distance > span {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 0.375rem;
}

.groups .group .group-distance .group-distance-icon {
  margin-right: 0.34375rem;
  width: 0.75rem;
  height: 1rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAAAAXNSR0IArs4c6QAABCBJREFUSA2tlltIVFEUhptxxFSol8g0IaIL0oWkC1HQBXpruvkaVFQP47VCjFKohi6mGEKN1yCVoB5ryuqtyKKCsqCHosKEoLSiBwsl1HGm7z+dM5wzM40XWrBZe6/1r3+tvc7ee8Y1LYk0NzfPdblcOxnbgC2IRCI5grPuQ31kfYdxq6io6IvsicSVyNja2ppNoB+ig/hTEmFstjGwV8D6fT5fv81uTOMSQO4l4DoBM0CMqkJGcGxs7IUqHxwcdGVmZmanpKSsYb2LsRNcKphfzHeT5K49iSNBS0tLMc4AQLeIIa0oKSnpsQfEzhsbGxeS7IISERPGX1ZYWNhk4aIJIN+KsROgbFVUUmOBJqLZ+XFw1SSJoLeT5J7ijARUMYcq3sM9A38VzvNyTlYoshKOauJ+hkKhPHb/1S0SyE+Z5J1TJRePYimwk+lMccrmCgQCOampqZ+0IOvS0tLSD5rbpampaYPb7T5KEatlh6Q7HA7XFRcXP7bjNG9oaFjs8XjeaD46OjrPDfkOAj2sbycip7dVVNMFZjuYbA3NSfhQPtYOMTlui1PcapFXCKoKOpAs6OlG1FmGjqs+oi5ajuYQhNBntDtsDrFxeVX5InkxPneg/i4qUC58J+lvrc1fS3Ld6Bq1DrujVdheCIt/oXagbav/8bfQ7DnAq8LYxbKhje9i9w0PD+spUdE5bgDGU5CWlha9E3bwVOYWl7i1g16RcCqWxZJRQbds6L0JfIbNwtj9Nq5eD4AHZFpO3woAPYkB1mH34j9t9txolRLKhoYrXGeP0dzkUmEPtIN2GVns8fv90zW3ROcc+0mGB0I9Heptn+am7UTsXRCHuEyOdjen4zWLLoJmZ2Vl7TMdUcVbf44qNxOkG6qD0K+5bLxXehYcIg5xYewSt/Fh+WEpYFs3MH4eGhpaXF5e/tsRNcFFfX19Ok+5XoJcRgEFBNWiaVQZpCrdg1wAOvtTEjM2V1yQ3xKJkQCNLVJm6kq9J3JORhQDRyUxUS7FWwm0i+d4OuhfOo9VBx8r6hsvkbCKUaw4xGXFOEhGRkaOAfgOcB0fa8KtElYxihWHRS4dd3s57/oXoW8yjH8lJ+GtPSB2Dn4JtlfEpBGzC7zRewvn2IGMJqBNAYxrOhkWOFbLJ4yw+NpiyYWPSyDjwMDAEZR+7PMzMjIuy5ZITF8+vh4zJg4W1yILwdZXMH9GddrBYY7dJcsnzY/NIdRF2qI7s47qdWHj5J8JhCTJfhK0QRJiuQWSR6ZdP0T38ektO4DdeG7ki5WkCQSm0haUj/GN52GVbNz6l6gsRis7K5TtX6JftPFEFzCPsQnimyZY5F0M+ZLKuDtQNLuYhdLlma81bemlPWup/ofWyWRCCURAkjyIn2oO+XrI32n+X0X/IBL9i0iW5A+pPPTNaza6XwAAAABJRU5ErkJggg==);
  background-size: 100% 100%;
  display: inline-block;
}

.groups .group .arrow-wrapper {
  padding: 40px;
  position: absolute;
  right: 0;
  top: 0;
}

.groups .group .arrow-wrapper .down-arrow-icon {
  display: inline-block;
  position: absolute;
  right: 0.75rem;
  bottom: 0.875rem;
  width: 0.34375rem;
  height: 0.5625rem;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAASCAYAAACNdSR1AAAAAXNSR0IArs4c6QAAATdJREFUKBWNkk1Lw0AQhnfDhkCCVFH/QUI+JIgIIniw6dWT/aM9iKf6cfIPBGqMIaYgCuqpSIJJDvGdSISmIe3AMDs7zzu7syz3ff+6qqqBqqqXhmF8sR6TCET9LMuy+yiK9ntYJlFHADP4wToBp07UkUASwGdo4HVdqYY3FfzDmwiW4HWCFbhPIFGxbTScpmkj7DevdEVMJ0wFvP8P5/yb1ohbyHknHMfxAE85BXAKdi7L8gUE1QqcJMl2mqY3gE4AvAghzm3bniNnSwPin+xgjzoeA4zhnuu6rwSSib/AWBAEu0VRTJEfwSNFUTzTNN+aOsX6GmEY7pVleYucwGeAwzZYw/Qv8jy/w9GHOPYJwwwty3qnYtsEpp5g0wX4CB85jvPRhppcAFig6wN+2ljX9c+m0BV/AdwAnTIlqNe4AAAAAElFTkSuQmCC);
  background-size: 100% 100%;
  transform: rotate(90deg);
}

.groups .group .arrow-wrapper .up-arrow-icon {
  display: inline-block;
  position: absolute;
  right: 0.75rem;
  bottom: 0.875rem;
  width: 0.34375rem;
  height: 0.5625rem;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAASCAYAAACNdSR1AAAAAXNSR0IArs4c6QAAATdJREFUKBWNkk1Lw0AQhnfDhkCCVFH/QUI+JIgIIniw6dWT/aM9iKf6cfIPBGqMIaYgCuqpSIJJDvGdSISmIe3AMDs7zzu7syz3ff+6qqqBqqqXhmF8sR6TCET9LMuy+yiK9ntYJlFHADP4wToBp07UkUASwGdo4HVdqYY3FfzDmwiW4HWCFbhPIFGxbTScpmkj7DevdEVMJ0wFvP8P5/yb1ohbyHknHMfxAE85BXAKdi7L8gUE1QqcJMl2mqY3gE4AvAghzm3bniNnSwPin+xgjzoeA4zhnuu6rwSSib/AWBAEu0VRTJEfwSNFUTzTNN+aOsX6GmEY7pVleYucwGeAwzZYw/Qv8jy/w9GHOPYJwwwty3qnYtsEpp5g0wX4CB85jvPRhppcAFig6wN+2ljX9c+m0BV/AdwAnTIlqNe4AAAAAElFTkSuQmCC);
  background-size: 100% 100%;
  transform: rotate(-90deg);
}

.groups .group .group-content > div:not(:last-child) {
  border-bottom: 1px #eee solid;
}

.groups .group .group-content .item {
  overflow: hidden;
  min-height: 104px;
  display: -ms-flexbox;
  display: flex;
  padding: 0 12px 0 8px;
}

.groups .group .group-content .item .check-box-checked {
  margin-top: 45px;
}

.groups .group .group-content .item .check-box-un-checked {
  margin-top: 45px;
}

.groups .group .group-content .item .item-content {
  -ms-flex: 1;
  flex: 1;
}

.groups .group .group-content .item .item-content .img-title {
  display: -ms-flexbox;
  display: flex;
  margin-left: 8px;
  padding-bottom: 10px;
}

.groups .group .group-content .item .item-content .img-title .img-wrap {
  width: 84px;
  height: 84px;
  position: relative;
  margin-top: 10px;
}

.groups .group .group-content .item .item-content .img-title .img-wrap img {
  width: 100%;
  height: 100%;
}

.groups
  .group
  .group-content
  .item
  .item-content
  .img-title
  .img-wrap
  .img-text {
  display: -ms-flexbox;
  display: flex;
  width: 5.25rem;
  height: 0.9375rem;
  background: rgba(0, 0, 0, 0.25);
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  color: #fff;
  font-size: 0.6875rem;
  position: absolute;
  bottom: 0;
  left: 0;
}

.groups .group .group-content .item .item-content .img-title .item-img {
  width: 5.25rem;
  height: 5.25rem;
  margin-top: 0.625rem;
  margin-bottom: 0.625rem;
}

.groups .group .group-content .item .item-content .discount-detail {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-left: 8px;
  position: relative;
}

.groups
  .group
  .group-content
  .item
  .item-content
  .discount-detail
  .discount-item {
  margin-bottom: 10px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}

.groups
  .group
  .group-content
  .item
  .item-content
  .discount-detail
  .discount-item
  > span {
  height: 16px;
  border-radius: 1.25rem;
  font-size: 12px;
  color: #fe4070;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 5px;
  border: 1px solid #fe4070;
}

.groups
  .group
  .group-content
  .item
  .item-content
  .discount-detail
  .discount-item
  .promo-rule {
  font-size: 12px;
  max-width: 172px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 16px;
}

.groups
  .group
  .group-content
  .item
  .item-content
  .discount-detail
  .discount-item
  .promo-rule
  > span {
  margin-left: 2.5px;
}

.groups .group .group-content .item .item-content .discount-detail .show-more {
  width: 0.78125rem;
  height: 0.78125rem;
  position: absolute;
  transition: all 0.3s;
  bottom: 0.9375rem;
  right: 0;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAnJJREFUSA21lsuKE1EQhrvbJOSyCCQEtA1mYkZEXQk+gjKLSMalT+HWnQsXPsU8xIxktpOVMIiiCOrGJpCbMInxBiEJufh/0t2MnZ42OObAyamq/6+qc62OaUS0TqdTNE1zd7lcVkWrqNsuvafREXYo7KBYLHZc+8pgrlhk6Pf7l8bj8VMFeCC1blnWwWKx+JBIJAhsTKdTW7ZbstWk3leS/WQy+aRQKHwGj2zdbremmZ+oPxsOh9lIskA4cPHBN5Lfbrcfidjq9Xp3IokhID74EiMENgx35q3BYHA5lLCGEV+SrKyEPWeJ/zLzYF53JSfEBLP44UA17Nm2/Qr9PM2NsefGNEzNvKiAb9Lp9HYul/tOcN0KEusSmXP0vzXxL4izFH8Bl4MfjUafJN62ZNyVUPeCQ3Ac51j9Y7PZ3EKPanDg4uPx3Fh1YlvKXuWee6A79mW/Np/PG3K8EsB8FQwOXBn7PiBBMZ/LXmUrKjyi02A2m30o/ViELWENdxtPUwxsYHDguj4+R9h7KRUS2N4L9VC9yJ9a5o70l+pXdWCNVqvllQkDGRsYHLj4SPabG9MmQWjL5/M/YrHYjvbxtWa5rfJwpP2+SEfGBgYHbjCIsN9liAQ9akuQgF4ul7/F4/F7Et8q4PXZbHZER8YGBgdusE0mE95BjwSODuRmkODppVLpayqVuqsJvZPtBh0ZG5jHC44UQ9kcrumhDoSremZTOf6SyWRI8oKOjO1MBwGKWSN26EOLclwH++Oh8bHQnu7r5T1ex3kdDrGI6X+INlns/AlttFx7WTb6wfGSuCv5b5/MjX/0QxN4q6Gg6S6f62/LL1ZQ2brptHMNAAAAAElFTkSuQmCC);
  background-size: 100% 100%;
}

.groups .group .group-content .item .item-content .discount-detail .hide-more {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAn1JREFUSA21Vk9rE0Ec3d2EEBKsNrKHrEsgrCcLpaIUwVN6VVr9Il5768GDn6IfwJutJIeiH0HwpEVsjPm3keYP5JD/Mel760xYJutaTDMwmd+8935vZnZnZqNrIaVWq9m6rh/M5/NnkDmolpC7aIvgCuBObduuCXyp0ZcQAM1mMz0cDl/D4AW6ecMwTmez2ddYLEZjbTweW8C2gO2j+xyDnMTj8SPTNBvkQ0u9Xt/HzC9R33Q6nduhYpDUUMsc5obqq9XqKwgrrus+DhUGkMxhLj0CaE0TM6+0Wq17gYJrgMzlIEsr4TPnEv9n5uq4YiWX9CRn8IcvFM2xZVmf2F+lCI9j4anpmLkNw8+JROJ+KpXqrmIuc/ni+/3+BfoPo2Kf5/9l3mg0zF6v944myWTyZTqdbkpDtaUXJp6nt8FDxH2uivx9iO/C/CO0T1kZE/Nr1Bie7z1vEA4PkSqQ/XK5vDkYDGi+DeyclTExclKntvD8AszhS7bkCVVFpVLpzmQy+QB8B8v9Fo1G91gZEyNHjZrHvvC0vF0UJGi32xvT6fQMs30Ewwsk7GWz2V+sjImRo4Za1QO8dw1xAJd3i1+APXwLO+EM2C7qD9wzuUwm491D1DEmRg51l1rmkJNlNBrxHLgcoIgX8kASbLvd7ls0TzCJn+ByQbclMXLUUCtyEP4p4LYQFQ0ICnghB5IQrQn8eyQSyTmOU1G4RZccNdQCNBcEAt60wAuBBw3PlisDr//2J/0thj4Cbg79jBr/QTO4VAhOcPIOpQGF1zVnDrXSnH160XPxaNd52XFAr6z1upaDrPWDIwcRK7mxT+baP/qBA8jV8FuB3bHS35YrvKfZ70M2dtUAAAAASUVORK5CYII=);
  background-size: 100% 100%;
}

.groups .group .group-tail {
  height: 36px;
  display: -ms-flexbox;
  display: flex;
  padding-left: 8px;
  background: #fff;
  -ms-flex-align: center;
  align-items: center;
  border-top: 1px #eee solid;
}

.groups .group .group-tail .icon {
  width: 16px;
  height: 16px;
  display: -ms-flexbox;
  display: flex;
  border-radius: 100%;
  border: 1px solid #333;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 12px;
}

.groups .group .group-tail span {
  margin-left: 8px;
}

.groups .group .red .icon {
  border: 1px solid #fe4070;
}

.text-wrap {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-left: 10px;
  margin-top: 8px;
  -ms-flex: 1;
  flex: 1;
}

.text-wrap .title {
  display: -webkit-box;
  width: 233px;
  max-height: 40px;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #333;
  line-height: 20px;
  text-align: left;
  -webkit-line-clamp: 2;
  word-break: break-all;
}

.text-wrap .sub-title-1 {
  margin-top: 3px;
  line-height: 13px;
  height: 13px;
  color: #999;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.text-wrap .sub-title-1 span:first-child {
  display: block;
  max-width: 200px;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.text-wrap .sub-title-2 {
  margin-top: 0.25rem;
  max-width: 12.1875rem;
  line-height: 0.75rem;
  font-size: 0.6875rem;
  color: #999;
}

.text-wrap .price-edit {
  margin-top: 5px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  height: 22px;
}

.text-wrap .price-edit .price {
  width: 201px;
  display: block;
  font-size: 16px;
  color: #fe4070;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.text-wrap .price-edit .price.editing {
  width: 160px;
}

.text-wrap .price-edit .edit {
  display: block;
}

.text-wrap .price-edit .actions {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}

.text-wrap .price-edit .actions .gap-line {
  display: inline-block;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAABLCAYAAAC1Iz2+AAAAAXNSR0IArs4c6QAAACFJREFUKBVjfPz48X8GKGCCMUD0KGc0DEbTASRHDJm8AAAF3wQ+7br5wgAAAABJRU5ErkJggg==);
  width: 1px;
  height: 14px;
  background-size: 100% 100%;
  margin-left: 6px;
  margin-right: 6px;
}

.text-wrap .number-editor {
  margin-top: 9px;
  height: 26px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}

.text-wrap .number-editor .decrease {
  display: block;
  width: 24px;
  height: 24px;
  background: url(data:image/png;base64,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);
  background-size: 100% 100%;
}

.text-wrap .number-editor .decrease-disable {
  display: block;
  width: 1.375rem;
  height: 1.40625rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAAA+hJREFUWAnVmV1PGkEUhmEFTERrWqW1ECtBtCU2XpmaNO2Fv9ybpomNV0ZD47cYqC3Sxg+MAkrfZ2UJUMBdu7C4ycq4O3POs2dnzsy86/f9x7G6uhpIpVIv7u7uJvx+/9jt7e1otVoNqRzArMoVlUtDQ0OXKl8YhlFIp9O/V1ZWKo91639Mw5OTk5elUumNYCKCOJONQrlcPg+Hw5eTk5M3+t8CCpyeng4Xi8XRYDD4TNcn9HDjgs+HQqHM1NTUL6f+HQHn8/nX19fXb+WkWqlUjq6urnILCwslJ063trZCIyMj0UAgMKPTp3M7Eon8sGvDFrAiGhbgoiIzrEimE4nET7sOutXb399/pcin9KZuBL6hiBe71efeg8DHx8cx9cH3At6dnp7el/HqQ0ad3FcQ/PKREHBSY2BTPrLd2ncFzuVy7xTRmGDXZ2dn6as9O/b29sYFvaSIZ6PR6PdOjoxON/TUi7oX0eD60mtYGPCBL3zWfHPZ3kFkdX7W6zLTk71W7tTCJ75haGfxnwjTZ+kGSkXf1F+t9NSubU+u4RPfMMDS6qQJmGxQG2Drc3Nz5FNPDnwzbmCBqRGiCZjURTboR59thGhXhgEWmBrv14GZFMizpK7GCl6WYYEJNoujDqwnmVe/SbudZy1Hj/mFBSbYrPYmMGsDXfS5NYNZxt34hQk2GLFnArOQ0cUjNxz0wgZsMJrALBEV+kg8Hu86JfYCxK5NFlkwmqyEWnN4MhaLfbVrwIt62Wz2o9LcrsHiWwAFLyAc+izAaijUYxqJ5w4b9706jLAabGvYKfSdwKFDGGE1lJhDtW2NQxP9rQ4jrGQIVmS2FznLy8uf1Jeeu4Gr/eCftbU1lpR2Dja0gfpMZ6eF23X0ih3vXgIKM9ElyrY2kw4i4vbzmaxkiRJbcbetu20PRlgNJeNLdAO3HbhtD0ZYyRIXNZHDbR+u2oMRVg1Ug1mO2W7QjwlYDbQu5CMUmUElhg1GWE3GTCazdHBwEB9UYNhghM/MwwhzEjFmBhUYNhjrwKiIuuhD6xo0aJhgs5TO+kyni9sIcxqJXeWrfj4QLDDBZvmtAyN5KjHfSLxIWDe9/oUFpkY5tg4MnJ5kQ2cSYc5r2Jo4mISpkaUJGH1WC5JNVVra2dnxbLrGNwywtGrGTcA8Cfqs+k1WC+YP6kOeiIH4hqGdVtxxgKn/LGruHkeY65fORmSBVWTPBNvUFaxu0RGYCkie2ksNlKDdFRhoJE9F+ml8MgCYA8lT6svT+Chzj3z/FxVR4PM6fchHqEXKk+XGOg+VNZCDh4eHMWWB3n32aoVALULrEuxgf1hsBffi0+1fhpd1uYRc2VAAAAAASUVORK5CYII=);
  background-size: 100% 100%;
}

.text-wrap .number-editor span:nth-child(2) {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  width: 44px;
  height: 24px;
  color: #333;
}

.text-wrap .number-editor .increase {
  display: block;
  width: 24px;
  height: 24px;
  background: url(data:image/png;base64,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);
  background-size: 100% 100%;
}

.text-wrap .number-editor .increase-disable {
  display: block;
  width: 1.375rem;
  height: 1.40625rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAABABJREFUWAnVmV1PE0EUhtullISCjUAVSxBSPrTBcFXkQk3kB/hr/QHceINwRSQ1Ig1IqGipho8SaAv1fZYuaaHd7sIuWzdZuszOnPPs2ZkzM++GQ/c4lpeXI+l0eujy8nI4HA4PXlxcDNRqtaiuI5jVdVXX5Z6enhNdHxuGUcxms3+Wlpaqd3UbvkvD/f39J+Vy+blgEoI4lI1ipVI5isViJyMjI+f63wKKHBwc9JVKpYHe3t5HKh/Ww8UFX4hGoz9GR0d/u/XvCrhQKDw7Ozt7ISe1arW6c3p6mp+bmyu7cbqxsRHt7+9PRiKRCZ0hnd8SicRPpzYcASuiMQHOKzJ9imQ2lUr9curArl4ul3uqyKf1ps4Fvq6Il+zqc68j8O7u7pj64CsBfx8fH8/JeK2TUTf3FYSwfKQEPK0x8EU+9uza2wLn8/mXiuiYYNempqboq74dW1tbcUFnFPG9ZDL5tZ0jo90NPfW87iU0uD75DQsDPvCFz7pvip0dRFbnO70uMz05a+VNLXziG4ZWFm9FmD5LN1Aq+qz+aqWnVm19KcMnvmGA5aaTJmCyQX2Arc3MzJBPAznwzbiBBaZGiCZgUhfZ4CH6bCNEq2sYYIGp8f41MJMCeZbU1VghyGtYYILN4rgG1pPMqt9kvcizi4uLbzOZzBvLyV1/YYEJNsuGCczaQIUhr2YwrRcey9mQ5eQ+vzDBBiN2TGAWMircuY9hP9vCBqMJzBJR0UhMTk7aTol+AnWyzSILRlgN1rMsEVVQ6dQwqPusCGE0WVl8C6QYFIwLv0VYDUV2UCPxyEXDQKrCCKvBtoadQiAULpzCCKuhxBytb2tcNH/4qjDCSoZgReZ4kcOkQJ51grywsPDBrp4G0t+VlRWWlE4ONrSR65nOSQuv6+gVu969RBRmokuUHW0mnUTEiuzq6upHDx/SZCVLlNmKe2jYF1MwwmogcqAb+OLFQ6MwwkqWOK6LHB6a994UjLBqoBrMcsx23X4Mw2qgdSlNxVFkupUYNhhhNRDmFOoC8lG3AsMGI6xmHkaYk4gx0a3AsMEInwmMiqjCEFqXF9DMYJxe2IIJtltKJxs96QDvFXpb+coLCKc2YIGp5SYUyVOJ+VwVUk4N+l0PFpga5VizS1iOFfp1ndMIc1ZZUL91cXAapkaGJmD0WSRPVcpsbm4GNl3jGwZYbmrGTcA8CfoskqcWzK/VhwIRA/ENQyutuO0AU/+Z19wdR5h7KJ2NyAKryB4KtqkrWN2iLTAVkDy1l+oqQdsWGGhF+v/5ZAAwB5Kn1Jf/46PMFfLVXxK4wGd1hpCPUIuUJ10JMBrIvdvb22PKAv599mqE5hphDq1LsN39YfEmeBCfbv8BAKCF9c5C68kAAAAASUVORK5CYII=);
  background-size: 100% 100%;
}

.tax-price {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}

.tax-price .price {
  width: auto !important;
}

.tax-price .ques-icon {
  width: 0.9375rem;
  height: 0.9375rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAx9JREFUSA21Vk1IVFEU/s6beVottLRFWi1iJKQWERRRbVIKyREzIWjXRnIj4USmK7FWKeJEtElctIqQKA0tTHOgoFy0qKCE0nCRFgiKhcn8vdO59/nk+ebN5CIvDPee8537nfvuPfe7Q8jR+Oz1PVhJnJOQMIhCYC7V4URzMp6W8TC25g3S867v2WjID+Cq5hLEjZsA18lvCIHAoPSfUVQwp+MXfpVKgoOwuBagGvkNIN9qp5HbP7x8GQm44mot2OoDoQ+B/E4a61zyTnLbfLq1EOl4KxgNIKOBYj1P3fi6BEJ+RVZ2DSbqaTT6zh34rzGfiRxBEo9lK7slyR0nfi2BvXK+CwPHaTw66wQ4PXd0GHi1vA9IFcsCpmgkuuBgTs+Vkd2w8FaSNDlfohPYe44PMKnab+V8KnJJSKIM3uGQEegJTLOJRrvsc1kF7C/hZ8jHIXUmhvarA5U99yWvbG4Q4vsgfkHBYAWZ5mGC0SZ2NZKJR3yhP+AkVb3mUOeniwQI2qWYrJMDLXMHqjFfvmfi6+QtWW2MYtGLLvw9V0S2SeJ2Wpw4Kv4JFwZVHEglpoT7hmHXOQ/5VsvMlxAzimHwg3UEygjgtfalsd+L2VxS3nKH1BaF7Tr3homdsn4TUaOwjWagFsq1j/hnBqYcBqlyDQf1DVWXyKetVlOvF+KqSBnisj1E31BWHsO4N0Jsok9yriFDX3/nhvrEeV1c2RJCXCiJGEbgPPU2Jr0x2lacIi12FflGZDo53LYDViomSBB5OEkvuz9mRq164n/0FTBkJXNQ2rKRthJvlcrZiyDVy0WbyjllOVWiuNUWiSrSgZzBDmjhBBGmaaxnfVk6uLtXYijcQfENI51Wkjzgxn3HhIegwKIv5nVqpcWwofRcvqBGq6I3yGvvLOxD8bF+r9tr21wi48Jt2I+F6LmS3BxNSrMI80uzmH8zKcKnvjx701w0oLjtKpLHQum5Fqps0yxzi9R1gcDbMSNVlKVpDvU2KE5pG5ZrFczVLbuQMFZ8ZUXh2eRaTVZtUx8cO4VOsnlP5lqSzXz0nSSq/x9/W/4CPZNy7wk8qMMAAAAASUVORK5CYII=);
  background-size: 100% 100%;
  display: inline-block;
  margin-left: 0.25rem;
}

.tax-price .tax-text {
  font-size: 0.6875rem;
  line-height: 0.9375rem;
  margin-left: 0.25rem;
  display: inline-block;
  color: #999;
}

.items-disabled {
  margin-bottom: 0.5rem;
  color: #999;
}

.items-disabled .disable-header {
  height: 2.5rem;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #eee;
}

.items-disabled .disable-header span:first-child {
  display: block;
}

.items-disabled .disable-header .clear-all {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}

.items-disabled .disable-header .rubbish-bin {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background: url(data:image/png;base64,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);
  background-size: 100% 100%;
  margin-right: 0.25rem;
}

.items-disabled .disable-header > span:first-child {
  margin-left: 2.25rem;
}

.items-disabled .disable-header > span:last-child {
  margin-right: 0.75rem;
}

.items-disabled .disable-items {
  background: #fff;
}

.disable-item {
  display: -ms-flexbox;
  display: flex;
  padding: 0.5rem 0.75rem 0.5rem 2.25rem;
  color: #999;
}

.disable-item .img-wrap {
  width: 5.25rem;
  height: 5.25rem;
  position: relative;
}

.disable-item .img-wrap img {
  width: 100%;
  height: 100%;
}

.disable-item .img-wrap .disable-text {
  display: -ms-flexbox;
  display: flex;
  width: 5.25rem;
  height: 0.9375rem;
  background: rgba(0, 0, 0, 0.25);
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  color: #fff;
  font-size: 0.6875rem;
  position: absolute;
  bottom: 0;
  left: 0;
}

.disable-item .title-text {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-left: 0.625rem;
  margin-top: 0.5rem;
}

.disable-item .title-text .title {
  width: 14.5625rem;
  height: 1.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.25rem;
  text-align: left;
}

.disable-item .title-text .sub-title {
  margin-top: 0.1875rem;
  line-height: 0.75rem;
  color: #999;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.disable-item .title-text .sub-title span:first-child {
  display: block;
  max-width: 12.1875rem;
  font-size: 0.6875rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.disable-item .title-text .price-edit {
  margin-top: 16px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  height: 73px;
}

.disable-item .title-text .price-edit .price {
  width: 180px;
  display: block;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.disable-item .title-text .price-edit .price.editing {
  width: 180px;
}

.disable-item .title-text .price-edit .edit {
  display: block;
}

.disable-item .title-text .price-edit .actions {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}

.disable-item .title-text .price-edit .actions .gap-line {
  display: inline-block;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAABLCAYAAAC1Iz2+AAAAAXNSR0IArs4c6QAAACFJREFUKBVjfPz48X8GKGCCMUD0KGc0DEbTASRHDJm8AAAF3wQ+7br5wgAAAABJRU5ErkJggg==);
  width: 1px;
  height: 0.78125rem;
  background-size: 100% 100%;
  margin-left: 0.375rem;
  margin-right: 0.375rem;
}

.groups .group .wish-header {
  padding-left: 2.25rem;
}

.groups .group .wish-header .wish-desc {
  margin-left: 0.5rem;
  font-size: 0.6875rem;
  color: #999;
}

.wish-item .item-content {
  padding-left: 1.25rem;
}

.wish-item .item-content > div:last-child {
  margin: 0;
}

.wish-item .img-wrap {
  width: 5.25rem;
  height: 5.25rem;
  margin-top: 0.625rem;
  margin-bottom: 0.625rem;
  position: relative;
}

.wish-item .img-wrap img {
  width: 100%;
  height: 100%;
}

.wish-item .img-wrap .disable-text {
  display: -ms-flexbox;
  display: flex;
  width: 5.25rem;
  height: 0.9375rem;
  background: rgba(0, 0, 0, 0.6);
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  color: #fff;
  font-size: 0.6875rem;
  position: absolute;
  bottom: 0;
  left: 0;
}

.time-box {
  height: 1.875rem;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 0.5rem;
}

.time-box .clock-icon {
  margin-left: 0.5rem;
  margin-top: -0.0625rem;
  width: 0.9375rem;
  height: 0.9375rem;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAwlJREFUSA3FVzGLE1EQnnmXwkYRixMP1C7+gHRiYXJooYUBBbGzVpAkgoVYbCEphLsEQWs7ETy4FFooJhZiZX7AXadCBAtPFEXhbsdv5t0uu7mYXcLt3UCyb3dn5pv33ryZb5lyiASBo3c/T1MY1imUCjEvkMiCmTKPMB6R4yE5t0pnDr7nIAiz3PI0BbkeHKCP328R8W0RmZ+mG71j5q9EskQnDz/kJ8Gf6Pn49b/AUm1dxkw6QnJcjeBwHf+rNCevSfgTHTk0MmfffiwQywna4nMArCPAsukTf4ZRkwfLK6Y39rcDGIZMtdZ9XO+aA8YSstzhfrc/ZjvxVmqNGgJ7APvKtn2b+sv3ELgkDVLAHrT5VISuMvEmZtCgQefxuFHSwaSx+ak2b2CFulixEjM9o37nWtKPSxnaTA10g+b4PL/tPkoqp3Sn3KiN2poP4g2diK5i0iSese6pSPjcZqqgb5YHScVZx7LYqtKWvPIzd1eiPbcZW/YikbxzaeQBlWrzhf6yAvK+sGUqmqx6UiB+qXFkNHuxREPdU32RJdjHC/rL0rP3Pk+GdkLseALYigPOqSlo9o5lXy7HGUrmE769GmoCCpJVJEQ+j8xby3tkMnAmvlbfCGBdsbQKOiuDpup6Ey129SEKkApKL4D9QbeKtKsgE5xp1VMBprOCrzdaBouWCANNxsVdJqq9RYJHGOhspRjn7++4mMTPcgzCs41UDU6aIJle8qBzMX4WY7DoUvsu82vzWKyQYwCnaH+Zkg4qwmD6UrImTlS21kaE1pdPMJOj+TQTWto+VUAcnDEHvbF+qoMCJcZwHwAMumISXioQctu11G1Q4p4zjoT9Qus6ZU28IHT1japVttwAL3OemIEjqXjmMFN2T4sXgKy+vY4sKabvTkrMwJGgUCFjDtPczPBusXVTfSuGkkD1EM9uX4iARQA2iPVvK1MAY1gx5jDD5JIm2+xjxbMPbkfsw/BSisYw94bsxUsdBWCJsNf0NgLX605CT2sgLL3CCH0KfD8+YVIBFPDR9g8XKbh4Mp47hQAAAABJRU5ErkJggg==);
  background-size: 100% 100%;
}

.time-box .time-text {
  font-size: 0.6875rem;
  margin-left: 0.25rem;
}

.recommend {
  margin-bottom: 0.5rem;
}

.recommend .recommend-title {
  width: 23.4375rem;
  height: 2.5rem;
  display: -ms-flexbox;
  display: flex;
  background: #fff;
  -ms-flex-align: center;
  align-items: center;
}

.recommend .recommend-title span {
  -ms-flex: 1;
  flex: 1;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
}

.recommend .recommend-content {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-pack: start;
  justify-content: flex-start;
}

.recommend .recommend-content .recommend-item {
  width: 11.25rem;
  height: 16.875rem;
  background: #fff;
  margin-top: 0.3125rem;
  margin-left: 0.3125rem;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
}

.recommend .recommend-content .recommend-item .recommend-img {
  width: 11.25rem;
  height: 11.25rem;
  font-size: 0.6875rem;
}

.recommend .recommend-content .recommend-item .recommend-sub-title {
  margin-top: 0.375rem;
  margin-left: 0.625rem;
  margin-right: 0.625rem;
  line-height: 1.125rem;
  color: #333;
  width: 10rem;
  height: 2.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
}

.recommend .recommend-content .recommend-item .recommend-price {
  margin-top: 0.375rem;
  margin-left: 0.625rem;
}

.recommend
  .recommend-content
  .recommend-item
  .recommend-price
  span:nth-child(1) {
  font-size: 0.875rem;
  color: #333;
}

.recommend
  .recommend-content
  .recommend-item
  .recommend-price
  span:nth-child(2) {
  font-size: 0.75rem;
  color: #999;
  text-decoration: line-through;
}

.recommend .recommend-content .recommend-item .add-to-cart {
  width: 1.875rem;
  height: 1.875rem;
  position: absolute;
  background: url(data:image/png;base64,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);
  background-size: 100% 100%;
  right: 0.625rem;
  bottom: 0.625rem;
}

.bottom-bar {
  box-shadow: 0 0 0.15625rem #eee;
  height: 3.0625rem;
  background: #fff;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0 2.5rem;
  z-index: 1;
}

.bottom-bar .bar-content {
  display: -ms-flexbox;
  display: flex;
  margin-top: 0.25rem;
  margin-bottom: 0.3125rem;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
}

.bottom-bar .bar-content .bar-nav {
  height: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
}

.bottom-bar .bar-content .bar-nav .bar-icon {
  width: 1.875rem;
  height: 1.875rem;
}

.bottom-bar .bar-content .bar-nav .bar-text {
  font-size: 0.625rem;
  line-height: 0.625rem;
  color: #999;
}

.bottom-bar .bar-content .bar-nav .icon-home {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAABDFJREFUaAXtmUtIVGEUx5tx0AkLQ4tWGdWqXSsjsNCNBJXVRip8jc6Mj0UhCoU9IBBtYYZFzfjGyqCiZS7ERxkStGnfIopaR0ZFDs7Y79gI42XM7869d+7mu3C4r/Od//n/z/m+63xu2aIPrYBWQCugFdAKaAW0AloBZxTwOBM2fdRIJFLi8Xiu8fZY0mN+ZWWlq6Wl5V36EfY/zRphyLaRfi/mNdBIcN8B6TuG547cGsEdARkYGLhO4D4JToV78vPzd4vJdRKwL+mTvHXu5HiFIXIlkUj0QC6O1TY1NT1JpcP7C7T1QyyH953Nzc1rIqS62XbtaIUh0y5kyVbatt5IVljIM8jWiQ/n7mg0elmeO3U4RhiyFyHbS9VWSL6Ryj3eiATzdwK/AO+F9C1Id2zka/W5Iy1Nwq0kfl/IYmGqOKySKAtbPX4jmJdx7Yi0Ou9Vxqr62E6YygYhO4h5vF5vK2QjqsmI3+DgYAOdMZwcf4nxd82M38zX1paGbF0KWUnWFFlJNhwOjxKjSboD4v3EbNmMhJn3tlWYypyLx+MTgFNYbwdkb5tJxOjLtGiGeESI8y5Ee0urWz5sIUwVzlCN52Tjg+xVyHZbzowAxJWFr5/LBHFriLvuk5YJhuWWphLHqcRTwH1Uo8suskKGWDJ/5TPlhfg4i9pZeW7lsFRhEigDfBLbCtk+2q7dSjIbjUXUm4h6A4wYdgohpjby3ex5xoRpt8OoPg3ANpKIQtbWxcWYOHh94LWB9RvyFXy7F4w+KvcZEWaBOgT4HMA7AHkE2ToSkcXFsQMsD6SHODeCtejz+cqDweB7s4Cm5/DQ0NBBVuOpJNkXRUVFAafJCinBoJXDnJ+BXbC8vDwluThKGIUPQHYGkF0AT7Jynq+qqoqbBc3UH8wEVo29hPROSE+Pjo7uNxNPuaUhWwzIG6wYgFm/338iEAj8MQNml+/Y2Jh/aWlpklzKifmZ9i4NhUJfVeIrtzTBx4Us6i7wW7bSLbJCSrALCwsryeUtt3up9LgKWfFRJoxviQzIycmpqa2t/SXXbh5MpZ+5ubnVyRyOqObiU3WkurP4nkTNj3x/1w3jE6E8NdYNNHkD7rovAW29GoFKz6mGUq5wXl5eK0FfE9yVeZuOkOSCzWPKfwMoV7ihoeELoGWpwEbFU985eW2lo5Qr7CSBbMbWhLOpthtYusJuqJ5NTF3hbKrtBpausBuqZxNTVzibaruBpSvshurZxLRa4R+SLPtKe5xOmg27fYLBT8FFK1iWCAO+uiEei8XusedVYCWR/40dGRnZzubhg6SPbPxnfCj/Hk6HIP9HIpEKdkNOY9+NOyHpxmTyDEFXhyHwN3A6M4mxNsZShfnX5gd2DI+SyCvsX1ZrkW08S2xshv20Un78f7IxtA6lFdAKaAW0AloBrYBWQCtgmwJ/ASnIm76ls+ctAAAAAElFTkSuQmCC);
  background-size: 100% 100%;
}

.bottom-bar .bar-content .bar-nav .icon-coutuan {
  background: url(data:image/png;base64,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);
  background-size: 100% 100%;
}

.bottom-bar .bar-content .bar-nav .icon-cart {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAstJREFUaAXtWb1rVEEQ/807E0SMsbWJiAoSO7WwsrgE7KJ/gIL4gaAgRxQFQbnGRnMmtmKCoK21SLwEtVIUBDGIlYVorbGI5rxxdpMjL3Lhdvf2cVvMFnfvdmdnfx9vd+EG0KYKqAKqgCqgCqgCqoAqUIwCVEzataw8dnUAi8tXpOcYmHczsHVtFCDCTzB9RoYnGBqcoofVpfx47OdCCXO5UhYyM8y80wU4gT6BSqdofuK1S3xITGGELdkmnoujJC6+lM8J9PFbejb1PQ+UR68N4W/jENC8LsIcFNINUHaY5mvv8nGxngshvPoafzDOUoZbqE/eENbCfePG1eomvPhxT+ZckNgFbN51gJ5e+r3xjLCRLGxah1myZy1Z0Csc2X6zE1mTjarVBvbuq4gD72XuMJa+XOywStBwMYSZxyyaDHeESNMVGd0/v4xSVrPxzMdd5/nEFUMY2GNBlPpC9uGbVQIrOXzYOMQWQrh19dDs7W8OGNaHbNn21XYQD64fiPMr+NCSfUYoj58D+LRcPcMMHogDqX0WOb0XQbwgJ/g06rUHLudCu0xBhPloZQf+0GMhXW6XtOg+IVtHP5/8/4pzWdf7lbbO9pCsISUYRkTwRxaLC8tcjDdh8xr3ytkc7hXSI5fP5vtcnv0Jmz2bSuPmGV8o/oQZ+30XKSw+AIs34daVUxgJj8QhWLwJe+BJMlQJJ2lLRFDqcEQxk0ylDidpS0RQ6nBEMZNMpQ4naUtEUOpwRDGTTKUOJ2lLRFDqcEQxk0ylDidpS0RQ3g7LP/e/Iq7fVaoQLN6EQfjYFcqYkwOwBBCW2k4qzdSZPJt3bcmWN8rjs7bc4blYzHCpL81h7u6ob1HN22G7gClkmYJWj5ol288nfMkauN4Otzhap01tx5Q7pAIQ8qd4K5fLtz2gzJ7tslzqspbGqAKqgCqgCqgCqoAqoAqEKPAPec/E4IvOtxEAAAAASUVORK5CYII=);
  background-size: 100% 100%;
  position: relative;
}

.bottom-bar .bar-content .bar-nav .icon-cart .cart-num {
  position: absolute;
  top: 0.09375rem;
  right: -0.375rem;
  width: 0.875rem;
  height: 0.875rem;
  border-radius: 50%;
  background-color: #fe4070;
  font-size: 0.5625rem;
  color: #fff;
  line-height: 0.875rem;
  text-align: center;
  border: 1px #fff solid;
}

.bottom-bar .bar-content .bar-nav .icon-cart .cart-num-two {
  width: 1.25rem;
  border-radius: 0.78125rem;
  right: -0.75rem;
}

.bottom-bar .bar-content .bar-nav .icon-cart .cart-num-three {
  width: 1.3125rem;
  border-radius: 0.78125rem;
  right: -0.8125rem;
}

.bottom-bar .bar-content .bar-nav .icon-my {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAA+RJREFUaAXtWb9rFEEUvrvcpUqOJGAhghZipb2FGCXYKheU0yKNXkxSBSxi/BOiKYRY3CVerCz0VHKYVgIqKey10hQGxCIQ4WJ3yZ7ft8zCGu/HzOzbwHmzMEzcffO973tvbubNmEi4x0XARcBFwEXARcBFwEXARSCeCCTjgf0btVwun9rf37+Ft2NoZ9GOKYsd9F/QNtLp9IvJycnv6n1sXayCl5eXT3qe9xDs82ipDio8fK+kUqn56enp7Q621p9jE7yysnINYp83Go3BZDJZB8Mq+mpfX99mNpv9Sca1Wu34wcHBBdjk8M8c+gxs9iB6Ympq6i1tpJ9YBCOzsxD7GGRTELCGNoesbbUjjzGnIXgRbRx2HkTfw5ildmNsvokLZmaRtTWSAekHIL1oQgzC5xCsBY7BbBiXzrSoYP5mkaHPaIMQe99UbBAYJfoRpzfaOeCI/aY7LSQBB62eCxTFchrbiqUjjiUGsYip5VzTSEwwtx74zINoHW1O039LM2IQi5gKu6WtyQcxwWqfJV4VGWq7QOkQVBhV2KYUts6wjjZiguFpjN6QFZIUeUJYPrYEqKRgVlBcWTcliB3C8rElcCUF++ViUFRIkAthBaVoZFhJwZHJHAWApGAeBPxyUYo4S0+F5WNL4EoK5qknwdpYgtghLB9bAldS8AYJoVjgQUDkCWH52BKgYoJ5ngUhHvFyPAhEJacwGDxPYUeF9MeLCVaH9wqykkFbjMqOGMQCTkXyYkBMMAXiwDCPYmEPRMd5ALAVzbHEIBYxbXGajRMVjHJwGwQn4Ag1v7dgI5pjOJYYxCJmM+K270SPhwEJkO6dC4BA9H99xQNxV7D/3oTYi2gn0AYC4RH73xj/A+0javSXuP14FxEvEWlKl0qlM1hcnoLEpahENMe/x0J2d2Zm5qum/T9m1oIhdhRieRQcRtsBEV64rY+MjGzl83lmJvJTqVQGdnd3uadfha9Z9DxE/IKvHER/sHFgJVhl9hMcDsP560wmc6dQKOzZENAds7q6Oliv159B+A2MoejzNplO6zoM26lpzMy+wbbBa51G+HscfzOg8JtHsF8B/7ricNnUl/E+zAUKTvib3env7799FGIDUfRFn/RNDopL8FmrNxaMooD/bcKrnKW4p3EzBfSJguQJvwVcmtm1emcsGFNpVIGttwKN+z2C7fsOcdF2aSwYyNxnE1yNtb0IGw4NDX1TkD4XE3gbwX5RIbX1mJANbEO+jQscG8GB367sneCuTJsBaZdhg2B1pWnPZdiqlmZqi8Vi7PVzHFOo5zIcRxAdpouAi4CLgIuAi4CLgIuAiwAj8AemPJUeIlp76gAAAABJRU5ErkJggg==);
  background-size: 100% 100%;
}

.submit-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 11.5px #eee;
  height: 49px;
  display: -ms-flexbox;
  display: flex;
  background: #fff;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0 12px 0 8px;
  z-index: 1;
}

.submit-bottom.submit-bottom-padding {
  bottom: 49px;
}

.submit-bottom .sub-info {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}

.groups .group .group-content .item .submit-bottom .sub-info .check-box-checked,
.submit-bottom .sub-info .check-box-checked,
.submit-bottom
  .sub-info
  .groups
  .group
  .group-content
  .item
  .check-box-checked {
  display: block;
}

.groups
  .group
  .group-content
  .item
  .submit-bottom
  .sub-info
  .check-box-un-checked,
.submit-bottom .sub-info .check-box-un-checked,
.submit-bottom
  .sub-info
  .groups
  .group
  .group-content
  .item
  .check-box-un-checked {
  display: block;
}

.submit-bottom .sub-info .all-check-text {
  font-size: 16px;
  color: #333;
  margin-left: 12px;
}

.submit-bottom .sub-info .summary {
  margin-left: 0.6875rem;
  color: #999;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
}

.submit-bottom .sub-info .summary > div:nth-child(1) {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}

.submit-bottom .sub-info .summary > div .red {
  font-size: 14px;
  margin-left: 5px;
}

.submit-bottom .sub-info .summary > div:nth-child(2) {
  width: 9.375rem;
  margin-top: 0.3125rem;
}

.submit-bottom .submit-btn {
  width: 125px;
  height: 36px;
  font-size: 16px;
  color: #fff;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 1.25rem;
}

.submit-bottom .go-to-submit {
  background: #fe4070;
}

.submit-bottom .disable-submit {
  background: #feb2c5;
}

.over-lay {
  z-index: 2;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
}

.over-lay .dialog {
  width: 18.9375rem;
  padding: 0 0.75rem;
  background: #fff;
  border-radius: 0.3125rem;
}

.over-lay .dialog .dialog-header {
  height: 2.96875rem;
  font-size: 0.9375rem;
  color: #333;
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
}

.over-lay .dialog .dialog-header .dialog-close {
  position: absolute;
  right: 0;
  top: 0.75rem;
  width: 1.46875rem;
  height: 1.46875rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAAXNSR0IArs4c6QAABVhJREFUWAnVmctOHEcUhmuG64jLIGYTjAlIwAKQQIojwSKPgLG9i5+BlbOKlLUlr+JVnsHZATZvkA2WQgRIwAKQIBjIBsRwEXcm/1fqajWjGbpmhos4Us1Ud1ed83X16VNVpxOmQllcXPzu6urqpdS8yOVyzxKJxDPVKRmVXZVtnd/W+W3VZ6uqqr4MDAz8p3rZkiinp0C/F+hb9X2lMiIobz2Cz6nPjMqUbuCTbuBf1UsSb2NoXV5ezlxcXPym6rhAazmXTCZzTU1NicbGRlNbW2uqq6tNTU2NEZDRjRm1N5eXl+b8/NwcHR2Zw8PD3PX1tbWrGziXij/U/n1fXx9PxUu8oFdWVupOTk7eCfRXaU0zWi0tLYl0Om0EbHTsZYxG0gG4yWazZn9/X4f2KWWl40MqlfrY29t7Fqcs1lrgsxNSPoKy5uZm09bWZurq6uJ0x14/OzszOzs75uDgwLYV+Iye0Js4n78Ven5+/gcpmhLwcx59R0eHaWhoiIUptcHx8bHZ3Ny0LiR732Tv1dDQ0D/F9BSFFvCYOv2pksJfOzs7rZ8WU1Tpefx/Y2PD+r10naj8LPDPhfQWhF5YWCB8/aUOqUwmY9rb2wv1vZdzW1tbZnfXvpOA/1RoxJP5lvFhnZtUeXBgWBggBgr7uGbAw3EoN6CJEnpMvHTPcYmHHOGQSBXsYh8OeOCKXr8BHYS1EV46fPgxBftwCHwErihL6NNMHJoA1nQx3d3dfS9RImrYp05UWVsDyWR1A91uAgpHOpjp0sTh+whrPpD5beCAR5IO+GwTC81aQkfjcvwcE4evEKbKFd++8MAlO+MBp7HQUvBWvlPL1Ow7083NzZmJiQlzenpaMjd96IuOOIEHLvjgpL1zj9ccsJbwEUZpdXXV7O3tmenp6ZLAAaYPfdHhM+IRLsuZDOLgcLBa82G2M+Po6KhpbW0tCTwKTF90sBqMExZl8KndMLxJ3emYhj7B8lIS1z+8Xl9fb436ghcCRoePwAUfnOJ9iXu8oCPBvFTxBa8E2DFF+H5Mit6GCwJ5ORIHfhfAcDk+eJMaevZzdsfBfzlSDPyugGFiR4TAm9CKjo1nW39/f3jBXi3jJwqpMGU1aHdiX1heOl8fLmSaLdvS0hLQO/i0XVL5vMWFlEXPuREHGFgK9UqBsRHhywBtF68+8TIK+ND1CN8u0OQj7K65UhDnHm6E3YiXOgEV4mBXH8g20cNC4zOViANmpiN2j42N2eIbx+NsOz54iR4WmrxEuZIP7HzY+fhdgDs+eHGPWWBJpJQjxYCdrrsCj/DNJvVWfhF9jsyPxNny+o8DdkoqBYcLPjjhTQaJka+kqsj8+IovsNNXCThcQSptBl7cA5nkh1SVjxB+3PISf3U+HNe3EHgklBXtHuGaopGF1pB/0tCfK1TlSFXFCYG+p6enrJkuCo4OdN0m8MAFH5y0Ddeims5/l++8Y0/W1dV1m57wGqMUZzRsnFfx7bu+vm5zfYL+ODg4+AtqnHuQnn2v4yzJQHbBPlIuMLp9+sIRJCezAZ/FCqHZnutuPnCWZKCPr1kN9/SDfTgQuFz6gOMQmgPyw2owQyAnGfiYgn044IErynIDmoS2HtsbNfxGMCcZ+BiCXezDAU9+ov0GNIDEQb2QfEs5IXv50ODRrCkchRLsYfTIH9Enl592N0CeWvVJ3fGDfgmQzdcKb3ZN5Fii/0VH2jUiz6A3+el8c3HgT+7rlgPn/0l9R4yCUyd7KZchGUhubVg+H+tm9EMUxlj/flWZVDi7/y+2GM2XwOf5EsbHpTZBkUehsMtn0+y+je+o/rdAK/42/j/62KzyZit1kQAAAABJRU5ErkJggg==);
  background-size: 100% 100%;
}

.over-lay .dialog .dialog-content {
  max-height: 10rem;
  overflow-y: auto;
}

.over-lay .dialog .dialog-content .item {
  display: -ms-flexbox;
  display: flex;
  background-color: #fafafa;
  padding: 0.5rem 0.75rem 0.5rem 0.5rem;
}

.over-lay .dialog .dialog-content .item:not(:first-child) {
  margin-top: 0.5rem;
}

.over-lay .dialog .dialog-content .item img {
  width: 3.75rem;
  height: 3.75rem;
}

.over-lay .dialog .dialog-content .item .title-text {
  max-width: 13.4375rem;
  margin-left: 0.5rem;
}

.over-lay .dialog .dialog-content .item .title-text .title {
  line-height: 1.25rem;
  max-height: 2.5rem;
  color: #333;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
}

.over-lay .dialog .dialog-content .item .title-text .sub-title {
  color: #999;
  margin-top: 0.5rem;
}

.over-lay .dialog .dialog-tail {
  min-height: 3.125rem;
  color: #999;
  line-height: 1.0625rem;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
}

.over-lay .dialog .dialog-tail a {
  text-align: center;
  display: block;
  width: 7.8125rem;
  height: 2.25rem;
  background: #fe4070;
  border-radius: 1.25rem;
  color: #fff;
  text-decoration: none;
  line-height: 2.25rem;
  font-size: 0.9375rem;
}

.over-lay .sku-dialog {
  width: 18.125rem;
  background-color: #fff;
  border-radius: 0.3125rem;
}

.over-lay .sku-dialog .dialog-header {
  display: -ms-flexbox;
  display: flex;
  height: 2.96875rem;
  margin: 0 0.75rem;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
}

.over-lay .sku-dialog .dialog-header .one-line {
  max-width: 14.375rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 0.9375rem;
  display: block;
  font-size: 0.875rem;
  color: #333;
}

.over-lay .sku-dialog .dialog-header .dialog-close {
  position: absolute;
  right: 0;
  top: 0.75rem;
  width: 1.46875rem;
  height: 1.46875rem;
  background: url(data:image/png;base64,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);
  background-size: 100% 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
}

.over-lay .sku-dialog .dialog-header .dialog-close span {
  display: block;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAARpJREFUOBGtlDESgjAQRYkDhSWFXsLeXg9BScEpvAoNBaMNh9BeW7yEFtBJwQzmA2FCIEtAU+C6+f/tMglrWe1KkmQt4rm/sncFcxiGpyzL7lEUbebC4IEXDHgZ6HmeP6qq2jHGnrZtH4IgeJuAASvL8gYv16eu6+5Xnud9AAEMGxCYdCrD4HUc5wgWE52oAqpTStsBAaaEpoV7wCmoScEBUAdFXhwAdXijwDEociY3QQtUofhPdYZ9rPpiN+F/ntoO1QNAucWvrMJwJwFcdChjMPEpUnsoiNV7ZRPDlKYDTgmb+s2T0tZASiCD5Fjn+Wl8xXG8LYriOhhfPHHm1VNqwsjdidj3/Vd7A1Keu2B8iT1LHuNd0jCQvV83/2ZFvzah3wAAAABJRU5ErkJggg==);
  background-size: 100% 100%;
  width: 0.6875rem;
  height: 0.6875rem;
}

.over-lay .sku-dialog .dialog-content {
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  min-height: 4.6875rem;
  max-height: 7.75rem;
  overflow-y: auto;
  padding: 0.75rem;
}

.over-lay .sku-dialog .dialog-content .choose-text {
  color: #666;
}

.over-lay .sku-dialog .dialog-content .attribute-list {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.over-lay .sku-dialog .dialog-content .attribute-list .attr-item {
  margin-top: 0.75rem;
  margin-right: 0.75rem;
  height: 1.5625rem;
  line-height: 1.5625rem;
  color: #333;
  border-radius: 1.25rem;
  border: 1px solid #e0e0e0;
  display: block;
  padding: 0 0.625rem;
  max-width: 10.15625rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.over-lay .sku-dialog .dialog-content .attribute-list .attr-item.selected {
  background: #fe4070;
  color: #fff;
  border: 1px solid #fe4070;
}

.over-lay .sku-dialog .dialog-content .attribute-list .attr-item.grey {
  color: #d1d1d1;
  background: #eee;
  border: 1px solid #eee;
}

.over-lay .sku-dialog .dialog-tail {
  height: 3.4375rem;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 0.75rem;
}

.over-lay .sku-dialog .dialog-tail .red {
  font-size: 1.125rem;
}

.over-lay .sku-dialog .dialog-tail .red-btn {
  display: block;
  width: 7.8125rem;
  height: 2.25rem;
  border-radius: 3.125rem;
  background: #fe4070;
  color: #fff;
  font-size: 0.875rem;
  line-height: 2.25rem;
  text-align: center;
}

.over-confirm {
  z-index: 3;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -ms-flex-align: center;
  align-items: center;
}

.over-confirm .dialog {
  width: 18.125rem;
  background: #fff;
  border-radius: 0.3125rem;
  margin: 0 auto;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-align: center;
  align-items: center;
}

.over-confirm .dialog .cancel-text {
  width: 10.65625rem;
  height: 2.8125rem;
  margin-top: 1.40625rem;
  font-size: 0.9375rem;
  color: #333;
  line-height: 1.40625rem;
  text-align: center;
}

.over-confirm .dialog .btns {
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  -ms-flex: 1;
  flex: 1;
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: row;
  flex-direction: row;
}

.over-confirm .dialog .btns > * {
  -ms-flex: 1;
  flex: 1;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
}

.over-confirm .dialog .btns > * span {
  display: block;
  width: 7.1875rem;
  height: 2.25rem;
  text-align: center;
  line-height: 2.25rem;
  border-radius: 1.25rem;
  background: #fff;
  border: 1px solid #e3e3e3;
  color: #999;
}

.over-confirm .dialog .btns > .drop-cancel span {
  background: #fe4070;
  border: 1px solid #fe4070;
  color: #fff;
}

.over-lay .tax-dialog .dialog-content {
  overflow: hidden;
  max-height: 11.75rem;
}

.over-lay .tax-dialog .dialog-content .text {
  margin-bottom: 1rem;
  font-size: 0.9375rem;
}

.over-lay .tax-dialog .dialog-content .info {
  height: 7.25rem;
  padding: 0.75rem;
  background: #f5f5f5;
  color: #999;
  overflow-x: hidden;
  overflow-y: auto;
}

.over-lay .tax-dialog .dialog-content .info p {
  margin-top: 0.75rem;
}

.over-lay .tax-dialog .dialog-content .info p:first-child {
  margin-top: 0;
}

.cut-price {
  margin-top: 0.1875rem;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  color: #fe4070;
  font-size: 0.6875rem;
}

.cut-price .cut-price-icon {
  width: 0.75rem;
  height: 0.75rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABGdBTUEAALGPC/xhBQAAAz1JREFUWAnNmM9PE1EQx7+zGIWDCcSTJBo9Gv0HBDlgwgkPmih/gxdDEVI9ciQYAwbjrz+AAx70IKcaOVTwLzAmxkRSYgEVhUSkMdpx5m1bt9u3P9sKL0369s28mc++fTs78wgJGw/f7kHp1zDK5SEwToKoF8y9xgxRUfpFEApwnBw6Dy/S4tT3JC4orjJfHLuCMm6I/gCDD8WZR6DfopeHgzl6NfMs3pwILR7M9AM0zcx9EaqhYiJaAThLS7PLYYqBK8TXFjqw9eYul3k0zEBSGTl0D8fOj9PTkT+2uVYgvjzZje3tBQaGbJOaHROnOXR3j9DzyW2/rQagCsyKwJzxK7fyWhy/E6g+P5TjdWIek7sybYVRn+aG1ZduDU+rAzJ7pk2PyeOz1jVbQvZpbUA6tUembxMzXnuF/6tPhAvVt88TT2jaLGQCClqasWrz4Jh1PHhQfUPCCyRkSdOg12ycUTtpm/o2gVcMuHvIjcBp7bVmXoXBMd8m+Ry0xmpTVgaUxcFe6VLcb1NT7iImGwZhccDUlmgc4d8uFhYB4hN26T6MCotj8pl98G11KbmVrpCbXNk0OuoDuU2lpWPCIoGRJILLz9Z6jgKZq6D+czZp4FhgwNz4JvbuA5tBSSSxPDKsB1r+ugNMzYPfrwWqxBVwJIxYEhZ9ZMVQoz/2gPGH4A+fQtXChLFg1ICw6AoVwowZmUJNCFRhM1LVrxAbRicKiwK99BuxXu/suiulSx+zJYJRm1KpOOjqfFGpDqLd6J66+QC8Jf8Rjde3gNG5kA1cb8AwSNnkVOqmfL045EodTTwC64oFNAOjb9PnhpQ5YIYZziuLG2ikbgrTbJCtbgDZx+DdUoMoJYzmHYbBkzGOLSfOic6eAu5cB3UdMWBpYbRmk9j1L0Fzb5OzDbcbNfB2Fbj1BPyzhLQwft+1FVKBZG2zqQrD08cBDQ1fEu0Zw6KFo5TZGResmjFWr7Si1CIuafsowT4NjPoSn153dV9PU95qRalFXJub8aG+fCV1HZAymEpSK8o0KxXzJoxtS9Vq/AfZOFCHDV7IA3Mc44XS/oE5sGoA0yM9qQ5McaD5uPVIj9Yk78uZ72TCI72/g8lm3FUYKLgAAAAASUVORK5CYII=);
  background-size: 100% 100%;
  margin-right: 0.1875rem;
}

.cut-price .grey-icon {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAAfZJREFUSA21Vj1vwjAQdUxh68KIGCqxZCI/BKlVpy5dOnSt1F9Q9X9U6tK9ohI/BFiyVOoQwjcLWyJC34swcuIkTaiwFPnu/O6dfT7OWKJgDIfDtmVZN4D09vt9B3KLcMg+5G+IA8h9x3E82rOGlWV0XbcVhuFrFEUPWK9lYTTbTkr5Xq/XX2zb9jV7LBoBsOtr7O4DO7tMg4t0+Gzhc4/TfOk4qSvj8fgJwM+q5OSgD33JoXMeT3DYOckTQXVwGRlBInDcqpPEAZjzIAjcU3aeFZTpajQauBLbvyCAF/oXebfbTXCNRqOErivkIidsjxZLEcIPvsJqqRIAXBw7fFcSx2GdF5ITfcKokZsX2jvBuaxLTyJfnbLoqjhyM0Xxz7+qcxk8ueMqSoObzaZot3n3+SN96bPZTCwWC8OBKTL6x2azEZPJxADnGfLIyc0UsSsaY71ei+l0atjThjxy4sjNKhqknZS+XC7FfD5XqjEXkR/AA6aoD4U/iszBAKvVylgrQb4jt+RjwX5uMGgG3/cF70WNEuSCnOSOq4iPBZrdHSLmvgGe57Els29lVosKzhm535IzltXCudr1sfezfyPyM75IBa0605cc6i1InECRnfXJZBBG52OBS3qDmltdakPEEEsffedq/fhkKoM+863Akf/1t+UXZjYNMOD8bPsAAAAASUVORK5CYII=);
  background-size: 100% 100%;
}

.grey {
  color: #999;
}

.msg-box {
  position: fixed;
  bottom: 4.9375rem;
  left: 0;
  right: 0;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
}

.msg-box .msg-content {
  width: 12.5rem;
  height: 2.1875rem;
  background-color: rgba(254, 64, 112, 0.8);
  border-radius: 0.3125rem;
  position: relative;
}

.msg-box .msg-content .msg-text {
  font-size: 0.75rem;
  line-height: 2.1875rem;
  color: #fff;
  width: 9.75rem;
  position: absolute;
  left: 0.75rem;
  top: 0;
  text-align: center;
}

.msg-box .msg-content .msg-close-icon {
  width: 0.5rem;
  height: 0.5rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAADV0lEQVR4Xu3c65HUMAwAYKkC6AA6ACqAq4CjAugEqASoADrgqIC7Do4OoAIxmkmYJeRlyXoxzp+b2Vs79hc5dh4rhLGpBFBVehSGAagMggE4AJUCyuIjAj0Aieg1ADye9nWPiJ+U+01XnIgeAsDL1n7uRiARMdpnAHi66PE9ALxCxNt0EoIGERH3j/s5B8lcC/fvChF/blV7BPgVAF5sFOZKufLSiBMe95MjcG27QcSrZkAiup6Oyt4xLY14Am/uO4+2L2sQmxFIRO8A4O2JEVESsQGPCd4jInv8s/UA5EpLITbiiQHfAMCHExE4f6UEogCP+9c+hLkUEfEE8eR/QRTi3SHichXyh+RoFuaCNwDwoDqiEO8Xr0L2VhqHVyLTjksjWuFxUB0CTkO5bCRa4p0GrIpojdcEWA3RA68ZsAqiF54IMDuiJ54YMCuiN54KMBtiBJ4aMAtiFF4XwGjESLxugFGI0XhdAb0RM+B1B/RCzIJnAmiNmAnPDNAKMRueKWBvxIx45oC9ELPiuQBqEbk8AOw9t52+8tefwzvJa4Ukn526oSqpeFlGcWebq9p66B2K5xaBcy+FiC3Hzy3y5ka5RaADojueewQaIobghQEqJpbwc96yAe5D+LIBHc6JYZEXdg7sNDtzNeF4oUN4cT5sXedx8RTv4mQYwhK82T8cMQxQeHm2NomEIoYAdsQLj0R3QAO8UERXQEO8MEQ3QCEeL1V4S/t+ogugAm/+iUXa9xPNATV485uhwisWl9nZFLAHnvIGhDmiGWBPvMyIJoAWeFkRuwNa4mVE7ArogZcNsRugJ14mxC6AEXhZENWAkXgZEFWAGfCiEcWAmfAiEUWAGfGiEJsBM+NFIDYBVsDzRjwNWAnPE/EUYEU8L8RDwMp4HohnfvLf+tw2xRsDnd6AOLyfeAT4fSXt09qz2fmzlHjKSLxFxGdbnd4EJKLWtCep8ZSI7WlPGjIXcdtK4CkQTTMXlcITIooAzyQfK4knQGwfwrwTIuLnsc83TqCl8RoQvyHiVgrA/bwxU1ZHRlymf/oBANfVcwcuEDm93aNFsNxNmYtkCRgvdsAz8mUK0I97a5mq/5tWHk39PLwSqYrh1e4BqJQegANQKaAsPiJwACoFlMV/A31Mxm9W2zwVAAAAAElFTkSuQmCC);
  background-size: 100% 100%;
  position: absolute;
  right: 0.75rem;
  top: 0.84375rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.msg-box-tab {
  bottom: 8rem;
}

.fade-transition {
  transition: opacity 1s ease;
}

.fade-enter,
.fade-leave {
  opacity: 0;
}
</style>
