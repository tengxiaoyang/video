<template>
  <div class="main">
    <div class="header">
      <div class="search_logo"></div>
      <div class="search_box">
        <div class="search_box_inner">
          <input class="search_text" type="search" :placeholder="search_text">
          <div class="clear_button"></div>
        </div>
      </div>
      <div class="search_cancel">返回</div>
    </div>
    <div class="search_history"></div>
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
    .search_logo {
      background: url(https://vm.gtimg.cn/tencentvideo/vstyle/mobile/v2/style/img/common/search_logo.png);
      background-size: cover;
      width: 78px;
      height: 29px;
    }
    .search_box {
      flex: 1;
      height: 29px;
      padding: 0 10px;
      margin: 0 10px;
      border-radius: 33px;
      // background: #fff;
      background-image: linear-gradient(90deg,#5dcf0c 0,#2dbe8f 30%,#03b0ff);
      .search_box_inner {

      }
    }
    .search_cancel {
      width: 62px;
    }
  }
}

</style>
