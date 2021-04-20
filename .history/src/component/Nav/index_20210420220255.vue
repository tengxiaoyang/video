<template>
  <div class="nav">
    <div class="nav_inner">
      <ul>
        <li 
          class="option" 
          :class="{ active_option: item.type === selected_type }"
          v-for="(item, index) of video_option" 
          :key="index" 
          @click="change_type(item.type)"
        >
          {{item.option_name}}
          <span>
            <i></i>
          </span>
        </li>
      </ul>
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
      
    }
  },
  computed: {
    selected_type() {
      return this.$store.state.SelectedType
    },
  },
  methods: {
    change_type(e) {
      this.$store.commit("set_selected_type", e)
      this.$emit('change_type')
    },
  }
}
</script>

<style lang="less" scoped>

.nav {
  height: 41px;
  position: relative;
  overflow: hidden;
  z-index: 2;
  background: #fff;
  .nav_inner {
    overflow-x: auto;
    padding-left: 3px;
    background: #fff;
    ul {
      width: 200%;
      .active_option {
        float: left;
        padding: 0 10px 9px;
        line-height: 38px;
        font-size: 17px;
        color: #ff6022;
        font-weight: 800;
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
      li {
        float: left;
        padding: 0 3px 3px 3px;
        line-height: 38px;
        font-size: 17px;
        color: #000;
        font-weight: 800;
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
}

  

</style>
