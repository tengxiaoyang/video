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
  name: 'home',
  components: {
    Nav,
    VideoSwiper,
    FeedsBlock,
    ListView
  },
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
</style>
