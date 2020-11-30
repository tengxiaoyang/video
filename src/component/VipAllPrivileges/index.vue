<template>
  <div class="vip_all_privileges">
    <span class="title">VIP全部特权</span>
    <div class="privilege_container">
      <div class="privilege">
        <div 
          class="privilege_list_container_outside"
        >
          <div class="privilege_list_top_container">
            <div class="privilege_list_top" 
              v-for="(privilege_content_item, privilege_content_index) of privilege_content.slice(0, 1)"
              :key="privilege_content_index" 
              @click="route_to('privilege_details')"
            >
              <div class="list_header">
                <div class="img_container">
                  <img lazyload :src="privilege_content_item.img" alt="">
                </div>
                <span class="name">
                  {{privilege_content_item.name}}
                </span>
              </div>
              <div class="ad">
                <span class="ad_name">
                  {{privilege_content_item.ad_name}}
                </span>
                <span class="ad_summary">
                  {{privilege_content_item.ad_summary}}
                </span>
              </div>
              <div class="privilege_blank" :style="{width: 156*privilege_content.length/2 + 'px'}"></div>
            </div>
          </div>
          <div class="privilege_list_container">
            <div class="privilege_list" 
              v-for="(privilege_content_item, privilege_content_index) of privilege_content.slice(1,privilege_content.length)"
              :key="privilege_content_index" 
              @click="route_to('privilege_details')"
            >
              <div class="list_header">
                <div class="img_container">
                  <img lazyload :src="privilege_content_item.img" alt="">
                </div>
                <span class="name">
                  {{privilege_content_item.name}}
                </span>
              </div>
              <span class="summary">
                {{privilege_content_item.summary}}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VipAllPrivileges',
  props: {
    privilege_content: {
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
.vip_all_privileges {
  position: relative;
  margin: 16px 0 0 0;
  padding: 0 0 13px 0;
  border-bottom: 1px solid #F0F0F0;
  // top: 91px;
  .title {
    color: #000028;
    font-size: 19px;
    font-weight: 800;
    margin: 15px 0 0 21px;
    display: block;
  }

  .privilege_container {
    overflow: hidden;
    margin: 14px 0 0 0;
    height: 224px;
    white-space: nowrap;
    .privilege {
      overflow: hidden;
      overflow-x: scroll;
      position: relative;
      padding: 0 8px 0 8px;
      height: 234px;
      .privilege_list_container_outside {
        display: flex;
        .privilege_list_container {
          display: grid;
          grid-template-rows: 97px 97px;
          // grid-template-columns: repeat(16, 155px);
          // grid-template-columns: 155px;
          grid-auto-flow: column;
          height: 191px;
          position: relative;
          top: 11px;
          .privilege_list {
            // border: 1px solid #000;
            background: #fff;
            // margin: -1px 0 2px 1px;
            position: relative;
            // right: 2px;
            width: 155px;
            border-right: 1px solid #f0f0f0;
            border-bottom: 1px solid #f0f0f0;
            .list_header {
              display: flex;
              align-items: center;
              .img_container {
                // width: 100%;
                // height: 195px;
                display: flex;
                justify-content: center;
                // border: 1px solid #000;
                padding: 0 4px 0 10px;
                position: relative;
                height: 45px;
                width: 55px;
                img {
                  object-fit: contain;
                  width: 100%;
                  height: 100%;
                }
              }
              .name {
                display: block;
                width: 95px;
                padding: 0 0 0 2px;
                line-height: 33px;
                color: #f2ca5b;
                font-size: 16px;
                font-weight: 400;
                position: relative;

                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }
            .summary {
              display: block;
              padding: 11px 7px 0 0;
              // width: 46vw;
              line-height: 14px;
              color: #979797;
              font-size: 15px;
              font-weight: 400;
              position: relative;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              word-break: break-all;
              text-align: center;
              width: 100%;
            }
          }
        }
        .privilege_list_top_container {
          display: grid;
          grid-template-columns: 1fr;
          // border: 1px solid #000;
          padding: 9px 11px;
          .privilege_list_top {
            width: 202px;
            // border: 1px solid #000;
            .list_header {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 86px;
              background: #ffedbf;
              border-top-left-radius: 11px;
              border-top-right-radius: 11px;
              .img_container {
                // width: 100%;
                // height: 195px;
                display: flex;
                justify-content: center;
                // border: 1px solid #000;
                padding: 0 4px;
                position: relative;
                height: 62px;
                width: 62px;
                img {
                  object-fit: contain;
                  width: 100%;
                  height: 100%;
                }
              }
              .name {
                display: block;
                padding: 0 0 0 4px;
                line-height: 33px;
                color: #000028;
                font-size: 14px;
                font-weight: 400;
                position: relative;
                font-size: 19px;
                color: #cc9629;
                
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }
            .ad {
              height: 109px;
              padding: 0 10px;
              width: 202px;
              border: 1px solid #f0f0f0;
              border-bottom-left-radius: 11px;
              border-bottom-right-radius: 11px;
              .ad_name {
                display: block;
                text-align: center;
                font-size: 16px;
                color: #000;
                font-weight: 600;
                margin: 8px 0 0 0;
              }
              .ad_summary {
                padding: 5px 0 0 0;
                font-weight: 400;
                position: relative;
                text-align: left;
                color: #979797;
                font-size: 15px;
                
                
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
            .privilege_blank {
              width: 156px;
              height: 7px;
              background: #fff;
              z-index: 1;
              position: absolute;
              top: 201px;
              left: 232px;
            }
          }
        }
      }

    }
  } 
  
}
</style>
