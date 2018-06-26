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
// 引入用户信息
import { userList } from "@/config/userInfo";

export default {
  name: "Enter",
  props: ["navConfig"],
  mounted() {
    const username = getCookie("username");
    if (username) {
      const match = userList.find(user => user.username === username);
      if (match) {
        this.login(match);
      }
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