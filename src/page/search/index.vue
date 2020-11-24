<template>
  <div class="main">
    <div class="header">
      <div class="search_logo"></div>
      <div class="search_box">
        <div class="search_box_inner">
          <input class="search_text" type="search" :placeholder="search_text">
          <div class="clear_button">
            <img src="../../../public/static/img/close.png" alt="">
          </div>
        </div>
      </div>
      <div class="search_cancel" 
        @click="route_to('/')"
      >返回</div>
    </div>
    <div class="search_history">
      <div class="title" v-if="search_history.length!==0">
        <div class="text">搜索历史</div>
        <div class="clear" 
          @click="clear_search_history"
        ></div>
      </div>
      <div class="content">
        <div class="item" 
          v-for="(item, index) of search_history_short" 
          :key="index"
        >
          {{item.name}}
        </div>
      </div>
    </div>
    <div class="tab" 
      :class="{tab_fixed:tab_fixed}"
    >
      <div class="option_outside">
        <a class="option" 
          :class="{ active_option: item.type === selected_type }"
          v-for="(item, index) of search_option" 
          :key="index" 
          @click="get_search(item.type)"
        >
          {{item.option_name}}
          <span>
            <i></i>
          </span>
        </a>
      </div>
    </div>
    <div class="list" 
      :class="{list_margin:tab_fixed}"
    >
      <div class="list_item"
        v-for="(item, index) of hot_list" 
        :key="index" 
        @click="add_to_search_history(item.num)"
      >
        <div 
          class="num" :class="{
            num_red: item.num === 1,
            num_orange: item.num === 2,
            num_yellow: item.num === 3,
          }"
        >{{item.num}}</div>
        <div class="name">{{item.name}}</div>
        <div class="rise">
          <img src="../../../public/static/img/rise.png" alt="" v-if="item.rise===true">
          <img src="../../../public/static/img/fall.png" alt="" v-if="item.rise===false">
          <img src="../../../public/static/img/undefined.png" alt="" v-if="item.rise===undefined">
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'search',
  data() {
    return {
      search_text: "使徒行者3",
      search_history: [
        {
          name: "陈情令"
        },
        {
          name: "小猪佩奇第7季"
        },
        {
          name: "爱的厘米"
        },
        {
          name: "狼殿下"
        },
        {
          name: "幸福三重奏 第3季"
        },
        {
          name: "从结婚开始恋爱"
        },
      ],
      search_history_short: [],
      selected_type: 1,
      search_option: [
        
        {
          type: 1,
          option_name: "热搜",
        },
        {
          type: 2,
          option_name: "电视剧",
        },
        {
          type: 3,
          option_name: "少儿",
        },
        {
          type: 4,
          option_name: "综艺",
        },
        {
          type: 5,
          option_name: "电影",
        },
        {
          type: 6,
          option_name: "动漫",
        },
        {
          type: 7,
          option_name: "明星",
        },
        {
          type: 8,
          option_name: "游戏",
        },
        {
          type: 9,
          option_name: "音乐",
        },
        {
          type: 10,
          option_name: "热点",
        },
        {
          type: 11,
          option_name: "实时",
        },
      ],
      tab_fixed: false,
      hot_list: [
        {
          num: 1,
          name: "演员请就位 第2季",
          rise: true,
        },
        {
          num: 2,
          name: "哈哈哈哈哈",
          rise: true,
        },
        {
          num: 3,
          name: "斗罗大陆",
          rise: false,
        },
        {
          num: 4,
          name: "爱的厘米",
          rise: false,
        },
        {
          num: 5,
          name: "狼殿下",
          rise: false,
        },
        {
          num: 6,
          name: "燕云台",
          rise: false,
        },
        {
          num: 7,
          name: "隐秘而伟大",
          rise: false,
        },
        {
          num: 8,
          name: "从结婚开始恋爱",
          rise: false,
        },
        {
          num: 9,
          name: "令人心动的offer 第2季",
          rise: false,
        },
        {
          num: 10,
          name: "我们的歌 第2季",
          rise: false,
        },
        {
          num: 11,
          name: "姜子牙",
          rise: false,
        },
        {
          num: 12,
          name: "2020中国好声音",
          rise: false,
        },
        {
          num: 13,
          name: "小猪佩奇第7季",
          rise: false,
        },
        {
          num: 14,
          name: "德云斗笑社",
          rise: false,
        },
        {
          num: 15,
          name: "奥特银河格斗 巨大阴谋 日语版",
          rise: false,
        },
        {
          num: 16,
          name: "红色",
          rise: false,
        },
        {
          num: 17,
          name: "最初的相遇，最后的别离",
          rise: false,
        },
        {
          num: 18,
          name: "幸福三重奏 第3季",
          rise: false,
        },
        {
          num: 19,
          name: "汪汪队立大功第二季",
          rise: undefined,
        },
        {
          num: 20,
          name: "瞄准",
          rise: false,
        },
        {
          num: 21,
          name: "令人心动的offer",
          rise: false,
        },
        {
          num: 22,
          name: "八佰",
          rise: false,
        },
        {
          num: 23,
          name: "陈情令",
          rise: false,
        },
        {
          num: 24,
          name: "鹿鼎记",
          rise: false,
        },
        {
          num: 25,
          name: "熊出没之丛林总动员",
          rise: false,
        },
        {
          num: 26,
          name: "奔跑吧 第4季",
          rise: false,
        },
        {
          num: 27,
          name: "使徒行者3[普通话版]",
          rise: false,
        },
        {
          num: 28,
          name: "全职高手 第2季",
          rise: false,
        },
        {
          num: 29,
          name: "王牌对王牌",
          rise: false,
        },
        {
          num: 30,
          name: "斗破苍穹 第3季",
          rise: false,
        },
      ]
    }
  },
  created() {
    this.get_search(this.selected_type)
    this.get_search_history_short(this.search_history)
  },
  mounted() {
    window.addEventListener('scroll', this.set_tab_fixed)
  },
  destroyed() {
    window.removeEventListener('scroll', this.set_tab_fixed)
  },
  methods: {
    get_search(e) {
      console.log("执行get_search")
      this.selected_type = e;
      console.log("执行完get_search")
    },
    set_tab_fixed() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let offsetTop = document.querySelector(".search_history").offsetTop;
      if (scrollTop - 60 > offsetTop) {
        this.tab_fixed = true;
      } else {
        this.tab_fixed = false;
      };
      // console.log(scrollTop)
      // console.log(offsetTop)
      // console.log(this.set_tab_fixed)
    },
    get_search_history_short(e) {
      console.log("开始执行get_search_history_short")
      let str_length = 0;
      let short_e = [];
      for (let i = 0; i < e.length; ++ i) {
        str_length += e[i].name.length;
        if (str_length <= 35) {
          short_e = e.slice(e.length - i - 1, e.length)
        }
      }
      this.search_history_short = short_e;
      console.log(this.search_history)
      console.log(this.search_history_short)
    },
    route_to(e) {
      this.$router.push({path: e});
    },
    clear_search_history() {
      this.search_history = [];
      this.search_history_short = [];
    },
    add_to_search_history(e) {
      for (let i = 0; i < this.hot_list.length; ++ i) {
        if (this.hot_list[i].num === e) {
          this.search_history.push(this.hot_list[i]);
        }
      }
      console.log(this.hot_list)
      console.log(this.search_history)
      this.get_search_history_short(this.search_history);
    }
  }
}

