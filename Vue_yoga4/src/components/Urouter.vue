<template>
  <!-- <h2>god is here</h2> -->
  <section class="urouters_box">
    <div class="urouters clearfix">
      <ul class="clearfix">
        <li>
          <router-link to="/Urjp" active-class="active1">RYT教培</router-link>
          <!-- <router-link to="/YogaUniversity/Urjp">RYT教培</router-link> -->
        </li>
        <li>
          <router-link to="/Urgzf" active-class="active1">工作坊</router-link>
        </li>
        <li>
          <router-link to="/Uryx" active-class="active1">游学</router-link>
        </li>
        <li>
          <router-link to="/Urxly" active-class="active1">训练营</router-link>
        </li>
        <li>
          <router-link to="/Urzscx" active-class="active1">证书查询</router-link>
        </li>
      </ul>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
body {
  line-height: 1;
  font-size: 14px;
  font-family: Helvetica Neue, Helvetica, Arial, Source Han Sans CN, Heiti SC,
    sans-serif;
  font-weight: 300;
  letter-spacing: 1px;
}
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
}
/*清除浮动（不管）*/
.clearfix:before,
.clearfix:after {
  /*清楚浮动*/
  content: "";
  display: table;
}

.clearfix:after {
  clear: both;
}

.clearfix {
  *zoom: 1;
  /*IE/7/6*/
}
.urouters_box {
  width: 100%;
  .urouters {
    width: 90%;
    padding: 0 10px;
    margin: 30px auto;
    max-width: 1024px;
    ul {
      border-bottom: 4px solid #d8d8d8;
      margin-bottom: 30px;
      text-align: center;
      margin: 0 auto;
      li {
        width: 20%;
        margin: 0 !important;
        font-size: 12px;
        float: left;
        a {
          padding-bottom: 20px;
          height: 14px;
          display: inline-block;
          color: #8d8d8d;
          border-bottom: 4px solid #d8d8d8;
          position: relative;
          bottom: -4px;
          &.active1 {
            color: #000;
            border-bottom: 4px solid #000;
          }
          &.active1::after {
            content: "";
            display: block;
            width: 12px;
            height: 6px;
            background: url(../assets/icon_university_tabs.png) no-repeat 50%;
            background-size: 12px 6px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 0;
          }
        }
      }
    }
  }
}
</style>
