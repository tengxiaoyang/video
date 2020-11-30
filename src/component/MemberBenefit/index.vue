<template>
  <div class="member_benefit">
    <div class="benefit_content">
      <div class="top">
        <div class="title">会员福利</div>
      </div>
      <div class="benefit_container">
        <div class="benefit_outside">
          <a class="benefit" 
            v-for="(item, index) of benefit_content" 
            :key="index" 
            @click="get_trailer(item.id)"
          >
          
            <div class="img_container">
              <img lazyload :src="item.img" alt="">
            </div>
            <span class="name">
              {{item.name}}
            </span>
            <span class="ad">
              {{item.ad}}
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemberBenefit',
  props: {
    benefit_content: {
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
.member_benefit {
  margin: 15px 0 0 0;
  padding: 0 0 13px 0;
  border-bottom: 1px solid #F0F0F0;
  .benefit_content {
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
    .benefit_container {
      overflow: hidden;
      margin: 14px 0 0 0;
      height: 126px;
      white-space: nowrap;
      .benefit_outside {
        overflow: hidden;
        overflow-x: scroll;
        position: relative;
        padding: 0 8px 0 16px;
        height: 136px;
        .benefit {
          display: inline-block;
          width: 135px;
          margin: 0 8px 0 0px;
          vertical-align: middle;
          text-align: center;
          height: 126px;
          
          .img_container {
            display: flex;
            justify-content: center;
            position: relative;
            img {
              object-fit: contain;
              width: 100%;
              height: 100%;
            }
          }
          .name {
            padding: 5px 0 0 0;
            width: 100%;
            color: #000028;
            font-weight: 400;
            position: relative;
            text-align: left;

            font: 13px/1.5em PingFangSC-Regular,Helvetica Neue,tahoma,arial,sans-serif;
            
            display: -webkit-box;
            /* -webkit-box-orient: vertical; */
            /*! autoprefixer: off */
            -webkit-box-orient: vertical;
            /* autoprefixer: on */
            -webkit-line-clamp: 1;
            overflow: hidden;

            white-space: normal;
          }
          .ad {
            width: 100%;
            color: #000028;
            font-weight: 400;
            position: relative;
            text-align: left;

            font: 13px/1.5em PingFangSC-Regular,Helvetica Neue,tahoma,arial,sans-serif;
            
            display: -webkit-box;
            /* -webkit-box-orient: vertical; */
            /*! autoprefixer: off */
            -webkit-box-orient: vertical;
            /* autoprefixer: on */
            -webkit-line-clamp: 1;
            overflow: hidden;

            white-space: normal;
          }
          
        }
      }
    }
  }
}
</style>
