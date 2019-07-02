<template>
  <section class="home_search">
    <!-- <h2>搜索框</h2> -->
    <div class="search_box">
      <div class="box_input" @click="jump()">
        <span>搜索商品 分类 功效</span>
      </div>
      <span class="box_img">
        <img src="https://f0.jmstatic.com/btstatic/h5/index/search_list2.png" alt>
      </span>
    </div>
    <transition name="bounce">
      <div class="search_page" v-show="isshowsSearch">
        <div class="page_head">
          <i @click="close()"></i>
          <div class="text_box">
            <img src="http://f0.jmstatic.com/btstatic/h5/common/search_btn.png" alt>
            <input type="text" placeholder="搜索商品名称、品牌、功效">
          </div>
          <span>搜索</span>
        </div>
      </div>
    </transition>
  </section>
</template>
<script>
// import "../assets/animate.css";
export default {
  data () {
    return {
      isshowsSearch: false
    }
  },
  methods: {
    jump () {
      console.log('1212')
      this.isshowsSearch = true
    },
    close () {
      this.isshowsSearch = false
    }
  }
}
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
.home_search {
  width: 100%;
  height: 46px;
  .search_box {
    width: 100%;
    height: 46px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .box_input {
      width: 80%;
      height: 31px;
      display: inline-block;
      color: #999;
      background: #f5f5f5;
      // box-shadow: 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.05);
      margin-left: 20px;
      border-radius: 24px;
      font-size: 14px;
      line-height: 31px;
      text-align: center;
      span {
        background: url(https://f0.jmstatic.com/btstatic/h5/common/search_btn.png)
          no-repeat;
        background-position: left 3px;
        padding-left: 18px;
      }
    }
    .box_img {
      margin-right: 16px;
      width: 24px;
      img {
        width: 100%;
      }
    }
  }
  .search_page {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background: #fff;
    left: 0;
    top: 0;
    overflow: hidden;
    .page_head {
      width: 100%;
      height: 45px;
      background: #fff;
      border-bottom: #ddd 1px solid;
      display: flex;
      justify-content: space-around;
      align-items: center;
      i {
        background: url(../assets/left_arrow.png) no-repeat;
        display: inline-block;
        width: 8px;
        height: 16px;
      }
      .text_box {
        width: 66%;
        height: 31px;
        display: inline-block;
        color: #999;
        background: #f5f5f5;
        border-radius: 24px;
        font-size: 14px;
        line-height: 31px;
        // text-align: center;
        img {
          // width: 25%;
          float: left;
          padding: 8px 8px 0 15px;
        }
        input {
          height: 31px;
          float: left;
          width: 70%;
          color: #999;
          outline: none;
          text-transform: none;
          font-size: 14px;
          background: #f5f5f5;
          border: none;
        }
      }
      span {
        color: #999;
        font-size: 14px;
      }
    }
  }
}
.bounce-enter-active {
  animation: slideInLeft 0.5s;
}
.bounce-leave-active {
  animation: slideInLeft 0.5s reverse;
}

@-webkit-keyframes slideInLeft {
    0% {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
        visibility: visible
    }

    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
}
// @keyframes bounce-in {
//   0% {
//     transform: scale(0);
//   }
//   50% {
//     transform: scale(1.5);
//   }
//   100% {
//     transform: scale(1);
//   }
// }
</style>
