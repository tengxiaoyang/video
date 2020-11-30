<template>
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
</template>

<script>
export default {
  name: 'Comment',
  props: {
    comment_content: {
      type: Array
    },
    number_of_hot_reviews: {
      type: Number
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    route_to(e) {
      this.$router.push({path: e})
    }
  }
}
</script>

<style lang="less" scoped>
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
</style>
