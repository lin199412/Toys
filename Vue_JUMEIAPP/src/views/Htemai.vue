<template>
  <div class="temai">
    <!-- <h1>特卖</h1> -->
    <HometThead v-bind:headnames="headnames"/>
    <HomeSearch/>
    <HomeNav/>
    <Loading/>
    <div class="part_special head_box">
      <div class="box_head">
        <span class="head_txt">精选活动</span>
      </div>
      <div class="box_body body_special">
        <a href v-for="tm in tm_data" :key="tm.itemid">
          <div class="box_img">
            <img :src="tm.image_url_set.main[800]" alt>
            <span class="discount" v-text="tm.discount_string"></span>
          </div>
          <div class="box_name">
            <h3 class="brand_name" v-text="tm.title"></h3>
            <div class="clock"></div>
          </div>
          <div class="box_icon">
            <img :src="tm.image_url_set.brand[800]" alt>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HomeNav from "@/components/HomeNav.vue";
import HometThead from "@/components/HometThead.vue";
import HomeSearch from "@/components/HomeSearch.vue";
import Loading from "@/components/Loading.vue";
export default {
  name: 'home',
  components: {
    HomeNav,
    HometThead,
    HomeSearch,
    Loading
  },
  data() {
    return {
      tm_data: [],
      headnames: "名品特卖"
    };
  },
  async created() {
    this.$store.state.showLoading++;
    const tm_list = await this.$axios(
      "https://www.easy-mock.com/mock/5cfb93cde5e7b850d846cd8a/example/remailist#!method=get"
    );
    console.log(tm_list.data.item_list);
    this.tm_data = tm_list.data.item_list;
    // console.log(this.my_data[0].image_url_set.dx_image.url[800]);
    console.log(this.tm_data[0].image_url_set.brand[800]);
    this.$store.state.showLoading--;
  }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.temai {
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
