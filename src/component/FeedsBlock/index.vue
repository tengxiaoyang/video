<template>
  <div class="feeds_block_container">
    <span class="title">{{video_content.title}}</span>

    <div v-if="video_content.list.length%2===0">
      <div class="video_list_container">
        <div class="video_list" 
          v-for="(video_list_item, video_list_index) of video_content.list"
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

    
    <div v-if="video_content.list.length%2!==0">

      <div class="video_list_top_container">
        <div class="video_list_top" 
          v-for="(video_list_item, video_list_index) of video_content.list.slice(0, 1)"
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
      
      <div class="video_list_container">
        <div class="video_list" 
          v-for="(video_list_item, video_list_index) of video_content.list.slice(1, video_content.length)"
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

    <div class="change">
      <div class="change_button">
        <img src="../../../public/static/img/change.png" alt="">
        <span>换一换</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedsBlock',
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
  },
  created() {
    console.log(this.video_content.list)
  },
}
</script>

<style lang="less" scoped>
.feeds_block_container {
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
</style>
