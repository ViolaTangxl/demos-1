<template>
  <div class="custom-page">
    <div class="head-container">
      <span class="head-title">自定义主题</span>
      <div class="head-control">
        <!-- 控制器 -->
        <!-- 栅格布局 -->
        <el-row :gutter="10">
          <el-col :span="24"
                  class="control-btns">
            <!-- 重置按钮 -->
            <el-button v-on:click="reset">重置</el-button>
            <!-- 确定按钮 -->
            <el-button type="primary"
                       v-on:click="confirm">确定</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="theme-container">
      <div class="theme-row">
        <!-- 栅格布局 -->
        <el-row :gutter="10">
          <!-- 背景色选择器 -->
          <el-col :span="8"
                  class="theme-item">
            <div class="container">
              <h3>背景颜色选择器</h3>
              <el-color-picker v-model="backgroundColor"></el-color-picker>
            </div>
          </el-col>
          <!-- 字体颜色色选择器 -->
          <el-col :span="8"
                  class="theme-item">
            <div class="container">
              <h3>字体颜色选择器</h3>
              <el-color-picker v-model="frontColor"></el-color-picker>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="theme-row"
           style="top: 10%;"></div>
    </div>
  </div>
</template>

<script>
/**
 * File name: CustomPage.vue
 * Description: Custom theme page
 * Auther: Zhazha jiayizhen
 * Create Date: 2018-07-10
 */

export default {
  name: "CustomPage",
  data: function() {
    return {
      backgroundColor: "",
      frontColor: ""
    };
  },
  methods: {
    reset: function() {
      console.log("重置");
    },
    confirm: function() {
      console.log("确定");
    }
  }
};
</script>

<style>
/* 引入CustomPage样式 */
@import url("./CustomPage.css");
</style>