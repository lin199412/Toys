<template>
  <section class="muying">
    <!-- <h1>母婴</h1> -->
    <HometThead v-bind:headnames="headnames"/>
    <HomeSearch/>
    <HomeNav/>
    <Loading/>
    <div class="banner">
      <img
        src="http://mp6.jmstatic.com/mobile/card_material/item_469_2048_838-ipad2048_1560247809.jpeg?imageView2/2/w/640/q/90"
        alt
      >
    </div>
    <div class="part_today head_box">
      <div class="box_head">
        <span class="head_txt">今日特惠</span>
      </div>
      <div class="box_body body_today">
        <img
          src="http://mp5.jmstatic.com/mobile/card_material/item_7710_2048_1024-ipad2048_1556071389.jpeg?imageView2/2/w/640/q/90"
          alt
        >
      </div>
    </div>
    <div class="part_618 head_box">
      <div class="box_head">
        <span class="head_txt">聚美618 提前加购</span>
      </div>
      <div class="box_body body_618">
        <a href>
          <img
            src="http://mp5.jmstatic.com/mobile/card_material/item_2969_1024_1024-ipad2048_1559127402.jpeg?imageView2/2/w/320/q/90"
            alt
          >
        </a>
        <a href>
          <img
            src="http://mp5.jmstatic.com/mobile/card_material/item_2969_1024_1024-ipad2048_1559198909.jpeg?imageView2/2/w/320/q/90"
            alt
          >
        </a>
        <a href>
          <img
            src="http://mp6.jmstatic.com/mobile/card_material/item_2969_1024_1024-ipad2048_1559633721.jpeg?imageView2/2/w/320/q/90"
            alt
          >
        </a>
        <a href>
          <img
            src="http://mp5.jmstatic.com/mobile/card_material/item_2969_1024_1024-ipad2048_1559199451.jpeg?imageView2/2/w/320/q/90"
            alt
          >
        </a>
        <a href>
          <img
            src="http://mp5.jmstatic.com/mobile/card_material/item_2969_1024_1024-ipad2048_1559203721.jpeg?imageView2/2/w/320/q/90"
            alt
          >
        </a>
        <a href>
          <img
            src="http://mp6.jmstatic.com/mobile/card_material/item_2969_1024_1024-ipad2048_1559195313.jpeg?imageView2/2/w/320/q/90"
            alt
          >
        </a>
      </div>
    </div>
    <div class="part_global head_box">
      <div class="box_head">
        <span class="head_txt">全球热销品牌</span>
      </div>
      <div class="box_body body_global">
        <a href>
          <img
            src="http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1502086238.jpeg?imageView2/2/w/160/q/90"
            alt
          >
        </a>
        <a href>
          <img
            src="http://mp4.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1498543173.jpeg@base@tag=imgScale&w=160&q=90"
            alt
          >
        </a>
        <a href>
          <img
            src="http://mp6.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1548055580.jpeg?imageView2/2/w/160/q/90"
            alt
          >
        </a>
        <a href>
          <img
            src="http://mp6.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1551235310.jpeg?imageView2/2/w/160/q/90"
            alt
          >
        </a>
        <a href>
          <img
            src="http://mp6.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1548056454.jpeg?imageView2/2/w/160/q/90"
            alt
          >
        </a>
        <a href>
          <img
            src="http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1498543566.jpeg?imageView2/2/w/160/q/90"
            alt
          >
        </a>
        <a href>
          <img
            src="http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1548055217.png?imageView2/2/w/160/q/90"
            alt
          >
        </a>
        <a href>
          <img
            src="http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1498559288.jpeg?imageView2/2/w/160/q/90"
            alt
          >
        </a>
      </div>
    </div>
    <div class="part_special head_box">
      <div class="box_head">
        <span class="head_txt">精选活动推荐</span>
      </div>
      <div class="box_body body_special">
        <a href>
          <img
            src="http://mp5.jmstatic.com/mobile/card_material/item_5640_1024_1024-ipad2048_1559639525.jpeg?imageView2/2/w/320/q/90"
            alt
          >
        </a>
        <a href>
          <img
            src="http://mp6.jmstatic.com/mobile/card_material/item_5640_1024_1024-ipad2048_1559616766.jpeg?imageView2/2/w/320/q/90"
            alt
          >
        </a>
        <a href>
          <img
            src="http://mp5.jmstatic.com/mobile/card_material/item_5640_1024_1024-ipad2048_1559705479.jpeg?imageView2/2/w/320/q/90"
            alt
          >
        </a>
        <a href>
          <img
            src="http://mp5.jmstatic.com/mobile/card_material/item_5640_1024_1024-ipad2048_1559616175.jpeg?imageView2/2/w/320/q/90"
            alt
          >
        </a>
      </div>
    </div>
    <div class="part_crazy head_box">
      <div class="box_head">
        <span class="head_txt">今日特惠</span>
      </div>
      <div class="box_body body_crazy">
        <a href v-for="my in my_data" :key="my.itemid">
          <div class="box_img">
            <!-- <img
              src="http://mp5.jmstatic.com/jmstore/image/000/001/1823_std/5cf75fa169d3e_1024_512.jpg?1560322084&imageView2/2/w/640/q/90"
              alt
            >-->
            <img :src="my.image_url_set.main[800]" alt>
            <span class="discount" v-text="my.discount_string"></span>
          </div>
          <div class="box_name">
            <h3 class="brand_name" v-text="my.title"></h3>
            <div class="clock"></div>
          </div>
          <div class="box_icon">
            <img :src="my.image_url_set.brand[800]" alt>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import HomeNav from "@/components/HomeNav.vue";
import HometThead from "@/components/HometThead.vue";
import HomeSearch from "@/components/HomeSearch.vue";
import Loading from "@/components/Loading.vue";
export default {
  components: {
    // HelloWorld
    HomeNav,
    HometThead,
    HomeSearch,
    Loading
  },
  data() {
    return {
      my_data: [],
      headnames: "母婴"
    };
  },
  async created() {
    this.$store.state.showLoading++;
    const my_list = await this.$axios(
      "https://www.easy-mock.com/mock/5cfb93cde5e7b850d846cd8a/example/muyinglist#!method=get"
    );
    // console.log(my_list.data.item_list);
    this.my_data = my_list.data.item_list;
    // console.log(this.my_data[0].image_url_set.dx_image.url[800]);
    // console.log(this.my_data[0].image_url_set.brand[800]);
    this.$store.state.showLoading--;
  }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.muying {
  width: 100%;
  .banner {
    // height: 157px;
    width: 100%;
    img {
      width: 100%;
    }
  }
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
    .body_618 {
      width: 100%;
      a {
        display: inline-block;
        width: 50%;
        text-decoration: none;
        img {
          width: 100%;
        }
      }
    }
    .body_global {
      width: 100%;
      a {
        display: inline-block;
        width: 25%;
        text-decoration: none;
        img {
          width: 100%;
        }
      }
    }
    .body_special {
      width: 100%;
      a {
        display: inline-block;
        width: 50%;
        text-decoration: none;
        img {
          width: 100%;
        }
      }
    }
    .body_crazy {
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
