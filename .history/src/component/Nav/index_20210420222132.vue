<template>
  <div class="container">
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
.container {
  height: 41px;
  
}

  

</style>
