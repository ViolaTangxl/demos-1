<template>
  <div class="evaluate-page"
       v-loading="pageLoad"
       element-loading-text="玩儿命加载中"
       element-loading-spinner="el-icon-loading"
       element-loading-background="rgba(0, 0, 0, 0.6)">
    <div class="head-container">
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
        <el-form-item label="姓名"
                      prop="name">
          <el-input v-model="evaluateForm.name"
                    placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="性别"
                      prop="sex">
          <el-select v-model="evaluateForm.sex"
                     placeholder="请选择性别">
            <el-option label="男"
                       value="male"></el-option>
            <el-option label="女"
                       value="female"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="邮箱"
                      prop="email">
          <el-input v-model="evaluateForm.email"
                    placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="住址"
                      prop="address">
          <el-input v-model="evaluateForm.address"
                    placeholder="请输入住址"></el-input>
        </el-form-item>
        <el-form-item label="反馈信息"
                      prop="content">
          <el-input type="textarea"
                    v-model="evaluateForm.content"
                    placeholder="请输入反馈信息"
                    v-bind:autosize="{minRows: 5, maxRows: 5}"></el-input>
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
        email: "",
        address: "",
        sex: "",
        content: ""
      },
      formRules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ],
        address: [{ required: true, message: "请输入地址", trigger: "blur" }],
        sex: [{ required: true, message: "请选择性别", trigger: "change" }],
        content: [
          { required: true, message: "请输入反馈信息", trigger: "blur" }
        ]
      }
    };
  }
};
</script>

<style scoped>
/* 引入EvaluatePage样式 */
@import url("./EvaluatePage.css");
</style>