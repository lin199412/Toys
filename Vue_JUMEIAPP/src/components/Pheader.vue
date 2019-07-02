<template>
  <div>
    <div class="nav-con" style="position: fixed; left: 0px; top: 0px;">
      <div class="nav-outer" id="nav-outer" style="overflow-x: scroll;">
        <div class="list-tab" id="nav-inner" style="width: 2160px;">
          <a data-tab="coutuan_home" v-for="(item,index) in headList" :key="index" @click="gomenu(index)" :class="{'active':indexput==index}" v-text="item.title">
          </a>
        </div>
      </div>
    </div>
    <div class="tab-con tabcon-ptop">
      <div class="module-container tab-on" tab="coutuan_home">
        <section class="product-items">
          <ul class="product-con" tab="coutuan_home">
            <li v-for="(item,index) in mainList" :key="index">
              <a class="goods">
                <div class="people-number" v-text="item.buyer_number_text"></div>
                <div class="goods-topsmall">
                  <img :src="item.image">
                </div>
                <div class="goods-middle">
                  <span class="goods-num" v-text="item.group_name_tag"></span>{{item.short_name}}
                </div>
                <div class="goods-foot">
                  <div class="price-left">
                    <span class="ct-price" v-text="item.jumei_price"></span>
                    <span class="sc-price" v-text="item.market_price"></span>
                    <span class="jm-price" v-text="item.single_price"></span>
                  </div>
                  <div class="time-right timer" data-time="58356">
                    <span class="sy-time" style="display:none;">仅剩16:10:35</span>
                    <span class="goods-btn">去开团</span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
          <div class="load-next" style="transform-origin: 0px 0px; opacity: 1;">
            <span></span>加载更多
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      headList: [
        {
          title: '推荐',
          name: 'home',
          user: 'home'
        },
        {
          title: '母婴健康',
          name: 'baby',
          user: 'baby'
        },
        {
          title: '美妆',
          name: 'makeup',
          user: 'makeup'
        },
        {
          title: '礼品箱包',
          name: 'bag',
          user: 'bag'
        },
        {
          title: '饰品配饰',
          name: 'jewellery',
          user: 'jewellery'
        },
        {
          title: '内衣',
          name: 'underwear',
          user: 'underwear'
        },
        {
          title: '食品保健',
          name: 'food',
          user: 'food'
        },
        {
          title: '家居',
          name: 'furniture',
          user: 'furniture'
        },
        {
          title: '数码家电',
          name: 'code',
          user: '3c'
        },
        {
          title: '女装',
          name: 'ladies',
          user: 'ladies'
        },
        {
          title: '运动户外',
          name: 'sports',
          user: 'sports'
        },
        {
          title: '鞋类',
          name: 'shoes',
          user: 'shose'
        },
        {
          title: '下期预告',
          name: 'pre',
          user: 'pre'
        }
      ],
      indexput: 0,
      mainList: []
    }
  },
  methods: {
    async gomenu (index) {
      this.indexput = index
      // console.log(this.indexput);
      let url =
        '/api/yiqituan/tab_list?tab=coutuan_' +this.headList[this.indexput].user +'&page=1&per_page=20'
      //   http://s.h5.jumei.com/yiqituan/tab_list?tab=coutuan_home&page=1&per_page=20
      const data = await this.$axios.get(url)
      this.mainList = data.data.data
    }
  },
  async created () {
    this.gomenu(0)
  }
}
</script>
<style scoped>
html {
  line-height: 1.2;
  font-size: 37px;
  -webkit-font-smoothing: antialiased;
}
/*
li {
  list-style-type: none;
}

body {
  margin: 0 auto;
  padding: 0;
  overflow-x: hidden;
  background-color: #fff;
  font-family: "Helvetica Neue", Helvetica, STHeiTi, sans-serif;
}

a,
div,
footer,
form,
h1,
h2,
h3,
header,
input,
li,
p,
section,
span,
ul {
  margin: 0;
  box-sizing: border-box;
  padding: 0;
}

a {
  text-decoration: none;
}

a:focus,
a:hover {
  outline: 0;
}

input:focus {
  outline: 0;
}

input {
  -webkit-appearance: none;
}

::-moz-selection {
  text-shadow: none;
}

::selection {
  text-shadow: none;
}

body {
  color: #424242;
  background: #f5f5f5;
} */

.nav-con {
  width: 100%;
  z-index: 2;
  overflow: hidden;
}

