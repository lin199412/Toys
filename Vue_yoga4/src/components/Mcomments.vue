<template>
  <section class="section section_swiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <ul>
            <li v-for="comm1 in comments1" :key="comm1.uid">
              <div class="person">
                <div class="img_box">
                  <img :src="comm1.imgurl" alt>
                  <!-- <img :src="baseurl + comm1.imgurl" alt/> -->
                  <!-- <img src="../assets/admin1_1.jpg" alt> -->
                </div>

                <div class="info_rt">
                  <p class="name" v-text="comm1.name"></p>
                  <div class="star">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                </div>
              </div>
              <p class="saying" v-text="comm1.words"></p>
            </li>
          </ul>
        </div>
        <div class="swiper-slide">
          <ul>
            <li v-for="comm2 in comments2" :key="comm2.uid">
              <div class="person">
                <div class="img_box">
                  <img :src="comm2.imgurl" alt>
                  <!-- <img :src="" alt=""> -->
                  <!-- <img src="../assets/admin1_1.jpg" alt> -->
                </div>

                <div class="info_rt">
                  <p class="name" v-text="comm2.name"></p>
                  <div class="star">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                </div>
              </div>
              <p class="saying" v-text="comm2.words"></p>
            </li>
          </ul>
        </div>
        <div class="swiper-slide">
          <ul>
            <li v-for="comm3 in comments3" :key="comm3.uid">
              <div class="person">
                <div class="img_box">
                  <img :src="comm3.imgurl" alt>
                </div>

                <div class="info_rt">
                  <p class="name" v-text="comm3.name"></p>
                  <div class="star">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                </div>
              </div>
              <p class="saying" v-text="comm3.words"></p>
            </li>
          </ul>
        </div>
        <div class="swiper-slide">
          <ul>
            <li v-for="comm4 in comments4" :key="comm4.uid">
              <div class="person">
                <div class="img_box">
                  <img :src="comm4.imgurl" alt>
                </div>

                <div class="info_rt">
                  <p class="name" v-text="comm4.name"></p>
                  <div class="star">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                </div>
              </div>
              <p class="saying" v-text="comm4.words"></p>
            </li>
          </ul>
        </div>
        <!-- <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>-->
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </section>
</template>

<script>
import '../assets/css/swiper.min.css'
// import "../assets/js/swiper.min.js";
import Swiper from 'swiper'

