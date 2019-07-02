<template>
  <section class="section part_center">
    <div class="section_text">
      <div class="line"></div>
      <h1 class="title">精编课程内容</h1>
      <p class="description">每日基础练习，全球名师精编计划，瑜乐大学私教指导</p>
    </div>
    <div class="section_video">
      <div class="video" v-on:click="playVideo()">
        <video
          src="https://sessionpackage.dailyyoga.com.cn/dailyyogaoverview1547206043299"
          id="videoPlay1"
          v-show="videoshow"
          class="video"
          controls
        ></video>
        <!-- <video src="https://sessionpackage.dailyyoga.com.cn/dailyyogaoverview1547206043299"></video> -->
        <img src="../assets/main_center_one.jpeg" alt>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      videoshow: false
    }
  },
  methods: {
    playVideo () {
      console.log('1212')
      this.videoshow = !this.videoshow
      var vdo1 = document.getElementById('videoPlay1')
      vdo1.play()
    }
  }
}
</script>

<style lang="scss" scoped>
.part_center {
  margin: 30px 0 0;
  .section_text {
    text-align: center;
    .line {
      display: block;
      width: 50px;
      height: 4px;
      background: #333;
      margin: 0 auto;
    }
    .title {
      font-size: 30px;
      padding-top: 40px;
      margin: 0;
      margin-bottom: 15px;
      color: #4d4d4d;
      font-weight: 400;
    }
    .description {
      font-size: 14px;
      color: #999;
      line-height: 1.5;
    }
  }
  .section_video {
    width: 280px;
    height: 166px;
    border: 5px solid #fff;
    box-shadow: 0 2px 64px 0 rgba(0, 0, 0, 0.12);
    margin: 70px auto 0;
    position: relative;
    overflow: hidden;
    z-index: 10;
    video {
      width: 100%;
      height: 100%;
      background: #fff;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 20;
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 280px;
      z-index: 12;
    }
  }
}
</style>
