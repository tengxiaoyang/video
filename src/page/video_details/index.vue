<template>
  	<div class="main">
      <div class="header">
        <div class="header_inner">
          <div class="logo" @click="return_home"></div>
          <div class="right">
            <img class="search_icon" 
              src="../../../src/static/img/zoom_white.png" alt="" 
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
      </div>
      <Player :selected_num="selected_num"></Player>
      <div class="video_info">
        <div class="open_app_top_container">
          <div
            :class="{ 
              open_app_top:!show_bottom_open_app,
              open_app_bottom:show_bottom_open_app
            }"
          >
            <div class="left">
              <div class="icon">
                <img class="icon_img" src="https://i.gtimg.cn/qqlive/images/20190710/i1562744530_1.jpg" alt="">
              </div>
              <span class="text">看全集高清完整版</span>
            </div>
            <div class="right">打开</div>
          </div>
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
                <img class="blue_ray_icon" src="../../../src/static/img/blue_ray.png" alt="">
              </div>
            </div>
            <div class="right">
              <div class="add_to_favorites">
                <img class="add_to_favorites_icon" src="../../../src/static/img/add_to_favorites.png" alt="">
              </div>
              <div class="download">
                <img class="download_icon" src="../../../src/static/img/download.png" alt="">
              </div>
              <div class="option">
                <img class="option_icon" src="../../../src/static/img/option.png" alt="">
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
      <RecommendedForYou 
        :video_content="video_content"
        @video_content="change_video_content($event)"
      ></RecommendedForYou>
      <TrailerInformation
        :trailer_content="trailer_content"
      ></TrailerInformation>
      <Comment
        :comment_content="comment_content"
        :number_of_hot_reviews="number_of_hot_reviews"
      ></Comment>
      <MemberBenefit
        :benefit_content="benefit_content"
      ></MemberBenefit>
      <VipAllPrivileges
        :privilege_content="privilege_content"
      ></VipAllPrivileges>
      <PeripheralRecommended
        :peripheral_content="peripheral_content"
      ></PeripheralRecommended>
  	</div>
</template>

<script>
import HttpClient from '../../config/ajax.js';
import Player from "../../component/Player";
import RecommendedForYou from "../../component/RecommendedForYou";
import TrailerInformation from "../../component/TrailerInformation";
import Comment from "../../component/Comment";
import MemberBenefit from "../../component/MemberBenefit";
import VipAllPrivileges from "../../component/VipAllPrivileges";
import PeripheralRecommended from "../../component/PeripheralRecommended";

