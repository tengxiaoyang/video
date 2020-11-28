<template>
  <div class="video_swiper">
    <swiper class="swiper" ref="mySwiper" :options="swiperOptions" >
      <swiper-slide 
      v-for="(item, index) of video_content" 
      :key="index" 
      @click="route_to('video_details')"
      >
        <div class="img_container">
          <img lazyload 
            :src="item.img" alt="" @click="route_to('video_details')"
          >
          <div class="top_left_corner">
            <div class="triangle"></div>
            <span class="free" v-if="item.vip===0">独播</span>
            <span class="vip" v-if="item.vip===10">VIP</span>
          </div>
          <div class="bottom_right_corner">{{item.score}}</div>
        </div>
        <span class="title">【{{item.name}}】{{item.summary}}</span>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'MainSwiper',
  props: {
    video_content: {
      type: Array
    }
  },
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
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  methods: {
    route_to(e) {
      this.$router.push({path: e})
    },
  }
}
</script>

<style lang="less" scoped>
.video_swiper {
  .swiper {
    background: -webkit-linear-gradient(90deg,#f2f4f5,#fff 59%);
    margin: 6px 0 0 0;
    .swiper-slide {
      .img_container {
        display: flex;
        justify-content: center;
        padding: 0 15px;
        img {
          object-fit: contain;
          width: 100%;
          height: 100%;
        }
        .top_left_corner {
          position: absolute;
          height: 15px;
          top: 0;
          left: 0;
          margin: 1px 0 0 16px;
          font-size: 10px;
          font-weight: 400;
          color: #fff;
          padding: 0 0 0 8px;
          .triangle {
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
      width: 54px;
      height: 43px;
      left: calc(100% - 54px);
      bottom: 0;
      line-height: 44px;
      background: #f2f4f5;
    }
  }
}
</style>
