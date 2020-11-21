<template>
  	<div class="main">
      <div class="header">
        <div class="logo" @click="return_home"></div>
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
        <div class="open_app_top">
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
              <div class="open_app">打开腾讯视频，看更多精彩内容</div>
              <div class="change_button" @click="show_change_list(video_content_index,$event)">
                <img src="../../../public/static/img/up_arrow.png" alt="">
                <!-- <span>换一换</span> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="open_app_bottom" v-if="show_bottom_open_app">
        <div class="left">
          <div class="icon">
            <img class="icon_img" src="https://i.gtimg.cn/qqlive/images/20190710/i1562744530_1.jpg" alt="">
          </div>
          <span class="text">看全集高清完整版</span>
        </div>
        <div class="right">打开</div>
      </div>

      <div class="trailer_information">
        <div class="trailer_content">
          <div class="top">
            <div class="title">片花资讯</div>
          </div>
          <div class="trailer_container">
            <div class="trailer_outside">
              <a class="trailer" 
                v-for="(item, index) of trailer_content" 
                :key="index" 
                @click="get_trailer(item.id)"
              >
              
                <div class="img_container">
                  <img lazyload :src="item.img" alt="">
                  <div class="bottom_right_corner">{{item.duration}}</div>
                </div>
                <span class="name">
                  {{item.name}}
                </span>
                  
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="comment">
        <div class="top">
          <div class="title">评论</div>
        </div>
        <div class="middle">
          <div class="comment_content"
            v-for="(item, index) of comment_content" 
            :key="index" 
            @click="show_comment(item.id)"
          >
            <div class="user">
              <div class="user_icon">
                <img :src="item.user_icon" alt="">
              </div>
              <div class="user_name">{{item.name}}</div>
              <i class="user_rank_lv1" v-if="item.rank===1">
                <i class="user_rank_lv1_num"></i>
              </i>
            </div>
            <div class="user_comment">{{item.comment}}</div>
          </div>
        </div>
        <div class="bottom">
          <div class="open_app">
            <div class="icon">
              <img src="https://puui.qpic.cn/vupload/0/common_logo_square.png/0" alt="">
            </div>
            <span>
              打开腾讯视频，参与
              {{number_of_hot_reviews}}
              条热评大讨论
            </span>
          </div>
        </div>
      </div>

      <div class="blank"></div>

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
      show_bottom_open_app: false,
      trailer_content: [
        {
          id: 1,
          img: "https://puui.qpic.cn/vpic/0/s0034z6f4mk_160_90_3.jpg/0?max_age=7776000",
          duration: "01:25",
          name: "【剧透】爆seed带着儿子掰手腕 竟有人主动来叫板？",
        },
        {
          id: 2,
          img: "https://puui.qpic.cn/vpic/0/n00344o49zn_160_90_3.jpg/0?max_age=7776000",
          duration: "01:30",
          name: "《使徒行者3》片尾曲《不能放手》MV 是爱情还是罪疚",
        },
        {
          id: 3,
          img: "https://puui.qpic.cn/vpic/0/h0034lt0thg_160_90_3.jpg/0?max_age=7776000",
          duration: "02:36",
          name: "【剧透】爆seed得知钉姐去向 含泪假装毫不在意！",
        },
        {
          id: 4,
          img: "https://puui.qpic.cn/vpic/0/d00342fcday_160_90_3.jpg/0?max_age=7776000",
          duration: "01:10",
          name: "《使徒行者3》片尾曲《低谷天堂》 情深缘浅令人心碎",
        },
        {
          id: 5,
          img: "https://puui.qpic.cn/vpic/0/h0034lt0thg_160_90_3.jpg/0?max_age=7776000",
          duration: "02:36",
          name: "【剧透】爆seed得知钉姐去向 含泪假装毫不在意！",
        },
        {
          id: 6,
          img: "https://puui.qpic.cn/vpic/0/h0034lt0thg_160_90_3.jpg/0?max_age=7776000",
          duration: "02:36",
          name: "【剧透】爆seed得知钉姐去向 含泪假装毫不在意！",
        },
        {
          id: 7,
          img: "https://puui.qpic.cn/vpic/0/h0034lt0thg_160_90_3.jpg/0?max_age=7776000",
          duration: "02:36",
          name: "【剧透】爆seed得知钉姐去向 含泪假装毫不在意！",
        },
        {
          id: 8,
          img: "https://puui.qpic.cn/vpic/0/h0034lt0thg_160_90_3.jpg/0?max_age=7776000",
          duration: "02:36",
          name: "【剧透】爆seed得知钉姐去向 含泪假装毫不在意！",
        },
        {
          id: 9,
          img: "https://puui.qpic.cn/vpic/0/h0034lt0thg_160_90_3.jpg/0?max_age=7776000",
          duration: "02:36",
          name: "【剧透】爆seed得知钉姐去向 含泪假装毫不在意！",
        },
        {
          id: 10,
          img: "https://puui.qpic.cn/vpic/0/h0034lt0thg_160_90_3.jpg/0?max_age=7776000",
          duration: "02:36",
          name: "【剧透】爆seed得知钉姐去向 含泪假装毫不在意！",
        },
        {
          id: 11,
          img: "https://puui.qpic.cn/vpic/0/h0034lt0thg_160_90_3.jpg/0?max_age=7776000",
          duration: "02:36",
          name: "【剧透】爆seed得知钉姐去向 含泪假装毫不在意！",
        },
        {
          id: 12,
          img: "https://puui.qpic.cn/vpic/0/h0034lt0thg_160_90_3.jpg/0?max_age=7776000",
          duration: "02:36",
          name: "【剧透】爆seed得知钉姐去向 含泪假装毫不在意！",
        },
        {
          id: 13,
          img: "https://puui.qpic.cn/vpic/0/h0034lt0thg_160_90_3.jpg/0?max_age=7776000",
          duration: "02:36",
          name: "【剧透】爆seed得知钉姐去向 含泪假装毫不在意！",
        },
        {
          id: 14,
          img: "https://puui.qpic.cn/vpic/0/h0034lt0thg_160_90_3.jpg/0?max_age=7776000",
          duration: "02:36",
          name: "【剧透】爆seed得知钉姐去向 含泪假装毫不在意！",
        },
        {
          id: 15,
          img: "https://puui.qpic.cn/vpic/0/h0034lt0thg_160_90_3.jpg/0?max_age=7776000",
          duration: "02:36",
          name: "【剧透】爆seed得知钉姐去向 含泪假装毫不在意！",
        },
        {
          id: 16,
          img: "https://puui.qpic.cn/vpic/0/h0034lt0thg_160_90_3.jpg/0?max_age=7776000",
          duration: "02:36",
          name: "【剧透】爆seed得知钉姐去向 含泪假装毫不在意！",
        },
        {
          id: 17,
          img: "https://puui.qpic.cn/vpic/0/h0034lt0thg_160_90_3.jpg/0?max_age=7776000",
          duration: "02:36",
          name: "【剧透】爆seed得知钉姐去向 含泪假装毫不在意！",
        },
        {
          id: 18,
          img: "https://puui.qpic.cn/vpic/0/h0034lt0thg_160_90_3.jpg/0?max_age=7776000",
          duration: "02:36",
          name: "【剧透】爆seed得知钉姐去向 含泪假装毫不在意！",
        },
        {
          id: 19,
          img: "https://puui.qpic.cn/vpic/0/h0034lt0thg_160_90_3.jpg/0?max_age=7776000",
          duration: "02:36",
          name: "【剧透】爆seed得知钉姐去向 含泪假装毫不在意！",
        },
        {
          id: 20,
          img: "https://puui.qpic.cn/vpic/0/h0034lt0thg_160_90_3.jpg/0?max_age=7776000",
          duration: "02:36",
          name: "【剧透】爆seed得知钉姐去向 含泪假装毫不在意！",
        }
      ],
      comment_content: [
        {
          id: 1,
          user_icon: "https://thirdwx.qlogo.cn/mmopen/vi_32/lcH7XX5w9HdUqiaVAib6JVNxhE6MBw2ge4lVJ5fnECD5StFOCeQfYAyz1b3ZBoEgytglB29QYaKzHIAvhibLBicGQA/132?max_age=7776000",
          name: "乐少",
          rank: 1,
          comment: "第四部卓可能要黑化了！",
        },
        {
          id: 2,
          user_icon: "https://thirdqq.qlogo.cn/g?b=sdk&k=wnsl0JWXqYAAibdCwSUGK7Q&s=140&t=1566612549?max_age=7776000",
          name: "热心市民",
          rank: 1,
          comment: "这个陪打球的老女人是内鬼",
        },
        {
          id: 3,
          user_icon: "https://thirdqq.qlogo.cn/g?b=sdk&k=PeKs1u9rVIAZKZ3icq2ZdMw&s=140&t=1556712611?max_age=7776000",
          name: "清晨的风",
          rank: 1,
          comment: "你",
        }
      ],
      number_of_hot_reviews: 437,
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
    window.addEventListener('scroll', this.set_bottom_open_app)
  },
  destroyed() {
    window.removeEventListener('scroll', this.set_bottom_open_app)
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
    set_bottom_open_app() {
      let page_scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let open_app_top_scroll_demand = document.querySelector(".open_app_top").offsetTop;
      if (page_scroll > open_app_top_scroll_demand) {
        this.show_bottom_open_app = true;
      } else {
        this.show_bottom_open_app = false;
      };
      // console.log(page_scroll)
      // console.log(open_app_top_scroll_demand)
      // console.log(this.show_bottom_open_app)
    }
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
  .open_app_top {
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
      padding: 0 0 14px 0;
      border-bottom: 1px solid #F0F0F0;
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
              position: relative;
              bottom: 3px;
            }
            .num_of_episode {
              line-height: 38px;
              font-size: 14px;
              color: #000028;
              font-weight: 400;
              position: relative;
              bottom: 3px;
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

.open_app_bottom {
  position: fixed;
  bottom: -1px;
  // border: 1px solid #000;
  border-bottom: 1px solid #F0F0F0;
  width: 100%;
  height: 68px;
  padding: 0 12px 11px 12px;
  display: flex;
  align-items: center;
  background: #fff;
  z-index: 3;
  box-shadow: 0 -2px 10px 0 rgba(0,0,0,.08);
  .left {
    // border: 1px solid #000;
    flex: 1;
    height: 36px;
    display: flex;
    align-items: center;
    .icon {
      width: 36px;
      height: 36px;
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
      padding: 2px 12px 0px 12px;
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

.trailer_information {
  margin: 15px 0 0 0;
  padding: 0 0 13px 0;
  border-bottom: 1px solid #F0F0F0;
  .trailer_content {
    .top {
      display: flex;
      align-items: flex-end;
      margin: 0 15px;
      .title {
        color: #000028;
        font-size: 15px;
        font-weight: 800;
        flex: 1;
      }
    }
    .trailer_container {
      overflow: hidden;
      margin: 14px 0 0 0;
      height: 126px;
      white-space: nowrap;
      .trailer_outside {
        overflow: hidden;
        overflow-x: scroll;
        position: relative;
        padding: 0 8px 0 16px;
        height: 136px;
        .trailer {
          display: inline-block;
          width: 135px;
          margin: 0 10px 0 0px;
          vertical-align: middle;
          border-radius: 2px;
          text-align: center;
          height: 126px;
          
          .img_container {
            display: flex;
            justify-content: center;
            position: relative;
            border-radius: 4px;
            img {
              object-fit: contain;
              width: 100%;
              height: 100%;
              border-radius: 4px;
            }
            .bottom_right_corner {
              display: block;
              position: absolute;
              height: 17px;
              bottom: 0;
              right: 0;
              margin: 0 8px 4px 0;
              font-size: 12px;
              font-weight: 400;
              color: #fff;
              z-index: 1;
              
              // text-shadow: 0 0 4px rgba(0,0,0,.5);
              
              text-shadow: 0 0 4.5px #000, 0 0 4.5px #000;
              /* For IE 8 */
              // -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=4, Direction=90, Color='#000')";
              /* For IE 5.5 - 7 */
              // filter: progid:DXImageTransform.Microsoft.Shadow(Strength=4, Direction=90, Color='#000');
              // filter:DropShadow(Color=#000, OffX=0, OffY=4);
              // zoom: 1;
            }
          }
          .img_container::before {
            z-index: 1;
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            height: 30px;
            background: -webkit-gradient(linear,left bottom,left top,from(#000),to(#2d2d2d));
            background: -webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.45)),to(rgba(45,45,45,0)));
            background: linear-gradient(0deg,rgba(0,0,0,.45),rgba(45,45,45,0));
            content: "";
          }
          .name {
            padding: 5px 0 0 0;
            width: calc(100% - 0px);
            color: #000000;
            font-weight: 400;
            position: relative;
            text-align: left;

            font: 14px/1.5em PingFangSC-Regular,Helvetica Neue,tahoma,arial,sans-serif;
            
            display: -webkit-box;
            /* -webkit-box-orient: vertical; */
            /*! autoprefixer: off */
            -webkit-box-orient: vertical;
            /* autoprefixer: on */
            -webkit-line-clamp: 2;
            overflow: hidden;

            white-space: normal;
          }
          
        }
      }
    }
  }
}

.comment {
  margin: 15px 0 0 0;
  padding: 0 0 2px 0;
  border-bottom: 1px solid #F0F0F0;
  .top {
    display: flex;
    align-items: flex-end;
    margin: 0 15px;
    .title {
      color: #000028;
      font-size: 15px;
      font-weight: 800;
      flex: 1;
    }
  }
  .middle {
    margin: 13px 18px 0;
    .comment_content {
      .user {
        display: flex;
        align-items: center;
        .user_icon {
          width: 30px;
          height: 30px;
          img {
            object-fit: contain;
            width: 100%;
            height: 100%;
            border-radius: 15px;
          }
        }
        .user_name {
          color: #000028;
          font-size: 13px;
          font-weight: 400;
          margin: 0 0 0 10px;
        }
        .user_rank_lv1 {
          background: url(//vm.gtimg.cn/tencentvideo/vstyle/mobile/msite/style/img/sprite_icon_vip_lv.svg) 0 0 no-repeat;
          background-size: 240px auto;
          -webkit-background-size: 240px auto;
          -webkit-transform: scale(.5);
          display: inline-block;
          position: relative;
          width: 18px;
          height: 18px;
          transform: scale(.5);
          width: 41px;
          background-position: -60px 0;
          position: relative;
          bottom: 6px;
          .user_rank_lv1_num {
            -webkit-background-size: 240px auto;
            position: absolute;
            top: 7px;
            left: 8px;
            width: 10px;
            height: 10px;
            background: url(//vm.gtimg.cn/tencentvideo/vstyle/mobile/msite/style/img/sprite_icon_vip_lv.svg) 0 -46px no-repeat;
            background-size: 240px auto;

            top: 8px;
            left: 24px;
            width: 5px;
            height: 6px;
            background-position: 0 -66px;
          }
        }
      }
      .user_comment {
        color: #000028;
        font-size: 13px;
        font-weight: 400;
        line-height: 21px;
        margin: 6px 0 22px 0;
      }
    }
  }
  .bottom {
    .open_app {
      height: 36px;
      margin: 12px auto 12px;
      border: 1px solid #ebebeb;
      border-radius: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      width: 90%;
      .icon {
        width: 25px;
        height: 38px;
        margin: 0 6px 0 0;
        img {
          object-fit: contain;
          width: 100%;
          height: 100%;
        }
      }
      span {
        color: #222;
        font-size: 13px;
        line-height: 34px;
        text-align: center;
        font-weight: 400;
      }
    }
  }
}

.blank {
  width: 100px;
  height: 400px;
}
</style>
