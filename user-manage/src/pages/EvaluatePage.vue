<template>
  <div class="evaluate-page"
       v-loading="pageLoad"
       element-loading-text="玩儿命加载中"
       element-loading-spinner="el-icon-loading"
       element-loading-background="rgba(0, 0, 0, 0.6)">
    <div class="head-container">
      <span class="head-title">反馈页面</span>
      <div class="head-control">
        <!-- 控制器 -->
        <!-- 栅格布局 -->
        <el-row :gutter="10">
          <el-col :span="24"
                  class="control-btns">
            <!-- 重置按钮 -->
            <el-button>重置</el-button>
            <!-- 确定按钮 -->
            <el-button type="primary">提交</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="main-container">
    </div>
  </div>
</template>

<script>
/**
 * File name: EvaluatePage.vue
 * Description: evaluate page
 * Auther: Zhazha jiayizhen
 * Create Date: 2018-07-15
 */

export default {
  name: "EvaluatePage",
  data: function() {
    return {
      pageLoad: false
    };
  }
};
</script>

<style scoped>
/* 引入EvaluatePage样式 */
@import url("./EvaluatePage.css");
</style>