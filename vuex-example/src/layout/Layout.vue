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
        Vue + Vuex Demo @2018 Created By Jiaiyizhen
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
// 引入Menu
import MenuVue from "./Menu";

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
    }
  },
  components: {
    MenuVue
  }
};
</script>

<style>
.layout {
  width: 100%;
  height: 100%;
  min-width: 1024px;
  min-height: 768px;
}

.layout .left-part {
  height: 100%;
}

.layout .right-part {
  width: auto;
  height: 100%;
}

.layout .right-part .right-header {
  width: 100%;
  border-left: 1px solid #fff;
  background-color: #545c64;
}

.layout .right-header .collapse-btn {
  position: relative;
  top: calc(50% - 10px);
  left: 10px;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
}

.layout .right-header .collapse-btn:hover,
.layout .right-header .home-btn:hover {
  color: #ffd04b;
}

.layout .collapse-btn > i,
.layout .home-btn > i {
  font-size: 18px;
}

.layout .collapse-btn > span {
  position: relative;
  top: -1px;
}

.layout .right-header .home-btn {
  position: relative;
  top: calc(50% - 10px);
  left: calc(100% - 80px);
  color: #fff;
  font-size: 18px;
  cursor: pointer;
}

.layout .right-part .right-body {
  width: 100%;
  height: calc(100% - 106px) !important;
  padding: 10px;
  background-color: #fff;
}

.layout .right-part .right-footer {
  width: 100%;
  line-height: 50px;
  text-align: center;
  color: #fff;
  border-left: 1px solid #fff;
  background-color: #545c64;
}
</style>