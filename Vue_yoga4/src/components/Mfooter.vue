<template>
  <section class="footer clearfix">
    <div class="content">
      <div class="about">
        <dl class="clearfix">
          <dt>每日瑜伽</dt>
          <dd>西安瑜乐文化科技股份有限公司</dd>
          <dd>地址：西安市高新区科技三路57号融城云谷B座22层</dd>
          <dd>电话：400-0662-300</dd>
          <dd>ICP备案号： 陕ICP备13010109号</dd>
        </dl>
        <ul class="clearfix">
          <li>
            <a href>关于我们</a>
          </li>
          <li>
            <a href>获奖荣誉</a>
          </li>
          <li>
            <a href>联系我们</a>
          </li>
          <li>
            <a href>加入我们</a>
          </li>
          <li>
            <a href>服务条款</a>
          </li>
          <li>
            <a href>隐私声明</a>
          </li>
          <li>
            <a href>媒体报道</a>
          </li>
        </ul>
      </div>
      <p class="copyright">www.dailyyoga.com.cn Copyright © 2012-2019 © 西安瑜乐文化科技股份有限公司保留所有解释权</p>
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
.footer {
  background: #333;
  color: #fff;
  padding: 25px 0;
  width: 100%;
  height: 499px;
  .content {
    width: 80%;
    padding: 0 10px;
    margin: 0 auto;
    color: #fff;
    .about {
      dl {
        margin-bottom: 45px;
        dt {
          border-left: 6px solid #fff;
          padding-left: 10px;
          margin-bottom: 20px;
          font-size: 24px;
        }
        dd {
          font-size: 14px;
          line-height: 25px;
        }
      }
      ul {
        list-style: none;
        margin-bottom: 40px;
        li {
          float: left;
          width: 50%;
          margin-bottom: 20px;
          a {
            text-decoration: none;
            color: #fff;
            border-left: 6px solid #fff;
            padding-left: 10px;

            font-size: 20px;
          }
        }
      }
    }
    .copyright {
      color: #c8c8c8;
      font-size: 12px;
      display: block;
      line-height: 1.5;
    }
  }
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
</style>
