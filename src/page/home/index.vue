<template>
  <div class="home_container">
    <div class="header">
      <div class="top"></div>
      <div class="nav"></div>
    </div>
    <div class="channel"></div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
    }
  },
  computed: {
    num() {
      return this.$store.state.num;
    }
  },
  methods: {
    addNum() {
      let r = Math.floor(Math.random() * 10);
      console.log(r);
      this.$store.commit('ADD_NUM', r)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
