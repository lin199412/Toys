<template>
  <!-- <h2>选项卡</h2> -->
  <section class="home_tab">
    <div class="tab_head">
      <span
        v-for="tab in tabnum"
        :key="tab.num"
        v-text="tab.title"
        @click="tab_change(tab)"
        v-bind:class="tab.showit?'active':''"
      >今日10点上新</span>
    </div>
    <div class="tab_body">
      <div v-if="this.tabnum[0].showit" class="tab_today">
        <router-link
          v-for="res in result"
          :key="res.product_id"
          :to="{ name: 'HomeDetails', query: { g_id: res.product_id }}"
        >
          <div class="img_box">
            <img :src="res.image_url_set.dx_image.url[800]">
          </div>
          <div class="txt_box">
            <p class="title" v-text="res.name"></p>
            <p class="price">
              <em>￥</em>
              <span v-text="res.jumei_price"></span>
              <del>￥{{res.market_price}}</del>
            </p>
            <p class="comment" v-text="res.product_desc"></p>
          </div>
        </router-link>
        <!-- <h1>今朝有酒今朝醉</h1> -->
      </div>
      <div v-if="this.tabnum[1].showit" class="tab_today">
        <router-link
          v-for="res2 in result2"
          :key="res2.product_id"
          :to="{ name: 'HomeDetails', query: { g_id: res2.product_id }}"
        >
          <div class="img_box" v-if="res2.image_url_set.dx_image">
            <img :src="res2.image_url_set.dx_image.url[800]">
          </div>
          <div class="txt_box">
            <p class="title" v-text="res2.name"></p>
            <p class="price">
              <em>￥</em>
              <span v-text="res2.jumei_price"></span>
              <del>￥{{res2.market_price}}</del>
            </p>
            <p class="comment" v-text="res2.product_desc"></p>
          </div>
        </router-link>
        <!-- <h1>明日愁来明日愁</h1> -->
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      tabStatus: true,
      result: [],
      result2: [],
      tabnum: [
        {
          num: 1,
          title: "今日10点上新",
          showit: true
        },
        {
          num: 2,
          title: "明日10点预告",
          showit: false
        }
      ]
    };
  },
  methods: {
    tab_change(tab) {
      // this.tabStatus = !this.tabStatus;
      this.tabnum.forEach(function(item) {
        item.showit = false;
      });
      tab.showit = true;
      // if (!this.result || !this.result2) {
      //   this.$store.state.showLoading++;
      // } else if (this.result && this.result2) {
      //   this.$store.state.showLoading--;
      // }
    }
  },
  async created() {
    this.$store.state.showLoading++;
    const todaylist = await this.$axios(
      'https://www.easy-mock.com/mock/5cfb93cde5e7b850d846cd8a/example/todaynew#!method=get'
    )
    // console.log(todaylist.data.item_list);

    this.result = todaylist.data.item_list;
    this.$store.state.showLoading--;
    // console.log(this.result[0].image_url_set.dx_image.url[800]);
    this.$store.state.showLoading++;
    const todaylist2 = await this.$axios(
      "https://www.easy-mock.com/mock/5cfb93cde5e7b850d846cd8a/example/todaylist2#!method=get"
    );
    // console.log(todaylist2.data.item_list);
    this.result2 = todaylist2.data.item_list;
    this.$store.state.showLoading--;
    // console.log(this.result2[0].image_url_set.dx_image.url[800]);
  }
}
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.home_tab {
  width: 100%;
  overflow: hidden;
  .tab_head {
    width: 100%;
    height: 44px;
    text-align: center;
    span {
      width: 50%;
      height: 44px;
      display: inline-block;
      font-size: 14px;
      line-height: 44px;
      &.active {
        color: #fe4070;
      }
    }
  }
  .tab_body {
    width: 100%;
    .tab_today {
      a {
        width: 100%;
        height: 130px;
        display: inline-block;
        border-bottom: 8px solid #eee;
        position: relative;
        .img_box {
          height: 100%;
          img {
            height: 100%;
          }
        }
        .txt_box {
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
          .comment {
            color: #999;
            font-size: 11px;
          }
        }
      }
    }
  }
}
</style>
