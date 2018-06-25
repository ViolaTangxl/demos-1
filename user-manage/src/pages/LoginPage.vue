<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-img">
        <img src="@/assets/images/github.jpg" />
      </div>
      <el-form v-bind:model="formModel"
               v-bind:rules="rules"
               status-icon
               size="small"
               ref="formModel"
               class="login-form">
        <el-form-item label="用户名"
                      prop="username">
          <el-input v-model="formModel.username"></el-input>
        </el-form-item>
        <el-form-item label="密码"
                      prop="password">
          <el-input type="password"
                    v-model="formModel.password"
                    auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item class="form-btn">
          <el-button type="primary">确定</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data: function() {
    return {
      formModel: {
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
  }
};
</script>

<style scoped>
/* 引入UserPage样式 */
@import url("./LoginPage.css");
</style>