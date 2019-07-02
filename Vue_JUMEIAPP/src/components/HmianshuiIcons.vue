<template>
  <section class="icons_box">
    <ul>
      <li>
        <a href>
          <img
            src="http://mp5.jmstatic.com/mobile/other/detail_page_guarantee/interantion_shipping.png?imageView2/2/w/51/q/70"
            alt
          >
          <div>海外直供</div>
        </a>
      </li>
      <li>
        <a href>
          <img
            src="http://mp5.jmstatic.com/mobile/other/detail_page_guarantee/genuine_guarantee.png?imageView2/2/w/51/q/70"
            alt
          >
          <div>原装正品</div>
        </a>
      </li>
      <li>
        <a href>
          <img
            src="http://mp5.jmstatic.com/mobile/other/detail_page_guarantee/global_delivery.png?imageView2/2/w/51/q/70"
            alt
          >
          <div>极速到货</div>
        </a>
      </li>
      <li>
        <a href>
          <img
            src="http://mp5.jmstatic.com/mobile/other/detail_page_guarantee/return_guarantee_7.png?imageView2/2/w/51/q/70"
            alt
          >
          <div>轻松退货</div>
        </a>
      </li>
    </ul>
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
.icons_box {
  width: 100%;
  height: 107px;
  background: #fff;
  border-bottom: 8px solid #eee;
  ul {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      list-style: none;
    li {
        height: 72px;
      a {
        display: inline-block;
        text-decoration: none;
        img {
          width: 48px;
          height: 48px;
          margin-bottom: 5px;
        }
        div {
          color: #666;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
