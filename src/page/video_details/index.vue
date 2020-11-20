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
            <div class="top">
              <div class="title">剧集</div>
              <span 
                class="members_see_complete"
              >
                会员看全集
              </span>
            </div>
            <div class="option_container">
              <div class="option_outside">
                <a class="option" 
                  :class="{ active_option: item.num_of_episode === selected_num }"
                  v-for="(item, index) of video_option" 
                  :key="index" 
                  @click="get_episode(item.num_of_episode)"
                >
                  <span class="top_right_corner">
                    <i 
                      v-if="item.num_of_episode > 2"
                    ></i>
                  </span>
                  <span class="zero" v-if="item.num_of_episode < 10">0</span>
                  <span class="num_of_episode">{{item.num_of_episode}}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="channel">
        <div class="feeds_block" 
          v-for="(video_content_item, video_content_index) of video_content" 
          :key="video_content_index"  
        >
          <div class="feeds_block_container" 
            v-if="video_content.indexOf(video_content_item)===1"
          >
            <span class="title">{{video_content_item.title}}</span>
            <div v-if="video_content_item.list.length%2===0">

              <!-- <div class="video_list_container"> -->
              <div class="video_list_container" 
                v-if="!video_content_item.change_block_list"
              >
                <div class="video_list" 
                  v-for="(video_list_item, video_list_index) of video_content_item.list.slice(0, video_content_item.list.length/2)"
                  :key="video_list_index" 
                  @click="route_to('video_details')"
                >
                  <div class="img_container">
                    <img lazyload :src="video_list_item.img" alt="">
                    <div class="top_left_corner">
                      <div class="triangle"></div>
                      <span class="free" v-if="video_list_item.vip===0">独播</span>
                      <span class="vip" v-if="video_list_item.vip===10">VIP</span>
                    </div>
                    <div class="bottom_right_corner">{{video_list_item.score}}</div>
                  </div>
                  <span class="name">
                    {{video_list_item.name}}
                  </span>
                  <span class="summary">
                    {{video_list_item.summary}}
                  </span>
                </div>
              </div>

              <div class="video_list_container" 
                v-if="video_content_item.change_block_list"
              >
                <div class="video_list" 
                  v-for="(video_list_item, video_list_index) of video_content_item.list"
                  :key="video_list_index" 
                  @click="route_to('video_details')"
                >
                  <div class="img_container">
                    <img lazyload :src="video_list_item.img" alt="">
                    <div class="top_left_corner">
                      <div class="triangle"></div>
                      <span class="free" v-if="video_list_item.vip===0">独播</span>
                      <span class="vip" v-if="video_list_item.vip===10">VIP</span>
                    </div>
                    <div class="bottom_right_corner">{{video_list_item.score}}</div>
                  </div>
                  <span class="name">
                    {{video_list_item.name}}
                  </span>
                  <span class="summary">
                    {{video_list_item.summary}}
                  </span>
                </div>
              </div>
            </div>

            
            <div v-if="video_content_item.list.length%2!==0">

              <div class="video_list_top_container"
                v-if="!video_content_item.change_block_list"
              >
                <div class="video_list_top" 
                  v-for="(video_list_item, video_list_index) of video_content_item.list.slice(0, 1)"
                  :key="video_list_index" 
                  @click="route_to('video_details')"
                >
                  <div class="img_container">
                    <img lazyload :src="video_list_item.img" alt="">
                    <div class="top_left_corner">
                      <div class="triangle"></div>
                      <span class="free" v-if="video_list_item.vip===0">独播</span>
                      <span class="vip" v-if="video_list_item.vip===10">VIP</span>
                    </div>
                    <div class="bottom_right_corner">{{video_list_item.score}}</div>
                  </div>
                  <span class="name">
                    {{video_list_item.name}}
                  </span>
                  <span class="summary">
                    {{video_list_item.summary}}
                  </span>
                </div>
              </div>

              <!-- <div class="video_list_container"> -->
              <div class="video_list_container" 
                v-if="!video_content_item.change_block_list"
              >
                <div class="video_list" 
                  v-for="(video_list_item, video_list_index) of video_content_item.list.slice(1, (video_content_item.list.length)/2)"
                  :key="video_list_index" 
                  @click="route_to('video_details')"
                >
                  <div class="img_container">
                    <img lazyload :src="video_list_item.img" alt="">
                    <div class="top_left_corner">
                      <div class="triangle"></div>
                      <span class="free" v-if="video_list_item.vip===0">独播</span>
                      <span class="vip" v-if="video_list_item.vip===10">VIP</span>
                    </div>
                    <div class="bottom_right_corner">{{video_list_item.score}}</div>
                  </div>
                  <span class="name">
                    {{video_list_item.name}}
                  </span>
                  <span class="summary">
                    {{video_list_item.summary}}
                  </span>
                </div>
              </div>


              <div class="video_list_top_container"
                v-if="video_content_item.change_block_list"
              >
                <div class="video_list_top" 
                  v-for="(video_list_item, video_list_index) of video_content_item.list.slice(0, 1)"
                  :key="video_list_index" 
                  @click="route_to('video_details')"
                >
                  <div class="img_container">
                    <img lazyload :src="video_list_item.img" alt="">
                    <div class="top_left_corner">
                      <div class="triangle"></div>
                      <span class="free" v-if="video_list_item.vip===0">独播</span>
                      <span class="vip" v-if="video_list_item.vip===10">VIP</span>
                    </div>
                    <div class="bottom_right_corner">{{video_list_item.score}}</div>
                  </div>
                  <span class="name">
                    {{video_list_item.name}}
                  </span>
                  <span class="summary">
                    {{video_list_item.summary}}
                  </span>
                </div>
              </div>

              <!-- <div class="video_list_container"> -->
              <div class="video_list_container" 
                v-if="video_content_item.change_block_list"
              >
                <div class="video_list" 
                  v-for="(video_list_item, video_list_index) of video_content_item.list.slice(1,video_content_item.list.length)"
                  :key="video_list_index" 
                  @click="route_to('video_details')"
                >
                  <div class="img_container">
                    <img lazyload :src="video_list_item.img" alt="">
                    <div class="top_left_corner">
                      <div class="triangle"></div>
                      <span class="free" v-if="video_list_item.vip===0">独播</span>
                      <span class="vip" v-if="video_list_item.vip===10">VIP</span>
                    </div>
                    <div class="bottom_right_corner">{{video_list_item.score}}</div>
                  </div>
                  <span class="name">
                    {{video_list_item.name}}
                  </span>
                  <span class="summary">
                    {{video_list_item.summary}}
                  </span>
                </div>
              </div>
            </div>

            <div class="change" 
              v-if="!video_content_item.change_block_list"
            >
              <div class="change_button" @click="show_change_list(video_content_index,$event)">
                <img src="../../../public/static/img/down_arrow.png" alt="">
                <!-- <span>换一换</span> -->
              </div>
            </div>

            <div class="after_change" 
              v-if="video_content_item.change_block_list"
            >
              <div class="open_app"></div>
              <div class="change_button" @click="show_change_list(video_content_index,$event)">
                <img src="../../../public/static/img/up_arrow.png" alt="">
                <span>换一换</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  	</div>
