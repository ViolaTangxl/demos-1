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
      <!-- 表单主体 -->
      <el-form v-bind:model="evaluateForm"
               v-bind:rules="formRules"
               ref="evaluateForm"
               label-width="100px">
        <el-form-item label="活动名称"
                      prop="name">
          <el-input v-model="evaluateForm.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域"
                      prop="region">
          <el-select v-model="evaluateForm.region"
                     placeholder="请选择活动区域">
            <el-option label="区域一"
                       value="shanghai"></el-option>
            <el-option label="区域二"
                       value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间"
                      required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker type="date"
                              placeholder="选择日期"
                              v-model="evaluateForm.date1"
                              style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line"
                  :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker type="fixed-time"
                              placeholder="选择时间"
                              v-model="evaluateForm.date2"
                              style="width: 100%;"></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="即时配送"
                      prop="delivery">
          <el-switch v-model="evaluateForm.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质"
                      prop="type">
          <el-checkbox-group v-model="evaluateForm.type">
            <el-checkbox label="美食/餐厅线上活动"
                         name="type"></el-checkbox>
            <el-checkbox label="地推活动"
                         name="type"></el-checkbox>
            <el-checkbox label="线下主题活动"
                         name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光"
                         name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源"
                      prop="resource">
          <el-radio-group v-model="evaluateForm.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式"
                      prop="desc">
          <el-input type="textarea"
                    v-model="evaluateForm.desc"></el-input>
        </el-form-item>
      </el-form>
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
      pageLoad: false,
      evaluateForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formRules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  }
};
</script>

<style scoped>
/* 引入EvaluatePage样式 */
@import url("./EvaluatePage.css");
</style>