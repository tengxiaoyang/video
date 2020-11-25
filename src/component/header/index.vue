<template>
  <div class="main">
    <div class="header">
      <div class="top">
        <div class="logo" @click="return_home"></div>
        <div class="blank"></div>
        <div class="search" 
          @click="route_to('search')"
        >
          <span class="text">{{search_text}}</span>
          <div class="icon"></div>
        </div>
      </div>
      <div class="nav">
        <div class="option_outside">
          <a class="option" 
            :class="{ active_option: item.type === selected_type }"
            v-for="(item, index) of video_option" 
            :key="index" 
            @click="change_type(item.type)"
          >
            {{item.option_name}}
            <span>
              <i></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
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
    }
  },
  methods: {
    return_home() {
      this.selected_type = 1;
      this.change_type(this.selected_type)
    },
    route_to(e) {
      this.$router.push({path: e})
    },
    change_type(e) {
      this.selected_type = e;
      this.$emit('change_type', this.selected_type)
    },
  }
}
</script>

<style lang="less" scoped>
.main {
  .header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    background: #fff;
    height: 91px;
    .top {
      position: relative;
      height: 45px;
      background: #fff;
      width: 100vw;
      // display: flex;
      // align-items: center;
      // border: 1px solid #000;
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
    .nav {
      display: flex;
      align-items: center;
      width: 100%;
      height: 35px;
      overflow: hidden;
      background: #fff;
      margin: 3px 0 0 0;
      position: relative;
      top: 6px;
      // border: 1px solid #000;
      .option_outside {
        width: 97vw;
        height: 47px;
        overflow: hidden;
        overflow-x: scroll;
        white-space: nowrap;
        position: relative;
        // padding: 0 0 0 13px;
        // left: 13px;
        display: flex;
        align-items: center;
        // border: 1px solid #000;
        .active_option {
          display: inline-block;
          // width: 51px;
          height: 45px;
          // margin: 0 20px 0 0;
          // text-align: center;
          // border: 1px solid #000;
          line-height: 38px;
          font-size: 17px;
          color: #ff6022;
          font-weight: 800;
          margin: 0 10px;
          span {
            line-height: 38px;
            font-size: 17px;
            color: #ff6022;
            font-weight: 800;
            width: 100%;
            display: flex;
            justify-content: center;
            
            i {
              display: block;
              width: 12px;
              border-bottom: 2px solid #ff6022;
              // margin: 0 11px;
              position: relative;
              bottom: 5px;
              // border: 1px solid #000;
            }
          }
        }
        a {
          display: inline-block;
          // width: 51px;
          height: 45px;
          // margin: 0 20px 0 0;
          // text-align: center;
          // border: 1px solid #000;
          line-height: 38px;
          font-size: 17px;
          color: #000;
          font-weight: 800;
          margin: 0 10px;
          span {
            line-height: 38px;
            font-size: 17px;
            color: #000;
            font-weight: 800;
            width: 100%;
            display: flex;
            justify-content: center;
            
            i {
              display: block;
              width: 12px;
              border-bottom: 2px solid #fff;
              // margin: 0 11px;
              position: relative;
              bottom: 5px;
              // border: 1px solid #000;
            }
          }
        }
      }
    }
  }
}
</style>
