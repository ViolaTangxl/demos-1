<template>
  <div class="evaluate-page">
    <div class="head-container">
      <div class="head-control">
        <!-- 控制器 -->
        <!-- 栅格布局 -->
        <el-row :gutter="10">
          <el-col :span="24"
                  class="control-btns">
            <!-- 重置按钮 -->
            <el-button v-bind:loading="this.resetLoad"
                       v-bind:disabled="this.btnDisable"
                       v-on:click="reset('evaluateForm')">{{this.resetText}}</el-button>
            <!-- 确定按钮 -->
            <el-button type="primary"
                       v-bind:loading="this.confirmLoad"
                       v-bind:disabled="this.btnDisable"
                       v-on:click="confirm('evaluateForm')">{{this.confirmText}}</el-button>
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
          <el-input v-bind:disabled="inputDisabled"
                    v-model="evaluateForm.name"
                    placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="性别"
                      prop="sex">
          <el-select v-bind:disabled="inputDisabled"
                     v-model="evaluateForm.sex"
                     placeholder="请选择性别">
            <el-option label="男"
                       value="male"></el-option>
            <el-option label="女"
                       value="female"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="邮箱"
                      prop="email">
          <el-input v-bind:disabled="inputDisabled"
                    v-model="evaluateForm.email"
                    placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="城市"
                      prop="selectedCity">
          <el-cascader placeholder="请选择城市"
                       expand-trigger="click"
                       style="width: 100%;"
                       v-bind:disabled="inputDisabled"
                       v-bind:options="provinceData"
                       v-model="evaluateForm.selectedCity">
          </el-cascader>
        </el-form-item>
        <el-form-item label="详细地址"
                      prop="detailAdd">
          <el-input v-bind:disabled="inputDisabled"
                    v-model="evaluateForm.detailAdd"
                    placeholder="请输入详细地址"></el-input>
        </el-form-item>
        <el-form-item label="评价"
                      prop="content">
          <el-input type="textarea"
                    placeholder="请输入评价内容"
                    v-bind:disabled="inputDisabled"
                    v-model="evaluateForm.content"
                    v-bind:autosize="{minRows: 5, maxRows: 5}"></el-input>
        </el-form-item>
        <el-form-item label="打分"
                      prop="score">
          <el-rate show-text
                   v-bind:texts="['没意思', '一般般', '有点儿意思', '不错', '真棒']"
                   v-bind:disabled="inputDisabled"
                   v-model="evaluateForm.score"
                   v-bind:colors="['#99A9BF', '#F7BA2A', '#FF9900']">
          </el-rate>
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

// 引入mapState，mapMutations和mapActions
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
// 引入省/市数据
import { provinceData } from "@/config/province";

export default {
  name: "EvaluatePage",
  data: function() {
    return {
      provinceData: provinceData,
      formRules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur"]
          }
        ],
        selectedCity: [
          { required: true, message: "请选择城市", trigger: "change" }
        ],
        detailAdd: [
          { required: true, message: "请输入详细地址", trigger: "blur" }
        ],
        sex: [{ required: true, message: "请选择性别", trigger: "change" }]
      }
    };
  },
  methods: {
    /**
     * 重置表单
     */
    async reset(formName) {
      const response = await this.resetForm();
      if (response) {
        this.$refs[formName].clearValidate();
      }
    },
    /**
     * 提交表单
     */
    confirm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.confirmUpload({
            formValue: this.evaluateForm
          }).then(response => {
            if (response) {
              this.showMessage("success", "提交成功", 1500);
              this.reset(formName);
            }
          });
        } else {
          return false;
        }
      });
    },
    /**
     * 显示提示信息
     */
    showMessage: function(type, message, duration) {
      this.$message({
        type: type,
        message: message,
        center: true,
        duration: duration,
        onClose: true
      });
    },
    ...mapActions("Evaluate", ["confirmUpload", "resetForm"])
  },
  computed: {
    ...mapState("Evaluate", [
      "resetLoad",
      "confirmLoad",
      "btnDisable",
      "resetText",
      "confirmText",
      "evaluateForm",
      "inputDisabled"
    ])
  }
};
</script>

<style>
/* 引入EvaluatePage样式 */
@import url("./EvaluatePage.css");
</style>