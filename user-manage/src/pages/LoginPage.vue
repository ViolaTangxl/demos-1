<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-img">
        <img src="@/assets/images/github.jpg" />
      </div>
      <el-form v-bind:model="loginForm"
               v-bind:rules="rules"
               status-icon
               size="small"
               ref="loginForm"
               class="login-form">
        <el-form-item label="用户名"
                      prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码"
                      prop="password">
          <el-input type="password"
                    v-model="loginForm.password"
                    auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item class="form-btn">
          <el-button type="primary"
                     v-bind:loading="confirmLoading"
                     v-on:click="confirm('loginForm')">{{confirmText}}</el-button>
          <el-button v-bind:disabled="resetDisabled"
                     v-on:click="reset('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
/**
 * File name: LoginPage.vue
 * Description: System login page
 * Auther: Zhazha jiayizhen
 * Create Date: 2018-06-25
 */

// 引入vuex相关方法
import { mapState, mapActions, mapGetters } from "vuex";
// 引入用户信息
import { userList } from "@/config/userInfo";

export default {
  name: "LoginPage",
  data: function() {
    return {
      confirmLoading: false,
      confirmText: "登录",
      resetDisabled: false,
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    confirm: function(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const { username, password } = this.loginForm;
          const match = userList.find(
            user => user.username === username.trim()
          );
          if (!match) {
            this.showMessage("error", "用户不存在", 1500);
            return false;
          }
          if (match.password !== password.trim()) {
            this.showMessage("error", "密码错误", 1500);
            return false;
          }
          this.confirmLoading = true;
          this.confirmText = "登录中...";
          this.resetDisabled = true;
          const timeOut = setTimeout(() => {
            this.confirmLoading = false;
            this.confirmText = "登录";
            this.resetDisabled = false;
            this.showMessage("success", "登录成功", 1500);
            this.login(match);
            clearTimeout(timeOut);
          }, 2000);
        } else {
          return false;
        }
      });
    },
    reset: function(formName) {
      this.$refs[formName].resetFields();
    },
    showMessage: function(type, message, duration) {
      this.$message({
        type: type,
        message: message,
        center: true,
        duration: duration,
        onClose: true
      });
    },
    ...mapActions(["login"])
  }
};
</script>

<style scoped>
/* 引入UserPage样式 */
@import url("./LoginPage.css");
</style>