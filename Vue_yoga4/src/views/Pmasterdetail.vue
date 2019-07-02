<template>
  <section class="basic">
    <!-- <h2>基础练习详情页</h2> -->
    <div class="img_box">
      <!-- <img src="../assets/banner_practice_details1.jpeg" alt> -->
      <img :src="this.c_img" alt>
    </div>
    <div class="text_box">
      <div class="line"></div>
      <p class="title" v-text="this.c_title"></p>
    </div>
    <div v-on:click="playVideo()" class="video_box">
      <!-- <video
        src="https://sessionpackage.dailyyoga.com.cn/jason1559092644383"
        id="videoPlay"
        v-show="true"
        class="video"
      ></video>-->
      <video :src="c_video" id="videoPlay" v-show="true" class="video" controls></video>
    </div>
    <div class="description_box">
      <h3>
        课程简介
        <span @click="btn_show_p()" v-bind:class="show_p?'active':''">+</span>
      </h3>
      <transition name="bounce">
        <p class="description" v-text="c_description" v-if="show_p"></p>
      </transition>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      show_p: false,
      c_img: '',
      c_title: '',
      c_video: '',
      c_description: '',
      result: []
    }
  },
  async created () {
    const masters = await this.$axios(
      'https://www.easy-mock.com/mock/5cfb93cde5e7b850d846cd8a/example/lessonlist#!method=get'
    )
    console.log(masters.data.result)
    this.result = masters.data.result
    console.log(this.$route.query)
    console.log(this.$route.query.c_name)
    for (var value of this.result) {
      if (value.cn_spell_name == this.$route.query.c_name) {
        console.log(value.program_name)
        // this.somewords = value.title;
        this.c_img = value.logo_new_cover
        this.c_title = value.program_name
        this.c_video = value.short_video
        this.c_description = value.program_description
      }
    }
  },
  methods: {
    playVideo () {
      var vdo = document.getElementById('videoPlay')
      vdo.play()
    },
    btn_show_p () {
      this.show_p = !this.show_p
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
  .video_box {
    width: 80%;
    // height: 400px;
    background: #999;
    margin: 20px auto;
    video {
      width: 100%;
      // height: 400px;
    }
  }
  .description_box {
    width: 80%;
    margin: 20px auto;
    text-align: center;
    h3 {
      font-size: 22px;
      font-weight: 400;
      margin-bottom: 10px;
      span {
        width: 20px;
        height: 20px;
        color: #fff;
        background: #8ca5ff;
        display: inline-block;
        font-size: 20px;
        line-height: 20px;
        border-radius: 50%;
        font-weight: 500;
        &.active{
          color: #fff;
          background: #ccc;
        }
      }
    }
    .description {
      color: #888;
      font-size: 16px;
      text-align: left;
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
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}

</style>
