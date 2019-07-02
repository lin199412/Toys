<template>
  <section class="goods_details">
    <!-- 头部 -->
    <HometThead v-bind:headnames="headnames"/>
    <!-- 商品详情 -->
    <div class="goods_info">
      <div class="img_box">
        <img :src="g_img" alt>
      </div>
      <div class="txt_box">
        <span class="price_on">￥{{g_price_on}}</span>
        <span class="price_off">￥{{g_price_off}}</span>
        <span class="comments" v-text="g_comment"></span>
      </div>
      <p class="goods_name" v-text="g_title"></p>
    </div>
    <!-- 按钮 -->
    <div class="detail_foot">
      <div class="foot_lt">
        <a class="shop" href>店铺</a>
        <a class="cart" href>购物车</a>
      </div>
      <div class="foot_rt">
        <a class="btn_cart" href>加入购物车</a>
        <a class="btn_buy" href>立即购买</a>
      </div>
    </div>
  </section>
</template>
<script>
import HometThead from "@/components/HometThead.vue";
export default {
  components: {
    // HelloWorld
    HometThead
  },
  data() {
    return {
      headnames: "",
      g_img: "",
      g_title: "",
      g_price_on: "",
      g_price_off: "",
      g_comment: "",
      sy_list: []
    };
  },
  async created() {
    const home_goods = await this.$axios(
      "https://www.easy-mock.com/mock/5cfb93cde5e7b850d846cd8a/example/todaynew#!method=get"
    );
    // console.log(home_goods.data.item_list);

    const home_goods2 = await this.$axios(
      "https://www.easy-mock.com/mock/5cfb93cde5e7b850d846cd8a/example/todaylist2#!method=get"
    );
    // console.log(home_goods2.data.item_list);
        const home_goods3 = await this.$axios(
      'https://www.easy-mock.com/mock/5cfb93cde5e7b850d846cd8a/example/mslist#!method=get'
    )
    // console.log(home_goods3.data.item_list);
    // this.ms_data = ms_list.data.item_list;
    this.sy_list = [...home_goods.data.item_list,...home_goods2.data.item_list,...home_goods3.data.item_list];
    console.log(this.$route.query.g_id);
    for (var value of this.sy_list) {
      if (value.product_id == this.$route.query.g_id) {
        console.log(value.name);
        this.g_img = value.image_url_set.dx_image.url[800];
        this.g_title = value.name;
        this.headnames = value.short_name;
        this.g_price_on = value.jumei_price;
        this.g_price_off = value.market_price;
        this.g_comment = value.product_desc;
      }
    }
  },
  mounted() {
    this.$store.state.showFoot = false;
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
.goods_details {
  .goods_info {
    .img_box {
      width: 100%;
      height: 80vw;
      overflow: hidden;
      img {
        height: 100%;
      }
    }
    .txt_box {
      width: 100%;
      height: 28px;
      margin-bottom: 16px;
      .price_on {
        color: #f33873;
        font-size: 28px;
        margin-left: 11px;
      }
      .price_off {
        color: #666666;
        font-size: 13px;
        text-decoration: line-through;
      }
      .comments {
        float: right;
        font-weight: 400;
        color: #666;
        font-size: 13px;
        line-height: 28px;
        padding: 5px 10px;
      }
    }
    .goods_name {
      font-size: 14px;
      padding: 10px 13px;
    }
  }
  .detail_foot {
    width: 100%;
    height: 50px;
    text-align: center;
    border: 1px solid #eee;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 99;
    .foot_lt {
      width: 33%;
      height: 50px;
      float: left;
      font-size: 10px;
      text-align: center;
      .shop {
        width: 46%;
        height: 50px;
        display: inline-block;
        color: #979797;
        border-right: 1px solid #eee;

        background: url(../assets/icon_details_shop.png) no-repeat center 8px;
        background-size: 19.5px 18px;
        box-sizing: border-box;
        padding-top: 31px;
      }
      .cart {
        width: 53%;
        height: 50px;
        display: inline-block;
        color: #979797;
        background: url(../assets/icon_details_cart.png) no-repeat center 8px;
        background-size: 18px 20px;
        box-sizing: border-box;
        padding-top: 31px;
      }
    }
    .foot_rt {
      width: 66%;
      float: left;
      height: 50px;
      .btn_cart {
        width: 50%;
        height: 50px;
        display: inline-block;
        background: linear-gradient(210deg, #ffcfdf 0%, #fff1f6 98%);
        color: #fe4070;
        font-size: 14px;
        line-height: 50px;
      }
      .btn_buy {
        width: 50%;
        height: 50px;
        display: inline-block;
        background: linear-gradient(142deg, #ff5593 0%, #fe4070 100%);
        color: #fff;
        font-size: 14px;
        line-height: 50px;
      }
    }
  }
}
</style>
