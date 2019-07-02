<template>
  <section class="ms_list_box">
    <div class="box_head">
      <span class="head_txt">今日团购，每天10点上新</span>
    </div>
    <ul class="box_body">
      <li v-for="ms in ms_data" :key="ms.product_id">
        <router-link :to="{ name: 'HomeDetails', query: { g_id: ms.product_id }}">
          <div class="goods_img" v-if="ms.image_url_set.dx_image">
            <!-- <img
              src="http://mp6.jmstatic.com/product/003/184/3184362_std/3184362_dx_1154_400.jpg?_t=1554814904&imageView2/2/w/800/q/90"
              alt
            > -->
            <img :src="ms.image_url_set.dx_image.url[800]">
          </div>
          <div class="goods_txt">
            <p class="title" v-text="ms.name"></p>
            <p class="price">
              <em>￥</em>
              <span v-text="ms.jumei_price"></span>
              <del>￥{{ms.market_price}}</del>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  data () {
    return {
      ms_data: []
    }
  },
  async created () {
    this.$store.state.showLoading++;
    const ms_list = await this.$axios(
      'https://www.easy-mock.com/mock/5cfb93cde5e7b850d846cd8a/example/mslist#!method=get'
    )
    console.log(ms_list.data.item_list)
    this.ms_data = ms_list.data.item_list;
    // console.log(this.result[0].image_url_set.dx_image.url[800]);
        this.$store.state.showLoading--;
  }
}
</script>
<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}
.ms_list_box {
  width: 100%;
  overflow: hidden;
  .box_head {
    text-align: center;
    height: 40px;
    .head_txt {
      color: #333;
      font-size: 14px;
      display: inline-block;
      line-height: 40px;
      background: url(http://f0.jmstatic.com/btstatic/h5/common/icon_title.png)
        no-repeat;
      background-position: left center;
      padding-left: 20px;
    }
  }
  .box_body {
    li {
      a {
        width: 100%;
        height: 130px;
        display: inline-block;
        border-bottom: 8px solid #eee;
        position: relative;
        .goods_img {
          height: 100%;
          img {
            height: 100%;
          }
        }
        .goods_txt {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 56%;
          .title {
            color: #333;
            font-size: 13px;
            line-height: 17px;
            height: 66px;
          }
          .price {
            color: #fe4070;

            em {
              font-size: 12px;
            }
            span {
              font-size: 20px;
              margin: 0 2px;
            }
            del {
              color: #999;
            }
          }
        }
      }
    }
  }
}
</style>
