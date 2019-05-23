<template>
  <div class="home-page">
    <el-card class="home-card"
             :body-style="{ padding: '0px' }">
      <img src="@/assets/images/avatar.jpg"
           class="card-image" />
      <div class="card-info">
        <el-badge value="Auther"
                  class="info-badge">
          <span>Zhazha Jiayizhen</span>
        </el-badge>
      </div>
    </el-card>
  </div>
</template>

<script>
/**
 * File name: HomePage.vue
 * Description: System home page
 * Auther: Zhazha jiayizhen
 * Create Date: 2018-06-30
 */

export default {
  name: "HomePage",
  data: function() {
    return {};
  }
};
</script>

<style>
/* 引入HomePage样式 */
@import url("./HomePage.css");
</style>