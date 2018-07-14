<template>
  <div class="custom-page"
       v-loading="pageLoad"
       element-loading-text="玩儿命加载中"
       element-loading-spinner="el-icon-loading"
       element-loading-background="rgba(0, 0, 0, 0.6)">
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
      <!-- 栅格布局 -->
      <el-row :gutter="10">
        <!-- 背景色选择器 -->
        <el-col :span="12"
                class="theme-item">
          <div class="container">
            <h3>背景颜色</h3>
            <el-color-picker v-model="backgroundColor"></el-color-picker>
          </div>
        </el-col>
        <!-- 未选中字体颜色选择器 -->
        <el-col :span="12"
                class="theme-item">
          <div class="container">
            <h3>未选中字体颜色</h3>
            <el-color-picker v-model="frontColor"></el-color-picker>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <!-- 选中字体颜色选择器 -->
        <el-col :span="12"
                class="theme-item">
          <div class="container">
            <h3>选中字体颜色</h3>
            <el-color-picker v-model="selectFrontColor"></el-color-picker>
          </div>
        </el-col>
        <!-- 透明度 -->
        <el-col :span="12"
                class="theme-item">
          <div class="container">
            <h3>透明度</h3>
            <el-slider v-model="transparent"></el-slider>
          </div>
        </el-col>
      </el-row>
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

// 引入mapState，mapMutations和mapActions
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  name: "CustomPage",
  data: function() {
    return {
      backgroundColor: "#231f20",
      frontColor: "#fff",
      selectFrontColor: "#ffd04b",
      transparent: 100
    };
  },
  methods: {
    reset: function() {
      this.backgroundColor = "#231f20";
      this.frontColor = "#fff";
      this.selectFrontColor = "#ffd04b";
      this.transparent = 100;
      this.resetState();
    },
    confirm: function() {
      this.confirmState({
        backgroundColor: this.backgroundColor,
        frontColor: this.frontColor,
        selectFrontColor: this.selectFrontColor,
        transparent: this.transparent
      });
    },
    ...mapMutations("Custom", ["resetState"]),
    ...mapActions("Custom", ["confirmState"])
  },
  computed: {
    ...mapState("Custom", ["pageLoad"])
  }
};
</script>

<style>
/* 引入CustomPage样式 */
@import url("./CustomPage.css");
</style>