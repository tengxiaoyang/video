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
          <div class="great_deals">
            <div class="content">
              <span class="text">超值特惠！VIP首季40元，开会员抢先看热剧大片</span>
            </div>
          </div>
          <div class="episode">
            <div class="title"></div>
            <div class="option_container">
              <a class="option" 
                :class="{ active_option: item.num_of_episode === selected_num }"
                v-for="(item, index) of video_option" 
                :key="index" 
                @click="get_episode(item.num_of_episode)"
              >
                {{item.num_of_episode}}
                <span>
                  <i 
                    v-if="item.num_of_episode > 2"
                  ></i>
                </span>
              </a>
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
      selected_num: 1,
      video_option: [
        {
          num_of_episode: 1,
        },
        {
          num_of_episode: 2,
        },
        {
          num_of_episode: 3,
        },
        {
          num_of_episode: 4,
        },
        {
          num_of_episode: 5,
        },
        {
          num_of_episode: 6,
        },
        {
          num_of_episode: 7,
        }
      ],
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
    get_episode(e) {
      this.selected_num = e
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
  .video_img_container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
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
      position: absolute;
      text-align: center;
      .title {
        display: block;
        color: #fff;
        font-size: 15px;
        font-weight: 500;
      }
      .button_container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        .button {
          color: #663d00;
          font-size: 15px;
          font-weight: 500;
          background: linear-gradient(90deg,#ffdf89,#f2ca5b);
          padding: 10px 20px;
          border-radius: 50px;
        }
      }
    }
  }
}
.footer {
  .open_app {
    // border: 1px solid #000;
    border-bottom: 1px solid #F0F0F0;
    width: 100%;
    height: 65px;
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
      margin: 0 0 0 14px;
    }
    .video_info {
      margin: 0 0 0 14px;
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
    .great_deals {
      padding: 16px 16px 16px;
      .content {
        background: #e5c057;
        width: 100%;
        height: 40px;
        border-radius: 4px;
        text-align: center;
        .text {
          color: #fff;
          font-size: 15px;
          font-weight: 400;
        }
      }
    }
    .episode {
      .title {

      }
      .option_container {
        width: 97vw;
        height: 47px;
        overflow: hidden;
        overflow-x: scroll;
        white-space: nowrap;
        position: relative;
        // padding: 0 0 0 13px;
        // left: 13px;
        display: flex;
        align-items: center;
        // border: 1px solid #000;
        .active_option {
          display: inline-block;
          // width: 51px;
          height: 45px;
          // margin: 0 20px 0 0;
          // text-align: center;
          // border: 1px solid #000;
          line-height: 38px;
          font-size: 17px;
          color: #ff6022;
          font-weight: 800;
          margin: 0 10px;
          span {
            line-height: 38px;
            font-size: 17px;
            color: #ff6022;
            font-weight: 800;
            width: 100%;
            display: flex;
            justify-content: center;
            
            // i {
            //   display: block;
            //   width: 12px;
            //   border-bottom: 2px solid #ff6022;
            //   // margin: 0 11px;
            //   position: relative;
            //   bottom: 5px;
            //   // border: 1px solid #000;
            // }
          }
        }
        a {
          display: inline-block;
          // width: 51px;
          height: 45px;
          // margin: 0 20px 0 0;
          // text-align: center;
          // border: 1px solid #000;
          line-height: 38px;
          font-size: 17px;
          color: #000;
          font-weight: 800;
          margin: 0 10px;
          span {
            line-height: 38px;
            font-size: 17px;
            color: #000;
            font-weight: 800;
            width: 100%;
            display: flex;
            justify-content: center;
            
            i {
              display: block;
              width: 12px;
              border-bottom: 2px solid #ff6022;
              // margin: 0 11px;
              position: relative;
              bottom: 5px;
              // border: 1px solid #000;
            }
          }
        }
      }
    }
  }
}
</style>
