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
                     v-on:click="confirm('loginForm')">确定</el-button>
          <el-button v-on:click="reset('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// 引入vuex相关方法
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "LoginPage",
  data: function() {
    return {
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
          if (username.trim() !== "jiayizhen") {
            this.showMessage("error", "用户名错误", 1500);
            return false;
          }
          if (password.trim() !== "jiayizhen") {
            this.showMessage("error", "密码错误", 1500);
            return false;
          }
          this.showMessage("success", "登录成功", 1500);
          this.login({
            username: username,
            password: password
          });
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