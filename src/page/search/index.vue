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
      <div class="search_cancel">返回</div>
    </div>
    <div class="search_history">
      <div class="title">
        <div class="text">搜索历史</div>
        <div class="clear"></div>
      </div>
      <div class="content">
        <div class="item" 
          v-for="(item, index) of search_history" 
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
    ></div>
    
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
    }
  },
  created() {
    this.get_search(this.selected_type)
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
    height: 1200px;
    border: 1px solid #000;
    position: relative;
  }
  .list_margin {
    margin: 36px 0 0 0;
  }
}

</style>