export default {
  data () {
    return {
      // baseurl: "../../public/img/",
      comments1: [
        {
          name: '虫子yogi',
          uid: '0101',
          // imgurl: "admin1_1.jpg",
          imgurl: 'https://gw.dailyyoga.com.cn/static/img/user1.caa1e44.jpg',
          starts: 5,
          words:
            '我属于微胖族，下班吃完晚饭又懒得去健身房，自己在家瞎练也没有什么太大的效果。每日瑜伽里边有科学体系的减肥课程，每天还有提醒功能，督促每天练习。它是我手机里的健身减肥教练，大爱啊！！'
        },
        {
          name: '静秋子（珍珠）',
          uid: '0102',
          // imgurl: "../assets/admin1_2.jpg",
          imgurl: 'https://gw.dailyyoga.com.cn/static/img/user2.fb2befc.jpg',
          starts: 5,
          words:
            '搜索瑜伽看排在第一位，然后下载使用，大致看了一下，内容还挺丰富的，对于有减肥、塑形、瘦腿需求的人来说很实用，最重要的是里面有适合新人的入门瑜伽课程，对于我这种之前没有任何瑜伽基础的人来说，还是挺不错的！希望我自己能多多坚持。'
        },
        {
          name: '诗雨流星',
          uid: '0103',
          // imgurl: "../assets/admin1_3.jpg",
          imgurl: 'https://gw.dailyyoga.com.cn/static/img/user3.45f5ff6.jpg',
          starts: 5,
          words:
            '其实早就下载这个软件用了 自己在家练瑜伽也很方便 课程也算一个体系，但是有收费的课程让我一直舍不得买，之前练得又觉得枯燥，突然发现现在收费课程限免了，果断下载课程来这给好评。'
        }
      ],
      comments2: [
        {
          name: '兔子爱瑜伽',
          uid: '0201',
          // imgurl: "../assets/admin2_1.jpg",
          imgurl: 'https://gw.dailyyoga.com.cn/static/img/user4.bff1caa.jpg',
          starts: 5,
          words:
            '每天定了固定的瑜伽学习时间，跟着软件里的课程每天练习，缓解了不少关节上的不适。我会努力坚持下去的！先给这样的软件32个赞！希望后面会有更多有用的课程。'
        },
        {
          name: '小安的拉萨瑜伽时光',
          uid: '0202',
          // imgurl: "../assets/admin2_2.jpg",
          imgurl: 'https://gw.dailyyoga.com.cn/static/img/user5.f214702.jpg',
          starts: 5,
          words:
            '从来不写评论，这次是第一次，最大的原因是真心喜欢这个软件，很方便，很实用，发微信介绍它的时候发现朋友圈很多人用，说明确实好。希望能多点免费的，时间长一些的，基础一点的瑜伽，例如像初级减脂的就不错，可惜时间短了一些。'
        },
        {
          name: '小马驹溜溜',
          uid: '0203',
          // imgurl: "../assets/admin2_3.jpg",
          imgurl: 'https://gw.dailyyoga.com.cn/static/img/user6.a61928e.jpg',
          starts: 5,
          words:
            '我是做互联网的，每天的工作压力都特别大，经常会选择去健身房运动来减轻压力。每次去健身房都会练习里边的课程，有些课程确实起到了减压的作用，非常棒！非常适合我。'
        }
      ],
      comments3: [
        {
          name: '行走的小语',
          uid: '0301',
          // imgurl: "../assets/admin3_1.jpg",
          imgurl: 'https://gw.dailyyoga.com.cn/static/img/user7.fca44f6.jpg',
          starts: 5,
          words:
            '由浅入深，由简入繁，使初学者可以逐步坚持下来，是我唯一可以坚持练习下来的瑜伽课程，非常感谢每日瑜伽的全体人员，希望以后多设计几套计划课程表，可以逐一循序渐进的练习，容易坚持下来！'
        },
        {
          name: '幸福的葛葛',
          uid: '0302',
          // imgurl: "../assets/admin3_2.jpg",
          imgurl: 'https://gw.dailyyoga.com.cn/static/img/user8.851e5d7.jpg',
          starts: 5,
          words:
            '我个人还是很喜欢的，挺多免费的，平时老坐着，下班回家就可以练习，也会出汗，挺好的，慢动作的运动，修身养性，赞!!'
        },
        {
          name: '优雅心灵_1',
          uid: '0303',
          // imgurl: "../assets/admin3_3.jpg",
          imgurl: 'https://gw.dailyyoga.com.cn/static/img/user9.6f9b824.jpg',
          starts: 5,
          words:
            '健康生活从自律开始，自从坚持做瑜伽以来，觉得自己无论是身体状态还是意志力都提升了不少。我很喜欢这个软件，动作讲解到位，配合呼吸法，适合我。'
        }
      ],
      comments4: [
        {
          name: '瑜时光xue',
          uid: '0401',
          // imgurl: "../assets/admin4_1.jpg",
          imgurl: 'https://gw.dailyyoga.com.cn/static/img/user10.cd79096.jpg',
          starts: 5,
          words:
            '很好用，已经坚持了一月，头痛减少了，肩背也轻松了，确实有闪退现象，新增加的课程计划很喜欢，练习中，希望有更新的免费课程'
        },
        {
          name: '玥呢',
          uid: '0402',
          // imgurl: "../assets/admin4_2.jpg",
          imgurl: 'https://gw.dailyyoga.com.cn/static/img/user11.e8e8571.jpg',
          starts: 5,
          words:
            '真的特别棒，因为经常坐在电脑跟前，经常低头玩手机，所以时常会感觉肩颈特别不舒服，做了瑜伽之后感觉特好，尤其是自从增加肩颈瑜伽课程之后，喜欢这里的课程。'
        },
        {
          name: 'halfmylove',
          uid: '0403',
          // imgurl: "../assets/admin4_3.jpg",
          imgurl: 'https://gw.dailyyoga.com.cn/static/img/user12.f5b9eb9.jpg',
          starts: 5,
          words:
            '如果有人和我一样天天坐着腰背肌肉僵硬紧绷，一定要试试每日背部瑜伽这个课程！我练了一段时间感觉好多了，腰背肌肉放松了许多，一定会坚持练习！'
        }
      ]
    }
  },
  mounted () {
    this.$store.state.showLoading++
    var mySwiper = new Swiper('.swiper-container', {
      // direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项
      autoplay: true,

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }
    })
    this.$store.state.showLoading--
  }
}

// swiper插件
// window.onload = function() {};
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
body {
  line-height: 1;
  font-size: 14px;
  font-family: Helvetica Neue, Helvetica, Arial, Source Han Sans CN, Heiti SC,
    sans-serif;
  font-weight: 300;
  letter-spacing: 1px;
}
.section_swiper {
  width: 100%;
  height: 826px;
  // background: #ccc;
  margin: 30px 0 0;
  .swiper-wrapper {
    width: 100%;
    height: 800px;
    ul {
      width: 300px;
      margin: 0 auto;
      li {
        float: left;
        margin-bottom: 30px;
        .person {
          width: 100%;
          height: 68px;
          margin-bottom: 20px;
          .img_box {
            width: 68px;
            height: 68px;
            border-radius: 50%;
            background: aquamarine;
            margin-top: 0;
            margin-right: 20px;
            display: block;
            float: left;
            overflow: hidden;
            img {
              width: 68px;
              height: 68px;
            }
          }
          .info_rt {
            float: left;
            // width: 120px;
            height: 60px;
            .name {
              color: #333;
              font-size: 20px;
              margin: 10px 0;
            }
            .star {
              i {
                width: 20px;
                height: 19px;
                background: url(../assets/icon_star.png) no-repeat 50%;
                background-size: 20px 19px;
                display: inline-block;
                margin-right: 6px;
              }
            }
          }
        }
        .saying {
          padding: 0 20px;
          line-height: 1.5;
          font-size: 12px;
        }
      }
    }
  }
  .swiper-pagination {
    // background: red;
    span {
      // width: 30px;
      // height: 10px;
      // margin: 10px;
      // display: inline-block;
    }
  }
}
</style>
