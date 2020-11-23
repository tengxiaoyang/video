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
      <div class="content"></div>
    </div>
    <div class="tab"></div>
    <div class="list"></div>
    
  </div>
</template>

<script>
export default {
  name: 'search',
  data() {
    return {
      search_text: "使徒行者3"
    }
  },
  created(){
    
  },
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
    border: 1px solid #000;
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
      // background: #fff;
      background-image: linear-gradient(90deg,#5dcf0c 0,#2dbe8f 30%,#03b0ff);
      display: flex;
      justify-content: center;
      align-items: center;
      .search_box_inner {
        border-radius: 33px;
        width: 100%;
        // width: 181px;
        height: 31px;
        position: relative;
        background: #fff;
        display: flex;
        // justify-content: center;
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
    height: 80px;
    border: 1px solid #000;
    position: relative;
    margin: 56px 0 0 0;
    .title {
      border: 1px solid #000;
      display: flex;
      align-items: center;
      height: 34.2px;
      .text {
        border: 1px solid #000;
        flex: 1;
        color: #8d8d8d;
        font-size: 13px;
        font-weight: 400;
      }
      .clear {
        border: 1px solid #000;
        width: 30px;
        height: 30px;
          background: url(//puui.qpic.cn/vupload/0/1573442796883_d9hk5rczu0k.png/0) no-repeat;
        background-size: 53px;
        background-position: 0 0;
      }
    }
  }
}

</style>
