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
        <swiper-slide>
          <div class="img_container">
            <img lazyload src="https://puui.qpic.cn/tv/0/1224894060_1080607/0?max_age=7776000" alt="">
          </div>
          <span class="title">【演员·郭敬明新作】改编聊斋！男狐妖遇女将军</span>
        </swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="feeds_block"></div>
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
        // autoplay: {
        //   delay: 2000,
        //   disableOnInteraction: false,
        // },
        loop: true
      },
      search_text: "使徒行者3",
      selected_type: 0,
      video_option: [
        {
          type: 0,
          option_name: "精选",
        },
        {
          type: 1,
          option_name: "电视剧",
        },
        {
          type: 2,
          option_name: "VIP",
        },
        {
          type: 3,
          option_name: "电影",
        },
        {
          type: 4,
          option_name: "综艺",
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
          option_name: "娱乐",
        },
        {
          type: 8,
          option_name: "潮音",
        },
        {
          type: 9,
          option_name: "游戏",
        },
      ]
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
    // this.swiper.slideTo(0, 1000, false)
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
          // this.video_content = res.data.data;
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
      .active_option {
        display: inline-block;
        width: 51px;
        height: 38px;
        margin: 0 9px 0 0;
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
        margin: 0 9px 0 0;
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
    .swiper-slide {
      width: 100%;
      height: 240px;
      border: 1px solid #000;
      .img_container {
        width: 100%;
        height: 195px;
        display: flex;
        justify-content: center;
        border: 1px solid #000;
        img {
          object-fit: contain;
          width: 100%;
          height: 100%;
        }
      }
      .title {
        display: inline-block;
        border: 1px solid #000;
        padding: 0 0 0 13px;
        height: 43px;
        width: calc(100% - 28px);
        line-height: 43px;
        color: #000028;
        font-size: 14px;
        font-weight: 400;
        position: absolute;
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
      border: 1px solid #000;
      width: 29px;
      height: 44px;
      position: absolute;
      left: calc(100% - 30px);
      top: 195px;
      line-height: 44px;
    }
  }
}
</style>