.nav-outer {
  overflow-y: hidden;
}

.list-tab {
  width: auto;
  padding: 0 21px;
  white-space: nowrap;
  border-bottom: 3px solid #eee;
  background: #fff;
  z-index: 10;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-justify-content: space-around;
  justify-content: space-around;
}

.list-tab a {
  padding: 0 5px;
  color: #666;
  display: inline-block;
  text-align: center;
  position: relative;
  border-bottom: 2px solid white;
  box-sizing: border-box;
  /* flex: 1; */
  /* margin: 0 10px; */
}

.list-tab a span {
  display: none;
}

.list-tab a.active {
  border-bottom: 2px solid #fe4070;
  color: #fe4070;
}

.list-tab a.active span {
  display: block;
  background: #fe4070;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.07rem;
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
}

.module-container {
  display: none;
}

.tab-on {
  display: block;
}

.product-con li {
  background: #fff;
}

.product-con li a {
  width: 100%;
  display: block;
  overflow: hidden;
  position: relative;
}

.new-order {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  border-radius: 1.5625rem;
  color: #fff;
}

.new-order img {
  border-radius: 50%;
  float: left;
}

.people-number {
  position: absolute;
  left: 0;
  top: 100px;
  z-index: 1;
  border: 0.0625rem solid #eee;
  border-left: 0;
  border-top-right-radius: 1.5625rem;
  border-bottom-right-radius: 1.5625rem;
  color: #666;
  background: rgba(251, 251, 251, 0.8);
}

.goods-topsmall {
  overflow: hidden;
  text-align: center;
}

.goods-topsmall img {
  margin: 0 auto;
  height: 150px;
}

.goods-topbig {
  text-align: center;
}

.goods-topbig img {
  width: 100%;
}

.goods-middle {
  font-size: 0.875rem;
  color: #424242;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.goods-type {
  display: inline-block;
  color: #fff;
  background-color: #fe4070;
}

.goods-num {
  color: #fe4070;
  display: inline-block;
}

.goods-foot {
  overflow: hidden;
}

.price-left {
  float: left;
  font-family: Arial;
}

.time-right {
  float: right;
  border: 0.0625rem solid #fe4070;
  margin-top: 0.25rem;
  background: #fe4070;
}

.ct-price {
  color: #fe4070;
}

.jm-price {
  color: #999;
  display: block;
}

.sc-price {
  color: #999;
  text-decoration: line-through;
}

.sy-time {
  padding-right: 0.375rem;
  padding-left: 0.6875rem;
  float: left;
  color: #f85386;
  background: #fff;
  border-top-left-radius: 1.5625rem;
  border-bottom-left-radius: 1.5625rem;
}

.goods-btn {
  width: 2.266667rem;
  background: #fe4070;
  float: right;
  color: #fff;
  text-align: center;
  border-right: 0.0625rem solid #fe4070;
}

.time-end {
  width: 5rem;
  float: right;
  color: #a9a9a9;
  text-align: center;
  border: 0.0625rem solid #d1d1d1;
}

.time-start {
  padding: 0 1.5rem;
  float: right;
  text-align: center;
  color: #fe4070;
  border: 0.0625rem solid #fe4070;
}

.load-next {
  width: 100%;
  color: #999;
  text-align: center;
}

