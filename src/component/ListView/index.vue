<template>
  <div class="video_list"
    @click="route_to('video_details')"
  >
    <div class="img_container">
      <img lazyload :src="video_content.img" alt="">
      <div class="top_left_corner">
        <span class="free">{{video_content.name}}</span>
      </div>
      <div class="bottom_right_corner">
        <!-- {{video_list_item.score}} -->
      </div>
      <div class="play_button_container">
        <img class="play_button" src="../../../public/static/img/play.png" alt="">
      </div>
    </div>
    
    <div class="video_list_bottom">
      <div class="left">
        <div class="user_info">
          <div class="user_icon_container">
            <img class="user_icon" src="http://inews.gtimg.com/newsapp_ls/0/5483100714_200200/0" alt="">
          </div>
          <span class="user_name">{{video_content.author}}</span>
        </div>
      </div>
      <div class="right">
        <div class="comment">
          <img class="comment_icon" src="../../../public/static/img/letter.png" alt="">
        </div>
        <span class="num_of_comments">{{video_content.score}}</span>
        <div class="more">
          <img class="more_icon" src="../../../public/static/img/more.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListView',
  props: {
    video_content: {
      type: Object
    }
  },
  data() {
    return {
      
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
.video_list {
  position: relative;
  padding: 10px 0 0 0;
  background: #f5f7f9;
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
        opacity: 0.85;
      }
    }
  }
  
  .video_list_bottom {
    width: 100%;
    height: 49px;
    display: flex;
    padding: 0 12px;
    background: #fff;
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

</style>