export default {
  name: 'video_details',
  components: {
    Player,
    RecommendedForYou,
    TrailerInformation,
    Comment,
    MemberBenefit,
    VipAllPrivileges,
    PeripheralRecommended
  },
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
          img: "https://puui.qpic.cn/vpic/0/r0034yzubgc_160_90_3.jpg/0?max_age=7776000",
          duration: "01:43",
          name: "庞浩洋阿兜KTV高歌 是偶遇还是蓄谋已久？",
        },
        {
          id: 6,
          img: "https://puui.qpic.cn/vpic/0/z0034n7proe_160_90_3.jpg/0?max_age=7776000",
          duration: "01:45",
          name: "《使徒行者3[粤语版]》主题曲《无人问我》MV曝光 林峯陷卧底风云",
        },
        {
          id: 7,
          img: "https://puui.qpic.cn/vpic/0/j3160jx5if8_160_90_3.jpg/0?max_age=7776000",
          duration: "01:46",
          name: "《使徒行者3》启示录01：韦作荣为兄复仇，歃血而归！",
        },
        {
          id: 8,
          img: "https://puui.qpic.cn/vpic/0/h3160wkh4qp_160_90_3.jpg/0?max_age=7776000",
          duration: "01:31",
          name: "《使徒行者3》启示录02：卓凯，留你十年性命，只为今朝",
        },
        {
          id: 9,
          img: "https://puui.qpic.cn/vpic/0/m3160xn2ovs_160_90_3.jpg/0?max_age=7776000",
          duration: "01:45",
          name: "《使徒行者3》不做大哥03：抱着阿兜，想着钉姐！",
        },
        {
          id: 10,
          img: "https://puui.qpic.cn/vpic/0/q3160hmqle2_160_90_3.jpg/0?max_age=7776000",
          duration: "01:16",
          name: "《使徒行者3》退休日记03：输了你，赢了世界又如何！",
        },
        {
          id: 11,
          img: "https://puui.qpic.cn/vpic/0/p31608s30zj_160_90_3.jpg/0?max_age=7776000",
          duration: "01:13",
          name: "《使徒行者3》卓sir上演“窃听风云”，果然姜还是老的辣",
        },
        {
          id: 12,
          img: "https://puui.qpic.cn/vpic/0/n3160wb7aoz_160_90_3.jpg/0?max_age=7776000",
          duration: "01:26",
          name: "《使徒行者3》阿兜solo舞台：撒娇舞燃炸全场，惹粉丝爱",
        },
        {
          id: 13,
          img: "https://puui.qpic.cn/vpic/0/d31606amrmu_160_90_3.jpg/0?max_age=7776000",
          duration: "01:39",
          name: "《使徒行者3》“凯晴夫妇”感情线全回顾：催泪暴击意难平！",
        },
        {
          id: 14,
          img: "https://puui.qpic.cn/vpic/0/n3160igbp10_160_90_3.jpg/0?max_age=7776000",
          duration: "01:17",
          name: "《使徒行者3》升级版《无间道》，全员卧底：我们都是警察！",
        },
        {
          id: 15,
          img: "https://puui.qpic.cn/vpic/0/g31603ulpy2_160_90_3.jpg/0?max_age=7776000",
          duration: "01:17",
          name: "《使徒行者3》4A男团C位出道，卧底哪家强，使徒王中王！",
        },
        {
          id: 16,
          img: "https://puui.qpic.cn/vpic/0/w31606jes0a_160_90_3.jpg/0?max_age=7776000",
          duration: "01:04",
          name: "《使徒行者3》Madam G变身“人形ETC”：抬杠我是专业的！",
        },
        {
          id: 17,
          img: "https://puui.qpic.cn/vpic/0/f3160fxlodc_160_90_3.jpg/0?max_age=7776000",
          duration: "01:35",
          name: "《使徒行者3》卓凯退休日记02：查案打架被冤枉，太难了，兄弟！",
        },
        {
          id: 18,
          img: "https://puui.qpic.cn/vpic/0/u31607ey2ma_160_90_3.jpg/0?max_age=7776000",
          duration: "01:43",
          name: "《使徒行者3》不做大哥好多年02：钓鱼执法很成功，洪英坐馆响当当",
        },
        {
          id: 19,
          img: "https://puui.qpic.cn/vpic/0/m3160o10o9m_160_90_3.jpg/0?max_age=7776000",
          duration: "01:54",
          name: "《使徒行者3》卓凯退休日记01：为兄弟强出头，三年大牢不后悔！",
        },
        {
          id: 20,
          img: "https://puui.qpic.cn/vpic/0/j0034uo27jj_160_90_3.jpg/0?max_age=7776000",
          duration: "03:50",
          name: "《使徒行者3》苗侨伟专访：最开心爆seed回归",
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
      benefit_content: [
        {
          id: 1,
          img: "https://puui.qpic.cn/tv/0/1225053232_460220/0?max_age=7776000",
          name: "看《燕云台》三姐妹",
          ad: "VIP答题赢草原代步车"
        },
        {
          id: 2,
          img: "https://puui.qpic.cn/tv/0/1225033683_460220/0?max_age=7776000",
          name: "王爵使徒开启猎杀模式",
          ad: "VIP享5折购线上观影票"
        },
      ],
      privilege_content: [
        {
          id: 1,
          img: "https://puui.qpic.cn/vupload/0/20181221_9mv7a2peqvf/0",
          name: "积分商城",
          ad_name: "今日特权",
          ad_summary: "全新VIP积分商城上线！超值好礼兑不停！"
        },
        {
          id: 2,
          img: "https://puui.qpic.cn/vupload/0/20180802_hcs3huo3pfi/0",
          name: "1080P",
          summary: "畅享蓝光清晰度"
        },
        {
          id: 3,
          img: "https://puui.qpic.cn/vupload/0/20181221_vru23f4m80d/0",
          name: "线下活动",
          summary: "享专属线下活动"
        },
        {
          id: 4,
          img: "https://puui.qpic.cn/vupload/0/20181221_jun00s86v8o/0",
          name: "生日礼包",
          summary: "陪你成长生日快乐"
        },
        {
          id: 5,
          img: "https://puui.qpic.cn/vupload/0/20180802_edbt41mwzfv/0",
          name: "漫画特权",
          summary: "专属折扣及礼包"
        },
        {
          id: 6,
          img: "https://puui.qpic.cn/vupload/0/20190904_t632g6el5i/0",
          name: "话费福利",
          summary: "话费福利免费领"
        },
        {
          id: 7,
          img: "https://puui.qpic.cn/vupload/0/20181221_r5ilytl4lmm/0",
          name: "折扣享大屏",
          summary: "超级影视VIP折扣升"
        },
        {
          id: 8,
          img: "https://puui.qpic.cn/vupload/0/20180802_0mv9htydljq/0",
          name: "杜比视听",
          summary: "高品质视听体验"
        },
        {
          id: 9,
          img: "https://vfiles.gtimg.cn/wupload/vip.vip_system_privilege_detail_test/20201023_njj19lpafj.png",
          name: "音频特权",
          summary: "随时随地，想听就听"
        },
        {
          id: 10,
          img: "https://puui.qpic.cn/vupload/0/20180802_08sirfjtanz3/0",
          name: "每月优惠券",
          summary: "折扣购买更划算"
        },
        {
          id: 11,
          img: "https://vfiles.gtimg.cn/wupload/vip.vip_system_privilege_detail_online/20200227_1yg7qapu3jwicon1.png",
          name: "超前点播",
          summary: "追剧加速快人一步"
        },
        {
          id: 12,
          img: "https://puui.qpic.cn/vupload/0/20180802_9znejs72ev/0",
          name: "游戏礼包",
          summary: "游戏达人快人一步"
        },
        {
          id: 13,
          img: "https://puui.qpic.cn/vupload/0/20181221_l89s122apil/0",
          name: "升级礼包",
          summary: "等级提升有好礼"
        },
        {
          id: 14,
          img: "https://puui.qpic.cn/vupload/0/20180802_pk2ylffvjz/0",
          name: "点播折扣看",
          summary: "精彩内容，尽享折扣优惠"
        },
        {
          id: 15,
          img: "https://puui.qpic.cn/vupload/0/20200323_qh4wybdvds/0",
          name: "臻彩视听",
          summary: "至臻至善最强观影"
        },
        {
          id: 16,
          img: "https://puui.qpic.cn/vupload/0/20181221_7xbrl7mz11c/0",
          name: "心跳礼包",
          summary: "doki打榜心跳加成"
        },
        {
          id: 17,
          img: "https://puui.qpic.cn/vupload/0/20180802_rbxpld2v2l/0",
          name: "尊贵身份",
          summary: "VIP标识亮起来"
        },
        {
          id: 18,
          img: "https://puui.qpic.cn/vupload/0/20180717_n473qsbe9k/0",
          name: "内容抢先看",
          summary: "精彩剧情，先睹为快"
        },
        {
          id: 19,
          img: "https://puui.qpic.cn/vupload/0/20180802_peib2kllihp/0",
          name: "直播优惠购",
          summary: "精彩瞬间不再错过"
        },
        {
          id: 20,
          img: "https://puui.qpic.cn/vupload/0/20180802_xozw7f1vfl/0",
          name: "草场地特权",
          summary: "专享商城折扣"
        },
        {
          id: 21,
          img: "https://puui.qpic.cn/vupload/0/20180802_pv9uv9cs5ma/0",
          name: "小说特权",
          summary: "书籍折扣购买"
        },
        {
          id: 22,
          img: "https://puui.qpic.cn/vupload/0/20180802_1m5qskacxm1/0",
          name: "道具折扣",
          summary: "用爱发电为爱加V"
        },
        {
          id: 23,
          img: "https://puui.qpic.cn/vupload/0/20180802_0amhp4zdr2e8/0",
          name: "缓存特权",
          summary: "独享线路下载提速"
        },
        {
          id: 24,
          img: "https://puui.qpic.cn/vupload/0/20180801_99da0ag2gth/0",
          name: "赠片送好友",
          summary: "一起分享所有新鲜"
        },
        {
          id: 25,
          img: "https://puui.qpic.cn/vupload/0/20180802_4btj0bqkwxw/0",
          name: "服务特权",
          summary: "人工客服免排队"
        },
        {
          id: 26,
          img: "https://puui.qpic.cn/vupload/0/20180802_0e2nbof32ak5/0",
          name: "弹幕特权",
          summary: "和偶像一起刷弹幕"
        },
        {
          id: 27,
          img: "https://puui.qpic.cn/vupload/0/20190326_a0qruus9tq/0",
          name: "极光优惠购",
          summary: "机构快投8折购"
        },
        {
          id: 28,
          img: "https://puui.qpic.cn/vupload/0/20180802_4eeddbvtux4/0",
          name: "尊享主题",
          summary: "独家定制明星主题"
        },
        {
          id: 29,
          img: "https://puui.qpic.cn/vupload/0/20180801_jag0b63ck8q/0",
          name: "每月观影券",
          summary: "用券影片免费看"
        },
        {
          id: 30,
          img: "https://puui.qpic.cn/vupload/0/20180802_yeeoo1y2rca/0",
          name: "超级影视特权",
          summary: "大屏观影更高清"
        },
        {
          id: 31,
          img: "https://puui.qpic.cn/vupload/0/20180802_t8gv7qhoup/0",
          name: "VIP免费看",
          summary: "VIP内容，随时随地，想看就看"
        },
        {
          id: 32,
          img: "https://puui.qpic.cn/vupload/0/20181221_ai9a6yuhpf/0",
          name: "会员附属卡",
          summary: "与亲友共享VIP"
        },
        {
          id: 33,
          img: "https://puui.qpic.cn/vupload/0/20181221_d4isr3i923t/0",
          name: "出行黑卡",
          summary: "限量同程黑鲸会员"
        },
        {
          id: 34,
          img: "https://puui.qpic.cn/vupload/0/20181221_jun00s86v8o/0",
          name: "福利礼包",
          summary: "会员专属生活福利"
        },
        {
          id: 35,
          img: "https://puui.qpic.cn/vupload/0/20181221_04op378fht9x/0",
          name: "年度礼盒",
          summary: "年度纪念实体礼盒"
        },
        {
          id: 36,
          img: "https://puui.qpic.cn/vupload/0/20190411_w8n2aacavg/0",
          name: "首席体验官",
          summary: "优先体验最新功能"
        },
        {
          id: 37,
          img: "https://puui.qpic.cn/vupload/0/20190411_9techgja9/0",
          name: "每月臻选礼",
          summary: "高端活动专属资格"
        },
        {
          id: 38,
          img: "https://puui.qpic.cn/vupload/0/20180905_j7uo03lfo1p/0",
          name: "臻彩视界",
          summary: "真实世界就在眼前"
        },
        {
          id: 39,
          img: "https://puui.qpic.cn/vupload/0/20190411_yxv6fw38coq/0",
          name: "星光畅享卡",
          summary: "多屏畅通观影"
        },
        {
          id: 40,
          img: "https://puui.qpic.cn/vupload/0/20190411_we6h2bbe9k/0",
          name: "星光俱乐部",
          summary: "高等级用户专享服务"
        },
      ],
      peripheral_content: [
        {
          id: 1,
          img: "https://puui.qpic.cn/iwan_cloud/1/89762c5c7c0c618a32fbb5d0d197aab3?imageView2/3/w/150/h/150?max_age=7776000",
          name: "天涯明月刀",
        },
        {
          id: 2,
          img: "https://puui.qpic.cn/iwan/0/8e00d1027ea2ec3d7111b0db9aca5252/0?max_age=7776000",
          name: "斗罗大陆",
        },
        {
          id: 3,
          img: "https://puui.qpic.cn/iwan/0/32a2927756ac43000182131aabf84280/0?max_age=7776000",
          name: "全民漂移",
        },
        {
          id: 4,
          img: "https://puui.qpic.cn/iwan_cloud/1/c517693534f6d742a184118a6c367bba?imageView2/3/w/150/h/150?max_age=7776000",
          name: "剑侠情缘2：剑歌行",
        },
        {
          id: 5,
          img: "https://puui.qpic.cn/iwan_cloud/1/ce6777dd12370386d6842876a6d8cf72?imageView2/3/w/150/h/150?max_age=7776000",
          name: "一人之下",
        },
        {
          id: 6,
          img: "https://puui.qpic.cn/iwan_cloud/1/d9e558d9107bd43fbb00e356e266a29f?imageView2/3/w/150/h/150?max_age=7776000",
          name: "猎人",
        },
        {
          id: 7,
          img: "https://puui.qpic.cn/iwan_cloud/1/c748c9e79b4a8bc7e38824c4d4085f5b?imageView2/3/w/150/h/150?max_age=7776000",
          name: "妖怪名单之前世今生",
        },
        {
          id: 8,
          img: "https://puui.qpic.cn/iwan_cloud/1/925c1a2da15e9c4d30c342e1fccb35ce?imageView2/3/w/150/h/150?max_age=7776000",
          name: "龙之谷2",
        },
        {
          id: 9,
          img: "https://puui.qpic.cn/iwan_cloud/1/0fde857a8f422921e0da7f5aa2e95dc0?imageView2/3/w/150/h/150?max_age=7776000",
          name: "画境长恨歌",
        },
        {
          id: 10,
          img: "https://puui.qpic.cn/iwan_cloud/1/7658c1bbcc6218329aa39fd47a3026b4?imageView2/3/w/150/h/150?max_age=7776000",
          name: "战歌竞技场",
        },
      ],
    }
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
    change_video_content(e) {
      this.video_content = e;
      console.log(this.video_content);
      // this.get_video(this.selected_type)
    },
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
    },
    set_bottom_open_app() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let offsetTop = document.querySelector(".open_app_top_container").offsetTop;
      if (scrollTop > offsetTop) {
        this.show_bottom_open_app = true;
      } else {
        this.show_bottom_open_app = false;
      };
      // console.log(scrollTop)
      // console.log(offsetTop)
      // console.log(this.show_bottom_open_app)
    }
  }
}

</script>

<style lang="less" scoped>
@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}
@-o-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}
@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}
.header {
  width: 100%;
  height: 50px;
  position: relative;
  .header_inner {
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
}
.video_info {
  .open_app_top_container {
    height: 68px;
    .open_app_top {
      position: absolute;
      top: 263px;
      // border: 1px solid #000;
      border-bottom: 1px solid #F0F0F0;
      width: 100%;
      height: 68px;
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
    .open_app_bottom {
      position: fixed;
      left: -1px;
      bottom: -1px;
      // border: 1px solid #000;
      border-bottom: 1px solid #F0F0F0;
      width: calc(100% + 3px);
      height: 68px;
      padding: 0 12px 11px 12px;
      display: flex;
      align-items: center;
      background: #fff;
      z-index: 3;
      box-shadow: 0 -2px 10px 0 rgba(0,0,0,.08);

      animation: fadeIn .3s ease-in-out;
      animation-fill-mode: both;
      -webkit-animation: fadeIn .3s ease-in-out;
      -webkit-animation-fill-mode: both;

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
          line-height: 40px;
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
</style>
