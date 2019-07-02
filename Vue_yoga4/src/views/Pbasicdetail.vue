<template>
  <section class="basic">
    <!-- <h2>基础练习详情页</h2> -->
    <div class="img_box">
      <!-- <img src="../assets/banner_practice_details1.jpeg" alt> -->
      <img :src="this.c_img" alt="">
    </div>
    <div class="text_box">
      <div class="line"></div>
      <p class="title" v-text="this.c_title"></p>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      c_img: '',
      c_title: '',
      result: [
        {
          category_id: 11,
          cn_spell_name: 'jzsx',
          images:
            'http://qiniucdn.dailyyoga.com.cn/cf/e0/cfe02ca834e99d9337a6a500d6e4cec1.jpeg',
          name: '减脂塑形',
          web_images:
            'http://qiniucdn.dailyyoga.com.cn/5a/58/5a583d39dcfce3a2a3522fce0054f36e.jpeg'
        },
        {
          category_id: 9,
          cn_spell_name: 'ljcrm',
          images:
            'http://qiniucdn.dailyyoga.com.cn/78/93/78935531dd589617bd8277cefa4cf9d2.jpeg',
          name: '零基础入门',
          web_images:
            'http://qiniucdn.dailyyoga.com.cn/43/07/4307c9d1e81db490bbdf72351e5102fc.jpeg'
        },
        {
          category_id: 10,
          cn_spell_name: 'qsdz',
          images:
            'http://qiniucdn.dailyyoga.com.cn/01/d0/01d05855997b172ffbf53253a02e5d1b.jpeg',
          name: '全身打造',
          web_images:
            'http://qiniucdn.dailyyoga.com.cn/59/18/5918edd7144d0148b9a7b2d327005938.jpeg'
        },
        {
          category_id: 171,
          cn_spell_name: 'yczq',
          images:
            'http://qiniucdn.dailyyoga.com.cn/12/cd/12cd53788c78917919b5042dbdeb7daf.jpeg',
          name: '孕产专区',
          web_images:
            'http://qiniucdn.dailyyoga.com.cn/de/d0/ded02e46edb8f2dbc2ff02c4880ed3f5.jpeg'
        },
        {
          category_id: 167,
          cn_spell_name: 'ypzs',
          images:
            'http://qiniucdn.dailyyoga.com.cn/90/d1/90d1ea72172876e3f285893b94ec4305.jpeg',
          name: '音频知识',
          web_images:
            'http://qiniucdn.dailyyoga.com.cn/dd/44/dd440285e8105d7d3e1c9a3ef7dcd30d.jpeg'
        },
        {
          category_id: 125,
          cn_spell_name: 'llzy',
          images:
            'http://qiniucdn.dailyyoga.com.cn/8f/9e/8f9e1ee288b3be335214a8fa47f4bcaf.jpeg',
          name: '理疗滋养',
          web_images:
            'http://qiniucdn.dailyyoga.com.cn/68/d4/68d4c8c2476507cd870419134936b649.jpeg'
        },
        {
          category_id: 151,
          cn_spell_name: 'jnts',
          images:
            'http://qiniucdn.dailyyoga.com.cn/4b/a7/4ba7a494c88723f71dec43e4b53c384d.jpeg',
          name: '技能提升',
          web_images:
            'http://qiniucdn.dailyyoga.com.cn/5c/75/5c755f58af665a279e5765545147c746.jpeg'
        },
        {
          category_id: 139,
          cn_spell_name: 'hyjp',
          images:
            'http://qiniucdn.dailyyoga.com.cn/cb/7f/cb7fe96eca112d0b9285cb2622eca756.jpeg',
          name: '会员精品',
          web_images:
            'http://qiniucdn.dailyyoga.com.cn/28/9e/289e8ea5728de13403e54336c18c2f4f.jpeg'
        },
        {
          category_id: 140,
          cn_spell_name: 'mxzq',
          images:
            'http://qiniucdn.dailyyoga.com.cn/91/df/91df004759a26195cea15f9369d9483b.jpeg',
          name: '冥想专区',
          web_images:
            'http://qiniucdn.dailyyoga.com.cn/3c/75/3c754bbfcb74546ee4ac16e788c20223.jpeg'
        },
        {
          category_id: 135,
          cn_spell_name: 'cjlx',
          images:
            'http://qiniucdn.dailyyoga.com.cn/67/40/6740e5eed8ac9708e3c323b552e62e34.jpeg',
          name: '场景练习',
          web_images:
            'http://qiniucdn.dailyyoga.com.cn/59/1c/591ca6e9d86dc2b473ea19909adc2573.jpeg'
        },
        {
          category_id: 134,
          cn_spell_name: 'nxzq',
          images:
            'http://qiniucdn.dailyyoga.com.cn/4c/99/4c99ae325542a6aa35716a7c060029fb.jpeg',
          name: '女性专区',
          web_images:
            'http://qiniucdn.dailyyoga.com.cn/e5/7a/e57a792f768abbd61c1604e3930a5c79.jpeg'
        },
        {
          category_id: 12,
          cn_spell_name: 'nxzq',
          images:
            'http://qiniucdn.dailyyoga.com.cn/9e/37/9e37ad8c2a471e78677a4b3c4e952637.jpeg',
          name: '男性专区',
          web_images:
            'http://qiniucdn.dailyyoga.com.cn/b3/44/b3448a94f1f87367588942168cd2aca7.jpeg'
        },
        {
          category_id: 163,
          cn_spell_name: 'fjlx',
          images:
            'http://qiniucdn.dailyyoga.com.cn/a8/f5/a8f5c9b2e121bb2d63a44ba242856e0e.jpeg',
          name: '辅具练习',
          web_images:
            'http://qiniucdn.dailyyoga.com.cn/83/2b/832bd81f6521f3c9299ac944d77a4a86.jpeg'
        }
      ]
    }
  },
  mounted () {
    console.log(this.$route.query)
    console.log(this.$route.query.c_name)
    for (var value of this.result) {
      if (value.cn_spell_name == this.$route.query.c_name) {
        console.log(value.cn_spell_name)
        // this.somewords = value.title;
        this.c_img = value.images
        this.c_title = value.name
      }
    }
  }
}
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.basic {
  margin-top: 50px !important;
  .img_box {
    height: 200px;
    position: relative;
    img {
      height: 200px;
      position: absolute;
      left: 50%;
      transform: translate(-50%);
    }
  }
  .text_box {
    text-align: center;
    .line {
      width: 45px;
      height: 3px;
      background: #333;
      margin: 30px auto;
    }
    .title {
      font-size: 22px;
    }
  }
}
</style>