</template>

<script>
import HttpClient from '../../config/ajax.js';

export default {
  name: 'video_details',
  data() {
    return {
      selected_num: 1,
      video_option: [
        {
          num_of_episode: 1
        },
        {
          num_of_episode: 2
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
        },
        {
          num_of_episode: 8,
        },
        {
          num_of_episode: 9,
        },
        {
          num_of_episode: 10,
        },
        {
          num_of_episode: 11,
        },
        {
          num_of_episode: 12,
        },
        {
          num_of_episode: 13,
        },
        {
          num_of_episode: 14,
        },
        {
          num_of_episode: 15,
        },
        {
          num_of_episode: 16,
        },
        {
          num_of_episode: 17,
        },
        {
          num_of_episode: 18,
        },
        {
          num_of_episode: 19,
        },
        {
          num_of_episode: 20,
        },
        {
          num_of_episode: 21,
        },
        {
          num_of_episode: 22,
        },
        {
          num_of_episode: 23,
        },
        {
          num_of_episode: 24,
        },
        {
          num_of_episode: 25,
        },
        {
          num_of_episode: 26,
        },
        {
          num_of_episode: 27,
        },
        {
          num_of_episode: 28,
        },
        {
          num_of_episode: 29,
        },
        {
          num_of_episode: 30,
        },
        {
          num_of_episode: 31,
        },
        {
          num_of_episode: 32,
        },
        {
          num_of_episode: 33,
        },
        {
          num_of_episode: 34,
        },
        {
          num_of_episode: 35,
        },
        {
          num_of_episode: 36,
        },
        {
          num_of_episode: 37,
        }
      ],
      video_content: [],
      selected_type: 2,
    }
  },
  created() {

  },
  filters: {
    // capitalize: function(value) {
    //   return value.toUpperCase();
    // }
  },
  created() {
    this.get_video(this.selected_type)
  },
  mounted() {
    // this.swiper.slideTo(1, 0, false)
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
    get_video(e) {
      console.log("执行get_video")
      HttpClient.getList({  
        params: { type:  e },  
        callback: (res) => {
          console.log("执行callback");
          console.log(e);
          console.log(res);
          console.log(res.data);
          console.log(res.data.data);
          console.log(this.video_content);
          this.video_content = res.data.data;
          if (e === 1) {
            console.log(this.video_content[1].title)
            this.video_content[1].title = "重磅热播";
            console.log(this.video_content[1].title)
          }
          console.log(this.video_content.length);
          for (let i = 0; i < this.video_content.length; ++ i) {
            console.log(this.video_content[i])
            if (!this.video_content[i].change_block_list) {
              this.$set(this.video_content[i], "change_block_list", false)
            } 
          }
          console.log(this.video_content)
          console.log(res.data.data[0].list)
          // this.swiper_content = res.data.data[0].list;
          console.log(this.video_content)
          this.selected_type = e;
          this.swiper.slideTo(1, 0, false)
          console.log("执行完callback");
        } 
      });
      console.log("执行完get_video")
    },
    show_change_list(video_content_index,$event) {
      this.current = video_content_index;
      console.log(this.current)
      let el = event.currentTarget;
      console.log(el.innerHTML);

      console.log(this.video_content[this.current]);
      console.log(this.video_content[this.current]. change_block_list);
      if (this.video_content[this.current]. change_block_list) {
        this.$set(this.video_content[this.current], "change_block_list", false)
      } else {
        this.$set(this.video_content[this.current], "change_block_list", true)
      }
      
      console.log(this.video_content[this.current].change_block_list)
      console.log(this.video_content)
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
    right: 9px;
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
      .top {
        display: flex;
        align-items: flex-end;
        margin: 0 17px;
        .title {
          color: #000028;
          font-size: 15px;
          font-weight: 800;
          flex: 1;
        }
        .members_see_complete {
          color: #848494;
          font-size: 12px;
          font-weight: 400;
        }
      }
      .option_container {
        height: 56px;
        overflow: hidden;
        margin: 20px 0 0 0;
        .option_outside {
          // width: 97vw;
          height: 66px;
          overflow: hidden;
          overflow-x: scroll;
          white-space: nowrap;
          position: relative;
          padding: 0 8px 0 16px;
          .active_option {
            display: inline-block;
            width: 56px;
            height: 56px;
            background: #f6f8fa;
            margin: 0 8px 0 0px;
            vertical-align: middle;
            border-radius: 2px;
            text-align: center;
            .zero {
              line-height: 38px;
              font-size: 14px;
              color: #ff6022;
              font-weight: 400;
              display: inline-block;
              width: 2px;
            }
            .num_of_episode {
              line-height: 38px;
              font-size: 14px;
              color: #ff6022;
              font-weight: 400;
            }
            .top_right_corner {
              width: 22px;
              height: 13px;
              line-height: 38px;
              font-size: 17px;
              color: #ff6022;
              font-weight: 800;
              width: 100%;
              display: flex;
              justify-content: flex-end;
              text-align: center;
            }
          }
          a {
            display: inline-block;
            width: 56px;
            height: 56px;
            background: #f6f8fa;
            margin: 0 8px 0 0px;
            vertical-align: middle;
            border-radius: 2px;
            text-align: center;
            .zero {
              line-height: 38px;
              font-size: 14px;
              color: #000028;
              font-weight: 400;
              display: inline-block;
              width: 2px;
            }
            .num_of_episode {
              line-height: 38px;
              font-size: 14px;
              color: #000028;
              font-weight: 400;
            }
            .top_right_corner {
              width: 22px;
              height: 13px;
              line-height: 38px;
              font-size: 17px;
              color: #000;
              font-weight: 800;
              width: 100%;
              display: flex;
              justify-content: flex-end;
              
              i {
                display: block;
                width: 22px;
                height: 13px;
                position: relative;
                background: url(https://puui.qpic.cn/vupload/0/20190920_z2zuiu904a/0?max_age=7776000);
                background-size: 22px 13px;
              }
            }
          }
        }
      }
    }
  }
}

.channel {
  position: relative;
  margin: 26px 0 0 0;
  // top: 91px;
  .feeds_block {
    .title {
      color: #000028;
      font-size: 15px;
      font-weight: 800;
      margin: 15px 0 0 16px;
      display: block;
    }
    .video_list_container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      // border: 1px solid #000;
      padding: 9px 11px;
      .video_list {
        // border: 1px solid #000;
        .img_container {
          // width: 100%;
          // height: 195px;
          display: flex;
          justify-content: center;
          // border: 1px solid #000;
          padding: 0 4px;
          position: relative;
          img {
            object-fit: contain;
            width: 100%;
            height: 100%;
          }
          .top_left_corner {
            position: absolute;
            // border: 1px solid #f09;
            /* width: 164px; */
            height: 15px;
            top: 0;
            left: 0;
            margin: 1px 0 0 4px;
            font-size: 10px;
            font-weight: 400;
            color: #fff;
            padding: 0 0 0 8px;
            // background-color: rgba(162,162,182,.5);
            .triangle {
              // border: 6px solid;
              // border-color: transparent transparent transparent #FF6600;
              border-left: 7px solid #FF6600;
              border-right: 7px solid transparent;
              border-top: 5px solid transparent;
              border-bottom: 5px solid transparent;
              width: 0;
              height: 0;
              position: absolute;
              display: inline-block;
              top: 3px;
              left: 0;
            }
            span {
              font-size: 10px;
              font-weight: 400;
              color: #fff;
            }
          }
          .bottom_right_corner {
            position: absolute;
            height: 17px;
            bottom: 0;
            right: 0;
            margin: 0 10px 4px 0;
            font-size: 10px;
            font-weight: 400;
            color: #fff;
            background-color: rgba(162, 162, 182, 0.5);
          }
        }
        .name {
          display: block;
          padding: 0 0 0 4px;
          width: calc(100% - 0px);
          line-height: 33px;
          color: #000028;
          font-size: 14px;
          font-weight: 400;
          position: relative;
        }
        .summary {
          display: block;
          padding: 0 0 11px 4px;
          width: 46vw;
          line-height: 14px;
          color: #a2a2b6;
          font-size: 13px;
          font-weight: 400;
          position: relative;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          word-break: break-all;
        }
      }
    }
    .video_list_top_container {
      display: grid;
      grid-template-columns: 1fr;
      // border: 1px solid #000;
      padding: 9px 11px;
      .video_list_top {
        // border: 1px solid #000;
        .img_container {
          // width: 100%;
          // height: 195px;
          display: flex;
          justify-content: center;
          // border: 1px solid #000;
          padding: 0 4px;
          position: relative;
          img {
            object-fit: contain;
            width: 100%;
            height: 100%;
          }
          .top_left_corner {
            position: absolute;
            // border: 1px solid #f09;
            /* width: 164px; */
            height: 15px;
            top: 0;
            left: 0;
            margin: 1px 0 0 4px;
            font-size: 10px;
            font-weight: 400;
            color: #fff;
            padding: 0 0 0 8px;
            // background-color: rgba(162,162,182,.5);
            .triangle {
              // border: 6px solid;
              // border-color: transparent transparent transparent #FF6600;
              border-left: 7px solid #FF6600;
              border-right: 7px solid transparent;
              border-top: 5px solid transparent;
              border-bottom: 5px solid transparent;
              width: 0;
              height: 0;
              position: absolute;
              display: inline-block;
              top: 3px;
              left: 0;
            }
            span {
              font-size: 10px;
              font-weight: 400;
              color: #fff;
            }
          }
          .bottom_right_corner {
            position: absolute;
            height: 17px;
            bottom: 0;
            right: 0;
            margin: 0 10px 4px 0;
            font-size: 10px;
            font-weight: 400;
            color: #fff;
            background-color: rgba(162, 162, 182, 0.5);
          }
        }
        .name {
          display: block;
          padding: 0 0 0 4px;
          width: calc(100% - 0px);
          line-height: 33px;
          color: #000028;
          font-size: 14px;
          font-weight: 400;
          position: relative;
        }
        .summary {
          display: block;
          padding: 0 0 11px 4px;
          width: 93vw;
          line-height: 14px;
          color: #a2a2b6;
          font-size: 13px;
          font-weight: 400;
          position: relative;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          word-break: break-all;
        }
      }
    }
    .change {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 14px;
      // border: 1px solid #000;
      .change_button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 14px;
        margin: 0 0 11px 0;
        // border: 1px solid #000;
        img {
          object-fit: fill;
          width: 16px;
          height: 13px;
        }
        span {
          color: #a2a2b6;
          font-size: 12px;
          width: 43px;
        }
      }
    }  
    .after_change {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 14px;
      // border: 1px solid #000;
      .open_app {
        
      }
      .change_button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 14px;
        margin: 0 0 11px 0;
        // border: 1px solid #000;
        img {
          object-fit: fill;
          width: 16px;
          height: 13px;
        }
        span {
          color: #a2a2b6;
          font-size: 12px;
          width: 43px;
        }
      }
    }   
  }
}
</style>
