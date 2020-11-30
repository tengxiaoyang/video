<template>
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
</template>

<script>
export default {
  name: 'Item',
  props: {
    trailer_content: {
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
              
              text-shadow: 0 0 4.5px #000, 0 0 4.5px #000;
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
</style>
