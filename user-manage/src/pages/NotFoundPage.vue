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
export default {
  name: "NotFound",
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