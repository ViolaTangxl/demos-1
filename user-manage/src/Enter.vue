<template>
  <div class="enter-page">
    <Layout v-bind:navConfig="navConfig" />
    <transition name="el-fade-in">
      <LoginPage v-show="!islogin" />
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
// 引入vuex相关方法
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "Enter",
  props: ["navConfig"],
  mounted() {
    const username = getCookie("username");
    const password = getCookie("password");
    if (username && password) {
      this.login({ username: username, password: password });
    }
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["login", "logout"])
  },
  computed: {
    ...mapState(["islogin"]),
    ...mapGetters(["getLoginState"])
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