</script>

<style lang="less" scoped>
.main {
  .header {
    display: flex;
    align-items: center;
    padding: 10px;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;
    background: #fff;
    .search_logo {
      background: url(https://vm.gtimg.cn/tencentvideo/vstyle/mobile/v2/style/img/common/search_logo.png);
      background-size: cover;
      width: 78px;
      height: 29px;
    }
    .search_box {
      flex: 1;
      // width: 187px;
      height: 33px;
      padding: 0 1px;
      margin: 0 10px;
      border-radius: 33px;
      background-image: linear-gradient(90deg,#5dcf0c 0,#2dbe8f 30%,#03b0ff);
      display: flex;
      justify-content: center;
      align-items: center;
      .search_box_inner {
        border-radius: 33px;
        width: 100%;
        height: 31px;
        position: relative;
        background: #fff;
        display: flex;
        align-items: center;
        .search_text {
          border-radius: 33px;
          margin: 0 0 0 10px;
          flex: 1;
        }
        .clear_button {
          width: 19px;
          height: 19px;
          margin: 0 5px 0 0;
          display: flex;
          img {
            object-fit: contain;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .search_cancel {
      color: #383838;
      font-size: 14px;
      font-weight: 400;
    }
  }
  .search_history {
    width: 100%;
    position: relative;
    margin: 56px 0 0 0;
    .title {
      display: flex;
      align-items: center;
      height: 34.2px;
      .text {
        flex: 1;
        color: #8d8d8d;
        font-size: 13px;
        font-weight: 400;
        margin: 0 0 0 10px;
      }
      .clear {
        width: 14px;
        height: 15px;
        background: url(//puui.qpic.cn/vupload/0/1573442796883_d9hk5rczu0k.png/0) no-repeat;
        background-size: 46px;
        background-position: 0 0;
        margin: 0 17px 0 0;
      }
    }
    .content {
      padding: 0 10px;
      .item {
        display: inline-block;
        max-width: calc(100% - 10px);
        height: 30px;
        margin: 0 10px 6px 0;
        padding: 0 10px;
        border-radius: 2px;
        background: #f7f7f7;
        color: #4c4c4c;
        font-size: 14px;
        font-weight: 400;
        line-height: 30px;
      }
    }
  }
  .tab {
    // margin: -3px 0 0 0;
    position: sticky;
    display: flex;
    align-items: center;
    width: 100%;
    height: 37px;
    background: #fff;
    z-index: 1;
    top: 53px;
    overflow: hidden;
    overflow-x: auto;
    background: #fff;
    .option_outside {
      width: 100vw;
      height: 37px;
      display: flex;
      align-items: center;
      display: inline-block;
      position: relative;
      margin: 0 8px;
      white-space: nowrap;
      .active_option {
        display: inline-block;
        height: 45px;
        line-height: 38px;
        font-size: 14px;
        color: #ff6022;
        font-weight: 700;
        margin: 0 10px;
        span {
          line-height: 38px;
          width: 100%;
          display: flex;
          justify-content: center;
          i {
            display: block;
            width: 17px;
            border-bottom: 2px solid #ff6022;
            position: relative;
            bottom: 7px;
          }
        }
      }
      a {
        display: inline-block;
        height: 45px;
        line-height: 38px;
        font-size: 14px;
        color: #000;
        font-weight: 400;
        margin: 0 10px;
        span {
          line-height: 38px;
          width: 100%;
          display: flex;
          justify-content: center;
          i {
            display: block;
            width: 17px;
            border-bottom: 2px solid #fff;
            position: relative;
            bottom: 7px;
          }
        }
      }
    }
    .option_outside::-webkit-scrollbar {
      display: none;
      overflow: hidden;
    }
  }
  .tab::-webkit-scrollbar {
    display: none;
    overflow: hidden;
  }
  .tab_fixed {
    position: fixed;
  }
  .tab_fixed::-webkit-scrollbar {
    display: none;
    overflow: hidden;
  }

  .list {
    width: 100%;
    // height: 1200px;
    // border: 1px solid #000;
    position: relative;
    padding: 0 3px 0 12px;
    margin: 8px 0 0 0;
    .list_item {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ebebeb;
      height: 50px;
      .num {
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 2px;
        background: #e6e6e6;
        color: #878787;
        font-size: 12px;
        font-weight: 400;
        font-family: PingFangSC-Regular, "Helvetica Neue", tahoma, arial, sans-serif;
        line-height: 17px;
        text-align: center;
        vertical-align: middle;
        margin: 0 5px 0 0;
      }
      .num_red {
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 2px;
        background: #e42818;
        color: #fff;
        font-size: 12px;
        font-weight: 400;
        font-family: PingFangSC-Regular, "Helvetica Neue", tahoma, arial, sans-serif;
        line-height: 17px;
        text-align: center;
        vertical-align: middle;
        margin: 0 5px 0 0;
      }
      .num_orange {
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 2px;
        background: #ff7100;
        color: #fff;
        font-size: 12px;
        font-weight: 400;
        font-family: PingFangSC-Regular, "Helvetica Neue", tahoma, arial, sans-serif;
        line-height: 17px;
        text-align: center;
        vertical-align: middle;
        margin: 0 5px 0 0;
      }
      .num_yellow {
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 2px;
        background: #ffb900;
        color: #fff;
        font-size: 12px;
        font-weight: 400;
        font-family: PingFangSC-Regular, "Helvetica Neue", tahoma, arial, sans-serif;
        line-height: 17px;
        text-align: center;
        vertical-align: middle;
        margin: 0 5px 0 0;
      }
      .name {
        flex: 1;
        color: #4c4c4c;
        font-size: 14px;
        font-weight: 400;
        height: 16px;
        line-height: 16px;
      }
      .rise {
        width: 11px;
        height: 11px;
        display: flex;
        align-items: center;
        margin: 0 11px 0 0;
        img {
          object-fit: contain;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .list_margin {
    margin: 45px 0 0 0;
  }
}

</style>
