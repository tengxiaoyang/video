<template>
  <div class="player_container">
    <div class="video_img_container">
      <img class="video_img" src="https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideohori/m/mzc00200x0no5q6_big.jpg" alt=""
      >
      <div class="shade" 
        v-if="selected_num > 2"
      >
      </div>
    </div>
    <div class="button" 
      v-if="selected_num < 3"
    >
      <img class="button_img" src="../../../public/static/img/detail_play.png" alt="">
      <img class="button_img_center" src="../../../public/static/img/detail_play_center.png" alt="">
    </div>
    <div class="open_vip" 
      v-if="selected_num > 2"
    >
      <div class="content">
        <span class="title">
          VIP会员可免费观看，开通VIP会员前往APP看完整版
        </span>
        <div class="button_container">
          <div class="button">登录/开通VIP会员</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Player',
  props: {
    selected_num: {
      type: Number
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    route_to(e) {
      this.$router.push({path: e})
    }
  }
}
</script>

<style lang="less" scoped>
.player_container {
  display: flex;
  justify-content: center;
  align-items: center;
  .video_img_container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    .video_img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
    .shade {
      background: rgba(0,0,0,.5);
      object-fit: contain;
      width: 100%;
      height: 100%;
      position: absolute;
    }
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin: 0 0 1px 0;
    .button_img {
      width: 68px;
      height: 68px;
      position: absolute;
      opacity: 0.8;
    }
    .button_img_center {
      width: 36px;
      height: 32px;
      position: absolute;
    }
  }
  .open_vip {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    .content {
      width: 100%;
      height: 68px;
      position: relative;
      bottom: 10px;
      text-align: center;
      .title {
        display: block;
        color: #fff;
        font-size: 15px;
        font-weight: 500;
        margin: 0 0 2px 0;
      }
      .button_container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        .button {
          color: #663d00;
          font-size: 14px;
          font-weight: 500;
          font-family: PingFangSC-Regular,Helvetica Neue,tahoma,arial,sans-serif;
          background: linear-gradient(90deg,#ffdf89,#f2ca5b);
          padding: 9px 20px;
          border-radius: 50px;
        }
      }
    }
  }
}
</style>
