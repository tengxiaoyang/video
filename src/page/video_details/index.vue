<template>
  	<div class="main">
      <div class="header">
        <div class="logo" @click="return_home"></div>
        <div class="blank"></div>
        <div class="right">
          <img class="search_icon" 
            src="../../../public/static/img/zoom_white.png" alt="" 
            @click="route_to('search')"
          >
          <span class="login" 
            @click="route_to('login')"
          >登录</span>
          <div class="see_full_version">
            <span class="text">看完整版</span>
          </div>
        </div>
      </div>
      <div class="player_container">
        <img class="video_img" src="https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideohori/m/mzc00200x0no5q6_big.jpg" alt="">
        <img class="button_img" src="../../../public/static/img/detail_play.png" alt="">
        <img class="button_img_center" src="../../../public/static/img/detail_play_center.png" alt="">
      </div>
      <div class="footer">
        <div class="open_app">
          <div class="left">
            <div class="icon">
              <img class="icon_img" src="https://i.gtimg.cn/qqlive/images/20190710/i1562744530_1.jpg" alt="">
            </div>
            <span class="text">看全集高清完整版</span>
          </div>
          <div class="right">打开</div>
        </div>
        <div class="video_introduction">
          <div class="video_name">
            使徒行者3[粤语版]
          </div>
          <div class="video_info">
            <span class="score">7.8 分 · </span>
            <span class="member_needs">VIP</span>
            <span class="episodes_in_total"> · 全37集 · </span>
            <span class="times_of_play">1.4亿次播放</span>
          </div>
          <div class="video_function">
            <div class="left">
              <div class="blue_ray">
                <img class="blue_ray_icon" src="../../../public/static/img/blue_ray.png" alt="">
              </div>
            </div>
            <div class="right">
              <div class="add_to_favorites">
                <img class="add_to_favorites_icon" src="../../../public/static/img/add_to_favorites.png" alt="">
              </div>
              <div class="download">
                <img class="download_icon" src="../../../public/static/img/download.png" alt="">
              </div>
              <div class="option">
                <img class="option_icon" src="../../../public/static/img/option.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
  	</div>
</template>

<script>
export default {
  name: 'video_details',
  data() {
    return {
      
    }
  },
  created() {

  },
  filters: {
    // capitalize: function(value) {
    //   return value.toUpperCase();
    // }
  },
  methods: {
    return_home() {
      this.route_to("/");
    },
    route_to(e) {
      this.$router.push({path: e});
    },
  }
}

</script>

<style lang="less" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  height: 50px;
  background: #2d2d2e;
  width: 100vw;
  // display: flex;
  // align-items: center;
  // border: 1px solid #000;
  .logo {
    display: inline-block;
    position: absolute;
    top: 14px;
    left: 12px;
    width: 114px;
    height: 22px;
    // float: left;
    background: url(https://puui.qpic.cn/vupload/0/1576120792392_9vgklt9cjvk.png/0) no-repeat;
    background-size: 100%;
  }
  .blank {
    display: inline-block;
    // flex: 1;
  }
  .right {
    display: inline-block;
    // float: right;
    position: absolute;
    top: 10px;
    right: 12px;
    width: 150px;
    height: 30px;
    background: #2d2d2e;
    text-align: center;
    // border: 1px solid #fff;
    display: flex;
    align-items: center;
    .search_icon {
      width: 24px;
      height: 24px;
      margin: 0;
    }
    .login {
      display: block;
      color: #fff;
      font-size: 13px;
      position: relative;
      margin: 0;
      font-weight: 400;
      margin: 0 0 0 11px;
    }
    .see_full_version {
      width: 72px;
      height: 24px;
      background: #ff6022;
      display: flex;
      align-items: center;
      border-radius: 12px;
      margin: 0 0 0 12px;
      .text {
        display: block;
        width: 100%;
        color: #fff;
        font-size: 12px;
        position: relative;
        margin: 0;
        font-weight: 400;
      }
    }
  }
}
.player_container {
  margin: 50px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .video_img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
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
.footer {
  .open_app {
    // border: 1px solid #000;
    border-bottom: 1px solid #F0F0F0;
    width: 100%;
    height: 68px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    .left {
      // border: 1px solid #000;
      flex: 1;
      height: 38px;
      display: flex;
      align-items: center;
      .icon {
        width: 38px;
        height: 38px;
        background: #f5f5f5;
        position: relative;
        .icon_img {
          border: 1px solid rgba(0,0,40,.1);
          border-radius: 6px;
          object-fit: contain;
          width: 100%;
          height: 100%;
          position: absolute;
        }
      }
      .text {
        // border: 1px solid #000;
        display: block;
        color: #000028;
        font-size: 13px;
        font-weight: 400;
        padding: 0 10px;
      }
    }
    .right {
      // border: 1px solid #000;
      width: 56px;
      height: 28px;
      background: rgba(255,96,34,.06);
      color: #ff6022;
      font-size: 12px;
      line-height: 28px;
      text-align: center;
      border-radius: 16px;
      font-weight: 400;
    }
  }
  .video_introduction {
    margin: 24px 0 0 0;
    .video_name {
      color: #000028;
      font-size: 18px;
      font-weight: 800;
      margin: 0 0 0 10px;
    }
    .video_info {
      margin: 0 0 0 10px;
      .score {
        color: #848494;
        font-size: 13px;
        font-weight: 400;
      }
      .member_needs {
        color: #ff7b00;
        font-size: 13px;
        font-weight: 400;
      }
      .episodes_in_total {
        color: #848494;
        font-size: 13px;
        font-weight: 400;
      }
      .times_of_play {
        color: #848494;
        font-size: 13px;
        font-weight: 400;
      }
    }
    .video_function {
      display: flex;
      border-bottom: 1px solid #F0F0F0;
      .left {
        flex: 1;
        .blue_ray {
          width: 55px;
          margin: 0 0 0 10px;
          img {
            object-fit: contain;
            width: 100%;
            height: 100%;
          }
        }
      }
      .right {
        width: 150px;
        display: flex;
        .add_to_favorites {
          width: 37px;
          img {
            object-fit: contain;
            width: 100%;
            height: 100%;
          }
        }
        .download {
          width: 30px;
          margin: 0px 21px;
          img {
            object-fit: contain;
            width: 100%;
            height: 100%;
          }
        }
        .option {
          width: 30px;
          img {
            object-fit: contain;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
