<template>
  <el-container class="layout">
    <el-aside class="left-part"
              width="auto">
      <MenuVue v-bind:isCollapse="isCollapse"
               v-bind:navConfig="navConfig" />
    </el-aside>
    <el-container class="right-part">
      <el-header class="right-header"
                 height="56px">
        <span class="collapse-btn"
              v-on:click="collapseMenu">
          <i v-bind:class="isCollapse ? 'el-icon-arrow-right' : 'el-icon-arrow-left'"></i>
          <span>{{ isCollapse ? "展开" : "收起" }}</span>
        </span>
        <span class="home-btn"
              title="首页"
              v-on:click="goHomePage">
          <i class="el-icon-date"></i>
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
// 引入Menu
import MenuVue from "@/components/Menu.vue";

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
    goHomePage: function() {
      this.$router.push({ path: "/" });
    },
    goMyPage: function() {
      window.open("https://github.com/war408705279", "_blank");
    }
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