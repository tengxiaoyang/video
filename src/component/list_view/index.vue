<template>
  <div class="main">
    <div class="list_view" v-if="selected_type===5">
      <div class="video_list_container" 
        v-for="(video_content_item, video_content_index) of video_content" 
        :key="'list_view-'+video_content_index"
      >
        <div class="video_list" 
          v-for="(video_list_item, video_list_index) of video_content_item.list.slice(0, 1)"
          :key="video_list_index" 
          @click="route_to('video_details')"
        >
          <div class="img_container">
            <img lazyload :src="video_list_item.img" alt="">
            <div class="top_left_corner">
              <span class="free">{{video_list_item.name}}</span>
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
                <span class="user_name">{{video_list_item.author}}</span>
              </div>
            </div>
            <div class="right">
              <div class="comment">
                <img class="comment_icon" src="../../../public/static/img/letter.png" alt="">
              </div>
              <span class="num_of_comments">{{video_list_item.score}}</span>
              <div class="more">
                <img class="more_icon" src="../../../public/static/img/more.png" alt="">
              </div>
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
  name: 'ListView',
  data() {
    return {
      selected_type: 5,
      video_content: [],
    }
  },
  created() {
    this.get_video(this.selected_type)
  },
  methods: {
    return_home() {
      this.selected_type = 1;
      this.get_video(this.selected_type)
    },
    route_to(e) {
      this.$router.push({path: e})
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
  }
}
</script>

<style lang="less" scoped>
.main {
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
}
</style>
