<template>
  <div class="not-found-page">
    <div class="btn-container">
      <img src="@/assets/images/404.jpg" />
      <el-button class="go-home-btn"
                 v-on:click="goHome"
                 plain>返回主页</el-button>
    </div>
  </div>
</template>

<script>
/**
 * File name: NotFoundPage.vue
 * Description: System 404 not found page
 * Auther: Zhazha jiayizhen
 * Create Date: 2018-06-25
 */

export default {
  name: "NotFoundPage",
  data: function() {
    return {};
  },
  methods: {
    goHome: function() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style scoped>
/* 引入NotFoundPage样式 */
@import url("./NotFoundPage.css");
</style>