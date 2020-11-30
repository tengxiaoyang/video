<template>
  <div class="peripheral_recommended">
    <div class="peripheral_content">
      <div class="top">
        <div class="title">周边推荐</div>
      </div>
      <div class="peripheral_container">
        <div class="peripheral_outside">
          <a class="peripheral" 
            v-for="(item, index) of peripheral_content" 
            :key="index" 
            @click="get_peripheral(item.id)"
          >
            <div class="img_container">
              <img lazyload :src="item.img" alt="">
            </div>
            <span class="name">
              {{item.name}}
            </span>
            <span class="download">
              下载
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PeripheralRecommended',
  props: {
    peripheral_content: {
      type: Array
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
.peripheral_recommended {
  margin: 15px 0 0 0;
  padding: 0 0 13px 0;
  height: 275px;
  // border-bottom: 1px solid #F0F0F0;
  .peripheral_content {
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
    .peripheral_container {
      overflow: hidden;
      margin: 14px 0 0 0;
      height: 136px;
      white-space: nowrap;
      .peripheral_outside {
        overflow: hidden;
        overflow-x: scroll;
        position: relative;
        padding: 0 8px 0 16px;
        height: 146px;
        .peripheral {
          display: inline-block;
          width: 113px;
          vertical-align: middle;
          text-align: center;
          height: 136px;
          
          .img_container {
            display: flex;
            justify-content: center;
            position: relative;
            width: 64px;
            margin: 0 auto;
            border-radius: 10px;
            img {
              object-fit: contain;
              width: 100%;
              height: 100%;
              border-radius: 10px;
            }
          }
          .name {
            display: block;
            margin: 0 auto;
            width: 108px;
            padding: 9px 0 0 0;
            color: #000028;
            font-weight: 400;
            position: relative;
            text-align: center;
            font-size: 14px;
            
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: break-all;
          }
          .download {
            display: block;
            width: 64px;
            height: 32px;
            margin: 10px auto 0;
            text-align: center;
            line-height: 29px;
            color: #000;
            font-weight: 400;
            opacity: .5;
            position: relative;
            font-size: 14px;
            border: 1px solid #ebebeb;
          }
          
        }
      }
    }
  }
}
</style>
