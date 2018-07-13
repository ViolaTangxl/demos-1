<template>
  <el-container class="layout">
    <el-aside class="left-part"
              width="auto">
      <div class="logo-container"
           v-bind:style="{backgroundColor: newState.backgroundColor}"
           v-on:click="goHome">
        <img src="@/assets/images/cartoon.gif" />
      </div>
      <MenuVue v-bind:isCollapse="isCollapse"
               v-bind:navConfig="navConfig" />
    </el-aside>
    <el-container class="right-part">
      <el-header class="right-header"
                 height="60px"
                 v-bind:style="{backgroundColor: newState.backgroundColor}">
        <span class="collapse-btn"
              v-bind:style="{color: collapseTextColor}"
              v-on:click="collapseMenu"
              v-on:mouseover="collapseTextColor = newState.selectFrontColor"
              v-on:mouseleave="collapseTextColor = '#fff'">
          <i v-bind:class="isCollapse ? 'el-icon-arrow-right' : 'el-icon-arrow-left'"></i>
          <span>{{ isCollapse ? "展开" : "收起" }}</span>
        </span>
        <!-- 用户下拉菜单 -->
        <span class="user-drop-down">
          <el-dropdown trigger="click"
                       v-on:command="dropDownClick">
            <span class="el-dropdown-link"
                  v-bind:style="{color: dropdownTextColor}"
                  v-on:mouseover="dropdownTextColor = newState.selectFrontColor"
                  v-on:mouseleave="dropdownTextColor = '#fff'">
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
                 height="50px"
                 v-bind:style="{backgroundColor: newState.backgroundColor}">
        <el-button type="text"
                   v-on:click="goMyPage">
          <span v-bind:style="{color: footerTextColor}"
                v-on:mouseover="footerTextColor = newState.selectFrontColor"
                v-on:mouseleave="footerTextColor = '#fff'">User Management System @2018 Created By Jiaiyizhen</span>
        </el-button>
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
      isCollapse: true,
      collapseTextColor: "#fff",
      dropdownTextColor: "#fff",
      footerTextColor: "#fff"
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
    goHome: function() {
      this.$router.push({ path: "/" });
    },
    ...mapActions(["login", "logout"])
  },
  computed: {
    ...mapState(["username"]),
    ...mapState("Custom", ["newState"])
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