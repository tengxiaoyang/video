<template>
  <div class="recommended_for_you">
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
          <div class="change_button" @click="show_change_list(video_content_index)">
            <img src="../../../src/static/img/down_arrow.png" alt="">
            <!-- <span>换一换</span> -->
          </div>
        </div>

        <div class="after_change" 
          v-if="video_content_item.change_block_list"
        >
          <div class="open_app">打开腾讯视频，看更多精彩内容</div>
          <div class="change_button" @click="show_change_list(video_content_index)">
            <img src="../../../src/static/img/up_arrow.png" alt="">
            <!-- <span>换一换</span> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendedForYou',
  props: {
    video_content: {
      type: Array
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
    show_change_list(video_content_index) {
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
      
      this.$emit('video_content', this.video_content)
    },
  }
}
</script>

<style lang="less" scoped>
.recommended_for_you {
  position: relative;
  margin: 16px 0 0 0;
  padding: 0 0 13px 0;
  border-bottom: 1px solid #F0F0F0;
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
      // display: flex;
      // justify-content: center;
      // align-items: center;
      height: 68px;
      // border: 1px solid #000;
      .open_app {
        height: 36px;
        margin: 12px auto 12px;
        border: 1px solid #ebebeb;
        border-radius: 18px;
        color: #000028;
        font-size: 13px;
        line-height: 34px;
        text-align: center;
        font-weight: 400;
        display: block;
        padding: 0;
        width: 90%;
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
