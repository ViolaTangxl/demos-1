<template>
  <div class="enter-page">
    <Layout v-bind:navConfig="navConfig" />
    <transition name="el-fade-in">
      <LoginPage v-show="loginShow" />
    </transition>
  </div>
</template>

<script>
// 引入cookie
import { setCookie, getCookie } from "@/assets/plugins/cookie";
// 引入Layout
import Layout from "@/layout/Layout.vue";
// 引入登录页面
import LoginPage from "@/pages/LoginPage";

export default {
  name: "Enter",
  props: ["navConfig"],
  created() {
    const user = getCookie("user");
    if (!user) {
      this.loginShow = true;
    }
  },
  data() {
    return {
      loginShow: false
    };
  },
  components: {
    Layout,
    LoginPage
  }
};
</script>

<style>
@import url("./common.css");

* {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
}

.enter-page {
  width: 100%;
  height: 100%;
}
</style>
