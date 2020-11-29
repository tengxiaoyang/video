<template>
  <div class="home">
    <div class="top">
      <div class="top_inner">
        <div class="logo" @click="return_home"></div>
        <div class="blank"></div>
        <div class="search" 
          @click="route_to('search')"
        >
          <span class="text">{{search_text}}</span>
          <div class="icon"></div>
        </div>
      </div>
    </div>
    <Nav 
      :video_option="video_option"
      @change_type="change_data($event)"
    ></Nav>
    <div class="item"
      v-for="(video_content_item, video_content_index) of video_content" 
      :key="video_content_index"
    >
      <div class="type_channel" 
        v-if="video_content_item.type!==5"
      >
        <VideoSwiper
          v-if="video_content.indexOf(video_content_item)===0"
          :video_content="video_content_item.list"
        ></VideoSwiper>
        
        <FeedsBlock 
          v-if="video_content.indexOf(video_content_item)!==0" 
          :video_content="video_content_item"
        ></FeedsBlock>
      </div>
      <div class="type_list" 
        v-if="video_content_item.type===5"
      >
        <ListView 
          :video_content="video_content_item.list[0]"
        ></ListView>
      </div>
    </div>
  </div>
</template>

<script>
import HttpClient from '../../config/ajax.js';
import Nav from "../../component/Nav";
import VideoSwiper from "../../component/VideoSwiper";
import FeedsBlock from "../../component/FeedsBlock";
import ListView from "../../component/ListView";
export default {
  components: {
    Nav,
    VideoSwiper,
    FeedsBlock,
    ListView
  },
  name: 'home',
  data() {
    return {
      selected_type: 1,
      search_text: "使徒行者3",
      video_option: [
        {
          type: 1,
          option_name: "电影",
        },
        {
          type: 2,
          option_name: "电视剧",
        },
        {
          type: 3,
          option_name: "综艺",
        },
        {
          type: 4,
          option_name: "动漫",
        },
        {
          type: 5,
          option_name: "娱乐",
        },
        {
          type: 6,
          option_name: "少儿",
        },
        {
          type: 7,
          option_name: "VIP",
        },
        {
          type: 8,
          option_name: "潮音",
        },
        {
          type: 9,
          option_name: "游戏",
        },
      ],
      video_content: [],
      swiper_content: []
    }
  },
  computed: {
    
  },
  created() {
    this.get_video(this.selected_type)
  },
  mounted() {
    // this.swiper.slideTo(1, 0, false)
  },
  methods: {
    change_data(e) {
      this.selected_type = e;
      console.log(this.selected_type);
      this.get_video(this.selected_type)
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
          this.swiper_content = res.data.data[0].list
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
      console.log(this.video_content)
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
    return_home() {
      this.selected_type = 1;
      this.get_video(this.selected_type)
    },
    route_to(e) {
      this.$router.push({path: e})
    },
  }
}
</script>

<style lang="less" scoped>
.top {
  position: relative;
  width: 100%;
  height: 45px;
  .top_inner {
    position: fixed;
    height: 45px;
    background: #fff;
    width: 100vw;
    z-index: 2;
    .logo {
      display: inline-block;
      position: absolute;
      top: 14px;
      left: 12px;
      width: 103px;
      height: 24px;
      // float: left;
      background: url(//puui.qpic.cn/vupload/0/1570516378024_vr59hnsql8.png/0) no-repeat;
      background-size: 100%;
    }
    .blank {
      display: inline-block;
      // flex: 1;
    }
    .search {
      display: inline-block;
      // float: right;
      position: absolute;
      top: 14px;
      right: 12px;
      width: 150px;
      height: 30px;
      border-radius: 5px;
      background-color: #f6f6f7;
      text-align: center;
      .text {
        color: #b3b3b3;
        font-size: 13px;
        position: relative;
        float: left;
        margin: 6px 13px;
        font-weight: 400;
      }
      .icon {
        background: url(../../../public/static/img/zoom.png) no-repeat;
        background-size: 100%;
        width: 13px;
        height: 13px;
        float: right;
        margin: 9px 10px;
      }
    }
  }
}
.nav {
  display: flex;
  align-items: center;
  width: 100%;
  height: 35px;
  overflow: hidden;
  background: #fff;
  margin: 3px 0 0 0;
  position: relative;
  top: 6px;
  // border: 1px solid #000;
  .option_outside {
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
          border-bottom: 2px solid #fff;
          // margin: 0 11px;
          position: relative;
          bottom: 5px;
          // border: 1px solid #000;
        }
      }
    }
  }
}
.channel {
  position: relative;
  margin: 100px 0 0 0;
  // top: 91px;
  .video_swiper {
    background: -webkit-linear-gradient(90deg,#f2f4f5,#fff 59%);
    margin: 6px 0 0 0;
    .swiper-slide {
      // width: 100%;
      // height: 240px;
      // border: 1px solid #000;
      .img_container {
        // width: 100%;
        // height: 195px;
        display: flex;
        justify-content: center;
        // border: 1px solid #000;
        padding: 0 15px;
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
          margin: 1px 0 0 16px;
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
          // border: 1px solid #f09;
          // width: 30px;
          height: 16px;
          bottom: 0;
          right: 0;
          margin: 0 23px 48px 0;
          font-size: 10px;
          font-weight: 400;
          color: #fff;
          background-color: rgba(162,162,182,.5);
        }
      }
      .title {
        display: block;
        // border: 1px solid #000;
        padding: 0 0 0 21px;
        height: 43px;
        width: calc(100% - 54px);
        line-height: 43px;
        color: #000028;
        font-size: 14px;
        font-weight: 400;
        position: relative;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-all;
      }
    }
    .swiper-pagination {
      font-size: 14px;
      font-weight: 700;
      font-family: Century Gothic;
      color: #000;
      padding: 0;
      margin: 0;
      word-spacing: -4.5px;
      letter-spacing: 0px;
      display: inline-block;
      // border: 1px solid #000;
      width: 54px;
      height: 43px;
      left: calc(100% - 54px);
      bottom: 0;
      line-height: 44px;
      background: #f2f4f5;
    }
  }
  .feeds_block {
    .title {
      color: #000;
      font-size: 18px;
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
          object-fit: contain;
          width: 23px;
          height: 100%;
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
.list_view {
  background-color: #f5f7f9;
  position: relative;
  // border: 1px solid #000;
  top: 99px;
  .video_list_container {
    width: 100%;
    // height: 259px;
    // border: 1px solid #000;
    background: #fff;
    margin: 11px 0 0 0;
    .video_list {
      .img_container {
        // width: 100%;
        // height: 195px;
        display: flex;
        justify-content: center;
        align-items: center;
        // border: 1px solid #000;
        padding: 0 0;
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
          margin: 1px 0 0 0;
          font-size: 10px;
          font-weight: 400;
          color: #fff;
          padding: 0 0 0 0;
          // background-color: rgba(162,162,182,.5);
          span {
            font-size: 17px;
            font-weight: 700;
            color: #fff;
            line-height: 22px;
            display: block;
            margin: 11px 16px;
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
          // background-color: rgba(162, 162, 182, 0.5);
        }
        .play_button_container {
          position: absolute;
          .play_button {
            width: 60px;
            height: 60px;
          }
        }
      }
      
      .video_list_bottom {
        width: 100%;
        height: 49px;
        display: flex;
        padding: 0 12px;
        // border: 1px solid #000;
        .left {
          flex: 1;
          height: 49px;
          display: flex;
          align-items: center;
          // padding: 0 12px;
          // border: 1px solid #000;
          .user_info {
            display: flex;
            align-items: center;
            height: 28px;
            background: #f6f8fa;
            border-radius: 14px;
            // padding: 0 3px 0 3px;
            .user_icon_container {
              width: 28px;
              height: 28px;
              display: flex;
              justify-content: center;
              align-items: center;
              img {
                width: 28px;
                height: 28px;
                border-radius: 14px;
              }
            }
            .user_name {
              font-size: 12px;
              color: #999;
              margin: 0 10px 0 9px;
              font-weight: 400;
            }
          }
        }
        .right {
          width: 74px;
          height: 49px;
          display: flex;
          align-items: center;
          // border: 1px solid #000;
          .comment {
            .comment_icon {
              width: 16px;
              height: 16px;
            }
          }
          .num_of_comments {
            color: #999;
            font-size: 12px;
            display: block;
            width: 33px;
            height: 10px;
            // border: 1px solid #000;
            line-height: 12px;
            padding: 0 0 0 3px;
          }
          .more {
            .more_icon {
              width: 17px;
              height: 17px;
            }
          }
        }
      }
    }
  }
}
</style>
