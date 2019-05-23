<template>
  <div class="home-page">
    <el-card class="home-card"
             v-bind:body-style="{ padding: '0' }">
      <img src="@/assets/images/avator.jpg"
           class="image">
    </el-card>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {};
  }
};
</script>

<style scoped>
.home-page {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.home-page .home-card {
  width: 300px;
  height: 300px;
  position: relative;
  top: calc(50% - 150px);
  margin: 0 auto;
}

.home-page .home-card .image {
  width: 100%;
  height: 100%;
}
</style>