.load-next span {
  display: inline-block;
  width: 1rem;
  vertical-align: middle;
  background: url(http://a2.jmstatic.com/aac8bb0d547421ec/loading.png) no-repeat;
}

/*.go_top {
  width: 2.1875rem;
  height: 2.1875rem;
  position: fixed;
  right: 0.75rem;
  bottom: 2.75rem;
  display: none;
}

.go_top img {
  width: 2.1875rem;
}

.tips {
  width: 100%;
  color: #999;
  text-align: center;
}

.ui-slider-boxs {
  width: 100%;
  overflow: hidden;
  position: relative;
  height: 8.41rem;
  background: #fff;
}

.ui-slider-boxs img {
  width: 100%;
}

.ui-slider-dots {
  text-align: center;
  margin-top: 0;
  width: 100%;
  position: absolute;
  bottom: 0.4375rem;
}

.ui-slider-dots b {
  display: inline-block;
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 0.375rem;
  margin-right: 0.3125rem;
  background: #fff;
}

.ui-slider-dots b.ui-dot-select {
  background: #ed145b;
}

.list-items {
  background: #fff;
  margin-bottom: 0.625rem;
}

.metra-lists {
  position: relative;
  margin: 0 0.4375rem;
  padding-bottom: 0.4375rem;
}

.metra-list {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  overflow: hidden;
}

.metra-list img {
  width: 100%;
}

.metra-list,
.metra-list img {
  display: block;
}

.items-icon-title,
.items-title {
  padding: 0.625rem 0;
}

.items-title span {
  border-left: #ed145b solid 0.125rem;
  margin: 0.625rem 0 0.625rem 0.625rem;
  padding-left: 1rem;
}

.items-icon-title {
  background-size: auto 0.875rem;
  padding-left: 1.625rem;
  background-position: 0.625rem center;
  background-repeat: no-repeat;
}

.new-list-items {
  background: #fff;
  margin-bottom: 0.625rem;
}

.new-metro-img {
  width: 2.4rem;
  height: 2.4rem;
  margin: 0 auto;
  margin-bottom: 0.32rem;
  overflow: hidden;
}

.new-metro-img img {
  width: 100%;
}

.new-metro-title {
  color: #666;
  width: 2.4rem;
  overflow: hidden;
  font-size: 0.5333rem;
}

.new-metro-list {
  padding-top: 0.8rem;
  background: #fff;
}

.new-metro-list a {
  display: inline-block;
  margin-bottom: 0.8rem;
  text-align: center;
}

.new-metro-list-5,
.new-metro-list-5 a {
  padding-left: 0.6667rem;
  padding-right: 0.6667rem;
}

.new-metro-list-4,
.new-metro-list-4 a {
  padding-left: 1.04rem;
  padding-right: 1.04rem;
}

.new-metro-list-3,
.new-metro-list-3 a {
  padding-left: 1.6rem;
  padding-right: 1.6rem;
}

.clear:after,
.clearfloat:after {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0;
}
/* Date: 2019-05-16T12:05:29Z Path: css/touch/yiqituan/newlistsize.css */
.nav-con {
  height: 44px;
}

.nav-outer {
  height: 44px;
}

.list-tab {
  height: 1.13rem;
}

.list-tab a {
  font-size: 14px;
  height: 44px;
  line-height: 44px;
}

.tabcon-ptop {
  padding-top: 44px;
}

.product-con li {
  margin-bottom: 8px;
}

.new-order {
  padding-right: 6px;
  height: 26px;
  left: 12px;
  top: 10px;
  font-size: 10px;
  line-height: 26px;
}

.new-order img {
  width: 22px;
  height: 22px;
  padding-left: 2px;
  padding-top: 2px;
  padding-right: 2px;
}

.people-number {
  font-size: 11px;
  padding: 4px 7px;
}

.goods-middle {
  font-size: 14px;
  max-height: 34px;
  line-height: 18px;
  padding: 0 12px;
  margin-top: 10px;
}

.goods-type {
  font-size: 11px;
  border-radius: 4px;
  padding: 0 3px;
}

.goods-num {
  margin-left: 2px;
}

.goods-foot {
  padding: 12px 12px 12px 12px;
}

.time-right {
  border-radius: 25px;
}

.ct-price {
  font-size: 18px;
}

.jm-price {
  font-size: 11px;
}

.sc-price {
  font-size: 12px;
  padding-left: 4px;
}

.sy-time {
  padding-top: 6px;
  padding-bottom: 6px;
  min-width: 90px;
  float: left;
  font-size: 13px;
}

.goods-btn {
  height: 26px;
  border-radius: 25px;
  line-height: 26px;
  font-size: 14px;
}

.time-end {
  font-size: 13px;
  padding: 6px 15px;
  border-radius: 25px;
}

.time-start {
  font-size: 13px;
  padding: 6px 25px;
  border-radius: 25px;
}

.load-next {
  font-size: 14px;
  padding-top: 8px;
  margin-bottom: 60px;
  line-height: 20px;
  background: #f5f5f5;
}

.tips {
  font-size: 14px;
  margin-bottom: 8px;
  line-height: 20px;
}

.load-next span {
  margin-right: 2px;
  height: 16px;
  background-size: 16px auto;
}

/*.items-icon-title,
.items-title {
  font-size: 14px;
  font-weight: 700;
}

.items-title span {
  font-size: 14px;
}

.topBanner {
  display: block;
  margin-bottom: 10px;
  width: 100%;
}

.topBanner img {
  width: 100%;
  display: block;
} */
</style>
