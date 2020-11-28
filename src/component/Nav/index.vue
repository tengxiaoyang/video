<template>
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
</template>

<script>
export default {
  name: 'Nav',
  props: {
    video_option: {
      type: Array
    }
  },
  data() {
    return {
      selected_type: 1,
    }
  },
  methods: {
    change_type(e) {
      this.selected_type = e;
      this.$emit('change_type', this.selected_type)
    },
  }
}
</script>

<style lang="less" scoped>
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
  .option_outside {
    width: 97vw;
    height: 47px;
    overflow: hidden;
    overflow-x: scroll;
    white-space: nowrap;
    position: relative;
    display: flex;
    align-items: center;
    .active_option {
      display: inline-block;
      height: 45px;
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
          position: relative;
          bottom: 5px;
        }
      }
    }
    a {
      display: inline-block;
      height: 45px;
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
          position: relative;
          bottom: 5px;
        }
      }
    }
  }
}
  

</style>
