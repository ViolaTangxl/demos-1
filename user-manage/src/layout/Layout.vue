<template>
  <el-container class="layout">
    <el-aside class="left-part"
              width="auto">
      <div class="logo-container">
        <img src="@/assets/images/logo.gif" />
      </div>
      <MenuVue v-bind:isCollapse="isCollapse"
               v-bind:navConfig="navConfig" />
    </el-aside>
    <el-container class="right-part">
      <el-header class="right-header"
                 height="60px">
        <span class="collapse-btn"
              v-on:click="collapseMenu">
          <i v-bind:class="isCollapse ? 'el-icon-arrow-right' : 'el-icon-arrow-left'"></i>
          <span>{{ isCollapse ? "展开" : "收起" }}</span>
        </span>
        <!-- 用户下拉菜单 -->
        <span class="user-drop-down">
          <el-dropdown trigger="click"
                       v-on:command="dropDownClick">
            <span class="el-dropdown-link">
              {{username}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="homepage">首页</el-dropdown-item>
              <el-dropdown-item command="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </span>
      </el-header>
      <el-main class="right-body">
        <transition name="el-fade-in">
          <router-view/>
        </transition>
      </el-main>
      <el-footer class="right-footer"
                 height="50px">
        <el-button type="text"
                   v-on:click="goMyPage">User Management System @2018 Created By Jiaiyizhen</el-button>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
/**
 * File name: Layout.vue
 * Description: System layout file
 * Auther: Zhazha jiayizhen
 * Create Date: 2018-06-25
 */

// 引入Menu
import MenuVue from "@/components/Menu.vue";
// 引入vuex相关方法
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "Layout",
  props: ["navConfig"],
  created: function() {},
  data: function() {
    return {
      isCollapse: true
    };
  },
  methods: {
    collapseMenu: function() {
      this.isCollapse = !this.isCollapse;
    },
    dropDownClick: function(command) {
      switch (command) {
        case "homepage":
          this.$router.push({ path: "/" });
          break;
        case "logout":
          this.logout();
          break;
      }
    },
    goMyPage: function() {
      window.open("https://github.com/war408705279", "_blank");
    },
    ...mapActions(["login", "logout"])
  },
  computed: {
    ...mapState(["username"])
  },
  components: {
    MenuVue
  }
};
</script>

<style>
/* 引入Layout样式 */
@import url("./Layout.css");
</style>