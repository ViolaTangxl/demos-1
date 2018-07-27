<template>
  <div class="evaluate-page">
    <div class="head-container">
      <span class="head-title">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item v-bind:to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(item, index) in fullPath"
                              v-bind:key="index">{{ item }}</el-breadcrumb-item>
        </el-breadcrumb>
      </span>
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
      <!-- 提交结果对话框 -->
      <el-dialog title="反馈结果"
                 width="50%"
                 top="50px"
                 class="result-dialog"
                 v-bind:visible="dialogVisible"
                 v-bind:close-on-click-modal="false"
                 v-bind:close-on-press-escape="false"
                 v-bind:show-close="false">
        <span slot="title"
              class="dialog-title">反馈内容</span>
        <el-form v-bind:model="resultForm"
                 label-width="100px">
          <el-form-item label="姓名">
            <el-input v-bind:disabled="true"
                      v-model="resultForm.name"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-input v-bind:disabled="true"
                      v-model="resultForm.sex"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-bind:disabled="true"
                      v-model="resultForm.email"></el-input>
          </el-form-item>
          <el-form-item label="城市">
            <el-input v-bind:disabled="true"
                      v-model="resultForm.selectedCity"></el-input>
          </el-form-item>
          <el-form-item label="详细地址">
            <el-input v-bind:disabled="true"
                      type="textarea"
                      v-model="resultForm.detailAdd"></el-input>
          </el-form-item>
          <el-form-item label="评价">
            <el-input v-bind:disabled="true"
                      type="textarea"
                      v-model="resultForm.content"></el-input>
          </el-form-item>
          <el-form-item label="打分">
            <el-input v-bind:disabled="true"
                      v-model="resultForm.score"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer"
              class="dialog-footer">
          <el-button v-on:click="dialogVisible = false">关闭</el-button>
        </span>
      </el-dialog>
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
  mounted: function() {
    // 生成面包屑导航
    const match = this.$router.options.routes.find(
      item => item.path === this.routePath
    );
    this.fullPath = match ? match.fullpath : [];
  },
  data: function() {
    return {
      fullPath: [],
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
      },
      dialogVisible: false,
      resultForm: {
        name: "",
        email: "",
        selectedCity: "",
        detailAdd: "",
        sex: "",
        content: "",
        score: 0
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
        this.showNotification("success", "重置成功", 1500);
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
              this.showNotification("success", "提交成功", 1500);
              this.reset(formName);
              console.log(response);
              this.dialogVisible = true;
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
    showNotification: function(type, message, duration) {
      this.$notify({
        title: "提示",
        type: type,
        message: message,
        duration: duration
      });
    },
    ...mapActions("Evaluate", ["confirmUpload", "resetForm"])
  },
  computed: {
    ...mapState(["routePath"]),
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