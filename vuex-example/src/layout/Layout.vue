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
        <span class="header-btn"
              v-on:click="collapseMenu">
          <i v-bind:class="isCollapse ? 'el-icon-arrow-right' : 'el-icon-arrow-left'"></i>
          <span>{{ isCollapse ? "展开" : "收起" }}</span>
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

.layout .right-header .header-btn {
  position: relative;
  top: calc(50% - 10px);
  left: 10px;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  display: inline-block;
}

.layout .right-header .header-btn:hover {
  color: #ffd04b;
}

.layout .header-btn > i {
  font-size: 18px;
}

.layout .header-btn > span {
  position: relative;
  top: -1px;
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