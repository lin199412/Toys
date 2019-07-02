<template>
  <div class="qingshe">
    <!-- <h1>轻奢</h1> -->
    <HometThead v-bind:headnames="headnames"/>
    <HomeSearch/>
    <HomeNav/>
    <HqsBanner/>
    <Loading/>
    <div class="part_today head_box">
      <div class="box_head">
        <span class="head_txt">今日特惠</span>
      </div>
      <div class="box_body body_today">
        <img
          src="http://mp5.jmstatic.com/mobile/card_material/item_1654_2048_1024-ipad2048_1560246997.jpeg?imageView2/2/w/640/q/90"
          alt
        >
      </div>
    </div>
    <div class="part_hot head_box">
      <div class="box_head">
        <span class="head_txt">今日热销品牌</span>
      </div>
      <div class="box_body body_hot">
        <div class="one">
          <img
            src="http://mp5.jmstatic.com/mobile/card_material/item_0_2048_1024-ipad2048_5cfe2e50a7fe6.jpg?t=1560161872&imageView2/2/w/640/q/90"
            alt
          >
        </div>
        <div class="two">
          <img
            src="http://mp5.jmstatic.com/mobile/card_material/item_0_1024_1024-ipad2048_5cfe2e5f597ca.jpg?t=1560161887&imageView2/2/w/640/q/90"
            alt
          >
          <img
            src="http://mp5.jmstatic.com/mobile/card_material/item_0_1024_1024-ipad2048_5cfe2e6a7c2a4.jpg?t=1560161898&imageView2/2/w/640/q/90"
            alt
          >
        </div>
      </div>
    </div>
    <div class="part_recommend head_box">
      <div class="box_head">
        <span class="head_txt">活动推荐</span>
      </div>
      <div class="box_body body_recommend">
        <img
          src="http://mp5.jmstatic.com/mobile/card_material/item_2835_2048_1024-ipad2048_1559540440.jpeg?imageView2/2/w/640/q/90"
          alt
        >
      </div>
    </div>
    <div class="part_special head_box">
      <div class="box_head">
        <span class="head_txt">精选活动</span>
      </div>
      <div class="box_body body_special">
        <a href v-for="qs in qs_data" :key="qs.itemid">
          <div class="box_img">
            <img :src="qs.image_url_set.main[800]" alt>
            <span class="discount" v-text="qs.discount_string"></span>
          </div>
          <div class="box_name">
            <h3 class="brand_name" v-text="qs.title"></h3>
            <div class="clock"></div>
          </div>
          <div class="box_icon">
            <img :src="qs.image_url_set.brand[800]" alt>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeNav from "@/components/HomeNav.vue";
import HometThead from "@/components/HometThead.vue";
import HomeSearch from "@/components/HomeSearch.vue";
import HqsBanner from "@/components/HqsBanner.vue";
import Loading from "@/components/Loading.vue";
export default {
  name: 'home',
  components: {
    HomeNav,
    HometThead,
    HomeSearch,
    HqsBanner,
    Loading
  },
  data() {
    return {
      qs_data: [],
      headnames: "轻奢"
    };
  },
  async created() {
    this.$store.state.showLoading++;
    const qs_list = await this.$axios(
      "https://www.easy-mock.com/mock/5cfb93cde5e7b850d846cd8a/example/qingshelist#!method=get"
    );
    console.log(qs_list.data.item_list);
    this.qs_data = qs_list.data.item_list;
    // console.log(this.my_data[0].image_url_set.dx_image.url[800]);
    console.log(this.qs_data[0].image_url_set.brand[800]);
    this.$store.state.showLoading--;
  }
}
</script>

<style lang="scss" scoped>
.qingshe {
  width: 100%;
  .head_box {
    width: 100%;
    border-bottom: 8px solid #eee;
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
      width: 100%;
    }
    .body_today {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .body_hot {
      width: 100%;
      .one {
        width: 100%;
        img {
          width: 100%;
        }
      }
      .two {
        width: 100%;
        img {
          width: 50%;
        }
      }
    }
    .body_recommend {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .body_special {
      width: 100%;
      margin-bottom: 50px;
      a {
        display: block;
        width: 100%;
        text-decoration: none;
        .box_img {
          margin: 0;
          height: auto;
          position: relative;
          img {
            width: 100%;
            // height: 320px;
            max-width: 640px;
          }
          span {
            position: absolute;
            left: 00px;
            bottom: 18px;
            color: #fff;
            font-size: 11px;
            text-align: center;
            padding: 3px;
            background-color: #000;
            display: inline-block;
          }
        }
        .box_name {
          float: left;
          margin: 10px 20px;
          .brand_name {
            color: #333;
            font-size: 14px;
            font-weight: 400;
          }
          .clock {
          }
        }
        .box_icon {
          float: right;
          width: 71px;
          padding: 10px 10px;
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
