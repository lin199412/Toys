<template>
  <section class="home_nav" id="home_nav" :class="isFixed== true?'isFixed':''">
    <!-- <h2>导航栏</h2> -->
    <ul>
      <li>
        <router-link to="/" active-class="active" exact>首页</router-link>
      </li>
      <li>
        <router-link to="/Hmiansui" active-class="active">极速免税店</router-link>
      </li>
      <li>
        <router-link to="/Hmuying" active-class="active">母婴</router-link>
      </li>
      <li>
        <router-link to="/Hqingshe" active-class="active">轻奢</router-link>
      </li>
      <li>
        <router-link to="/Htemai" active-class="active">名品特卖</router-link>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  data() {
    return {
      isFixed: false
    };
  },
  methods: {
    handleScroll() {
      this.$nextTick(() => {
        let scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        let headerTop = document.getElementById("home_nav");
        // console.log(scrollTop + "------------");
        // 可以写一个固定的值，也可以根据需要计算盒子到页面顶部的距离
        if (scrollTop > 10) {
          this.isFixed = true;
        } else {
          this.isFixed = false;
        }
      });
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.home_nav {
  width: 100%;
  height: 44px;
  background: #fff;
  border-bottom: #ddd 1px solid;
  &.isFixed {
    position: fixed;
    top: 0px;
    left: 0;
    z-index: 99;
    width: 100%;
  }
  ul {
    height: 44px;
    // white-space: nowrap;
    // overflow-x: auto;
    li {
      float: left;
      // position: relative;
      width: auto;
      // padding: 13px;
      text-align: center;
      height: 44px;
      margin: 0 12px;

      a {
        display: inline-block;
        line-height: 44px;
        // padding: 0 0;
        font-size: 14px;
        color: #666;
        &.active {
          border-bottom: 2px solid #fe4070;
          color: #fe4070;
        }
      }
    }
  }
}
</style>
