<template>
  <div class="home_container">
    <div class="header">
      <div class="top">
        <div class="logo"></div>
        <div class="search">
          <span class="text">{{search_text}}</span>
          <div class="icon"></div>
        </div>
      </div>
      <div class="nav">
        <div class="option_outside">
          <a class="option" 
            :class="{ active_option: item.type === selected_type }"
            v-for="(item, index) of video_option" 
            :key="index" 
            @click="get_video(item.type)"
          >
            {{item.option_name}}
            <i></i>
          </a>
        </div>
      </div>
    </div>
    <div class="channel">
      <swiper class="video_swiper" ref="mySwiper" :options="swiperOptions">
        <swiper-slide 
        v-for="(item, index) of swiper_content" 
        :key="index" 
        @click="route_to('video_details')"
        >
          <div class="img_container">
            <img lazyload :src="item.img" alt="">
            <div class="top_left_corner">
              <div class="triangle"></div>
              <span class="free" v-if="item.vip===0">免费</span>
              <span class="vip" v-if="item.vip===10">VIP</span>
            </div>
            <div class="bottom_right_corner">{{item.score}}</div>
          </div>
          <span class="title">【{{item.name}}】{{item.summary}}</span>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="feeds_block">
        <span class="title">重磅热播</span>
        <div class="video_list_container">
          <div class="video_list" 
            v-for="(item, index) of blockbuster_hit" 
            :key="index" 
            @click="route_to('video_details')"
          >
            <div class="img_container">
              <img lazyload :src="item.img" alt="">
              <div class="top_left_corner">
                <div class="triangle"></div>
                <span class="free" v-if="item.vip===0">免费</span>
                <span class="vip" v-if="item.vip===10">VIP</span>
              </div>
              <div class="bottom_right_corner">{{item.score}}</div>
            </div>
            <span class="name">
              {{item.name}}
            </span>
            <span class="summary">
              {{item.summary}}
            </span>
          </div>
        </div>
      </div>
      <div class="feeds_block"></div>
      <div class="feeds_block"></div>
      <div class="feeds_block"></div>
      <div class="feeds_block"></div>
      <div class="feeds_block"></div>
      <div class="feeds_block"></div>
    </div>
  </div>
</template>

<script>
import HttpClient from '../../config/ajax.js';

export default {
  name: 'home',
  data() {
    return {
      swiperOptions:{
        pagination: {
          el: '.swiper-pagination',
          type: "fraction"
        },
        navigation: {
          nextEl: '.swiper-button-next', 
          prevEl: '.swiper-button-prev'
        },
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        loop: true
      },
      search_text: "使徒行者3",
      selected_type: 1,
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
          option_name: "娱乐",
        },
        {
          type: 5,
          option_name: "动漫",
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
      // video_content: [],
      swiper_content: [],
      blockbuster_hit: [],

    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
    num() {
      return this.$store.state.num;
    }
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(1, 1000, false)
    this.get_video(this.selected_type)
  },
  methods: {
    addNum() {
      let r = Math.floor(Math.random() * 10);
      console.log(r);
      this.$store.commit('ADD_NUM', r)
    },
    get_video(e) {
      console.log("执行get_video")
      HttpClient.getList({  
        params: { type:  e },  
        callback: (res) => {
          console.log("执行callback");
          console.log(res);
          console.log(res.data.data);
          this.video_content = res.data.data;
          console.log(res.data.data[0].list)
          this.swiper_content = res.data.data[0].list;
          console.log(res.data.data[1].list)
          this.blockbuster_hit = res.data.data[1].list;
          this.selected_type = e;
          console.log("执行完callback");
        } 
      });
      console.log("执行完get_video")
    },
  }
}
</script>

<style lang="less" scoped>
.header {
  .top {
    height: 45px;
    .logo {
      position: relative;
      top: 15px;
      left: 12px;
      width: 103px;
      height: 24px;
      float: left;
      background: url(//puui.qpic.cn/vupload/0/1570516378024_vr59hnsql8.png/0) no-repeat;
      background-size: 100%;
    }
    .search {
      float: right;
      position: relative;
      top: 12px;
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
  .nav {
    display: flex;
    width: 100%;
    height: 40px;
    overflow: hidden;
    background: #fff;
    .option_outside {
      width: 100%;
      height: 51px;
      overflow: hidden;
      overflow-x: scroll;
      white-space: nowrap;
      position: relative;
      margin: 0 0 0 6px;
      .active_option {
        display: inline-block;
        width: 51px;
        height: 38px;
        margin: 0 15px 0 0;
        text-align: center;
        line-height: 38px;
        font-size: 17px;
        color: #ff6022;
        font-weight: 800;
      }
      a {
        display: inline-block;
        width: 51px;
        height: 38px;
        margin: 0 15px 0 0;
        text-align: center;
        line-height: 38px;
        font-size: 17px;
        color: #000;
        font-weight: 800;
      }
      .active_option i {
        display: block;
        width: 12px;
        border-bottom: 2px solid #ff6022;
        margin: 0 19px;
        position: relative;
        bottom: 5px;
      }
    }
  }
}
.channel {
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
          height: 20px;
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
      }
    }
    .swiper-pagination {
      font-size: 14px;
      font-weight: 800;
      color: #000;
      padding: 0;
      margin: 0;
      word-spacing: -5px;
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
      border: 1px solid #000;
      padding: 9px 11px;
      .video_list {
        border: 1px solid #000;
        .img_container {
          // width: 100%;
          // height: 195px;
          display: flex;
          justify-content: center;
          // border: 1px solid #000;
          padding: 0 3px;
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
          // border: 1px solid #000;
          padding: 0 0 0 21px;
          height: 43px;
          width: calc(100% - 54px);
          line-height: 43px;
          color: #000028;
          font-size: 14px;
          font-weight: 400;
          position: relative;
        }
        .summary {
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
        }
      }
    }    
  }
}
</style>
